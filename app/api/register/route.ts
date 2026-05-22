import { connectDB } from "@/lib/mongodb";
import users from "@/models/userModel";
import bcrypt from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

// register controller
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();

    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists! Please Login!!" },
        { status: 409 },
      );
    } else {
      const encryptPassword = await bcrypt.hash(password, 10);

      const newUser = await users.create({
        name,
        email,
        password: encryptPassword,
      });

      return NextResponse.json(
        { message: "User Registered Successfully!!", data: newUser },
        { status: 201 },
      );
    }
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "Something went wrong!!", data: {} },
      { status: 500 },
    );
  }
}
