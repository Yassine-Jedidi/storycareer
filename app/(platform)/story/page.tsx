import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const StoryPage = () => {
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
      data-table
    </div>
  );
};

export default StoryPage;
