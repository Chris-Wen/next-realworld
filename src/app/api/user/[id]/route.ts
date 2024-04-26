import { NextResponse } from "next/server"

export async function GET(request: any, context:any) {

    console.log(111, context)
    // const user = await db.user.findOne({ id })
    return NextResponse.json({data:[], code:200, msg: 'success'}, { status: 200 })
    // return new NextResponse('success', { status: 200 })
}