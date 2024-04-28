import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export async function GET(req: NextResponse, context: any) {
  const id = context.params?.id;
  const user = await prisma.user.findMany({
    where: { id: id },
  });

  console.log(id, user);
  return NextResponse.json({ data: [], code: 200, msg: "success" }, { status: 200 });
  // return new NextResponse('success', { status: 200 })
}
