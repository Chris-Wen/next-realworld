// prisma实例化最佳实践 -- 接近db连接数问题
// https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient, Prisma } from "@prisma/client";

const prismaClientSingleton = () => {
  let opt: Prisma.PrismaClientOptions = {};

  // 开发环境开启log日志
  if (process.env.NODE_ENV === "development") {
    opt["log"] = ["query", "info", "warn", "error"];
  }

  return new PrismaClient(opt);
};

declare global {
  // eslint-disable-next-line no-unused-vars
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
