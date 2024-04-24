import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface Body {
    secret: string;
    tags?: string[];
    routes?: string[];
}

export const runtime = "edge";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const body: Body = await req.json();
    // Check for secret to confirm this is a valid request
    if (body.tags) {
        console.log("Revalidating tags", body.tags);
        body.tags.forEach((tag) => revalidateTag(tag));
    }
    if (body.routes) {
        body.routes.forEach((route) => revalidatePath(route));
    }

    return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
