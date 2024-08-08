import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const {userId} = auth()
    if (!userId) return NextResponse.json('Unauthorized')

    const body = await request.json()
    const newSave = await prisma.save.create({
        data:{
            ...body
        }
    })
    return NextResponse.json(newSave,{status : 201})
}