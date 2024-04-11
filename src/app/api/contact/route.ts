import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { SendEmail, sendEmail } from "@/lib/twillio";
import { contactFormSchema } from "@/lib/schema/contactFormSchema";
import { type ApiResponse } from "@/lib/types/server-response";

const SEND_GRID_TO_EMAIL = process.env.SEND_GRID_TO_EMAIL!;

export const POST = async (req: NextRequest): Promise<ApiResponse> => {
  try {
    const body = contactFormSchema.parse(await req.json());

    const data: SendEmail = {
      to: SEND_GRID_TO_EMAIL,
      subject: "Contact Form - Website",
      data: body,
      templateId: "d-f3db072b7ab248e8b6d750d2a6eab90e",
    };

    const successful = await sendEmail(data);

    if (!successful) {
      throw new Error("failed to send email");
    }

    return NextResponse.json({
      data: {
        message: "Successfully sent the feedback email.",
      },
    });
  } catch (e) {
    console.dir(e, {depth: null});
    if (e instanceof ZodError)
      return NextResponse.json(
        { error: e.errors.map((error) => error.message).join("\n") },
        { status: 400 },
      );

    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
};
