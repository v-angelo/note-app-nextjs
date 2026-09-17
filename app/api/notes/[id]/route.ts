import { connectDB } from "@/lib/mongodb";
import notes from "@/models/notesModel";
import { NextRequest, NextResponse } from "next/server";

// get note
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const noteDetails = await notes.findById({ _id: id });

    return NextResponse.json(
      { message: "Note fetched successfully!!", data: noteDetails },
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

// update note
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;
    const reqBody = await req.json();

    const updatedNotes = await notes.findByIdAndUpdate({ _id: id }, reqBody, {
      new: true,
    });

    return NextResponse.json(
      { message: "Note updated successfully!!", data: updatedNotes },
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

// delete note
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;

    const deletedNote = await notes.findByIdAndDelete({ _id: id });

    return NextResponse.json(
      { message: "Note deleted successfully!!", data: deletedNote },
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
