// 封装response

import { NextResponse } from "next/server";

export class ApiResponse {
  static success<T = any>(data: T): NextResponse {
    return NextResponse.json(data, { status: 200 });
  }

  static badRequest(err: unknown): NextResponse {
    return NextResponse.json({ errors: err }, { status: 400 });
  }

  static unauthorized(err: unknown): NextResponse {
    return NextResponse.json({ errors: err }, { status: 401 });
  }
  static notFound(err: unknown): NextResponse {
    return NextResponse.json({ errors: err }, { status: 404 });
  }

  static internalServerError(err: unknown): NextResponse {
    return NextResponse.json({ errors: err }, { status: 500 });
  }

  static forbidden(err: unknown): NextResponse {
    return NextResponse.json({ errors: err }, { status: 403 });
  }

  static noContent(): NextResponse {
    return NextResponse.json({}, { status: 200 });
  }
}
