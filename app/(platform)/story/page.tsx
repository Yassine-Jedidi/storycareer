import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Columns } from "./_components/columns";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";

const StoryPage = async () => {
  const { userId } = auth();
  const stories = await prisma.story.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      userId: userId!,
    },
  });
  return (
    <div className="flex flex-col space-y-5 w-full">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">My stories</h1>
        <Link href="/story/new">
          <Button>
            <Plus className="h-5 w-5 mr-2" />
            Create new Story
          </Button>
        </Link>
      </div>
      <Separator />
      <DataTable
        data={stories}
        columns={Columns}
        searchValue="title"
        placeholder="Search by title.."
      />
    </div>
  );
};

export default StoryPage;
