import { NextResponse } from "next/server"

export async function GET(request: any, context:any) {

    console.log(context)
    // const user = await db.user.findOne({ id })
    return NextResponse.json({data:[], code:200, msg: 'success'}, { status: 200 })
}