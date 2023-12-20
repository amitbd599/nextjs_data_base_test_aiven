import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    let prisma = new PrismaClient();
    let reqBody = await req.json();
    let result = await prisma.profile.findMany();

    console.log(result)

    return NextResponse.json({ status: true, data: result });
  } catch (e) {
    return NextResponse.json({ status: false, data: e.toString() });
  }
}