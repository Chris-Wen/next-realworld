import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(request: any, context: any) {
  const user = await prisma.user.findMany({
    where: { id: id },
  });
  return NextResponse.json({ data: [], code: 200, msg: "success" }, { status: 200 });
}
