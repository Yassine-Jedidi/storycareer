import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request : NextRequest){
    const {userId} = auth()
    if (!userId) return NextResponse.json("Unauthorized!",{status:500})

    const body = await request.json();
    const newStory = await prisma.story.create({
        data:{
            ...body
        }
    })
    return NextResponse.json(newStory,{status:201});
}