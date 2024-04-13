import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message:"chal bhai mere chalta hu..."
    })
    
}