import { NextResponse } from "next/server";

type Data = { data: any };
type Error = { error: string };
type ApiResponse = NextResponse<Data | Error>;
