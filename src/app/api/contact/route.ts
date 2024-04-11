import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { SendEmail, sendEmail } from "@/lib/twillio";
import { contactFormSchema } from "@/lib/schema/contactFormSchema";
import { type ApiResponse } from "@/lib/types/server-response";
import { PrismaClient } from "@prisma/client";
import { CustomError } from "@/lib/CustomError";

const SEND_GRID_TO_EMAIL = process.env.SEND_GRID_TO_EMAIL!;

export const POST = async (req: NextRequest): Promise<ApiResponse> => {
  try {
    const body = contactFormSchema.parse(await req.json());
    const prisma = new PrismaClient();

    let user = await prisma.contactFormUser.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user == null) {
      user = await prisma.contactFormUser.create({
        data: {
          email: body.email,
        },
      });
    }

    if (user.status === "BLOCKED") {
      throw CustomError.Unauthorized("unauthorized");
    }

    const data: SendEmail = {
      to: SEND_GRID_TO_EMAIL,
      subject: "Contact Form - Website",
      data: body,
      templateId: "d-f3db072b7ab248e8b6d750d2a6eab90e",
    };

    const successful = await sendEmail(data);
    await prisma.contactForm.create({
      data: {
        email: body.email,
        message: body.message,
        name: body.name,
        company: body.company,
        website: body.website,
        contactFormUserId: user.id,
      },
    });

    if (!successful) {
      throw CustomError.ServerError();
    }

    return NextResponse.json({
      data: {
        message: "Successfully sent the feedback email.",
      },
    });
  } catch (error) {
    console.dir(error, { depth: null });
    if (error instanceof ZodError)
      return NextResponse.json(
        { error: error.errors.map((error) => error.message).join("\n") },
        { status: 400 },
      );

    return NextResponse.json(...CustomError.toJSON(error));
  }
};
