import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const SavesPage = async () => {
  const { userId } = auth();
  const saves = await prisma.save.findMany();
  return <div>SavesPage</div>;
};

export default SavesPage;
