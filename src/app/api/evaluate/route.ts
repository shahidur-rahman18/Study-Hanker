import { NextResponse } from "next/server";
import { assessmentSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);
    const parsed = assessmentSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid payload",
          issues: parsed.error.issues.map((i) => ({
            path: i.path.join("."),
            message: i.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Profile received. Our mentors will reach out shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unexpected error" },
      { status: 500 }
    );
  }
}