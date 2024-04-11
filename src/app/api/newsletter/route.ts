import { CustomError } from "@/lib/CustomError";
import { newsletterSchema } from "@/lib/schema/newsletterSchema";
import { ApiResponse } from "@/lib/types/server-response";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const POST = async (req: NextRequest): Promise<ApiResponse> => {
  try {
    const body = newsletterSchema.parse(await req.json());

    const prisma = new PrismaClient();
    await prisma.newsletterSubscription.create({ data: body });

    return NextResponse.json({
      data: {
        message: "Successfully subscribed to the newsletter.",
      },
    });
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        ...CustomError.AlreadyExists("Email already exists").toJSON(),
      );
    }
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.errors.map((error) => error.message).join("\n") },
        { status: 400 },
      );
    } else {
      return NextResponse.json(...CustomError.toJSON(error));
    }
  }
};
