import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

/**
 * @description 获取用户信息
 * @param {*} req
 * @param {*} context
 * @returns
 */
export async function GET(req: NextResponse, context: any) {
  const id = context.params?.id;
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      email: true,
      bio: true,
      image: true,
    },
  });

  return NextResponse.json({ data: user, code: 200, msg: "success" }, { status: 200 });
  // return new NextResponse("success", { status: 200 });
}

/**
 * @description 修改用户信息
 * @param {*} req
 * @param {*} context
 * @returns
 */
export async function PUT(req: NextResponse, context: any) {
  const id = context.params?.id;
  const body = await req.json();
  console.log(body);
  try {
    const user = await prisma.user.update({
      where: { id },
      data: body,
      select: {
        id: true,
        username: true,
        email: true,
        bio: true,
        image: true,
      },
    });

    return NextResponse.json({ data: user, code: 200, msg: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null, code: 500, msg: "error" }, { status: 500 });
  }
}
