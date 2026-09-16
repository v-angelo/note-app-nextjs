import { connectDB } from "@/lib/mongodb";
import notes from "@/models/notesModel";
import { NextRequest, NextResponse } from "next/server";

// add notes
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const newNote = await notes.create(body);

    return NextResponse.json(
      { message: "Note created Successfully!!", data: newNote },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "Something went wrong!!", data: {}, error: err },
      { status: 500 },
    );
  }
}

// get all notes
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const searchParams = req.nextUrl.searchParams;
    const email = searchParams.get("email");

    const allNotes = await notes.find({ userMail: email });

    // console.log(allNotes);

    return NextResponse.json(
      { message: "Notes fetched Successfully!!", data: allNotes },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "Something went wrong!!", data: {}, error: err },
      { status: 500 },
    );
  }
}
