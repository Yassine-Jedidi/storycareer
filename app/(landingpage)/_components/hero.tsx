import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32 text-center space-y-3 min-h-full px-5">
      <h2 className="text-sm font-medium">Welcome to Story Career</h2>
      <h1 className="text-3xl md-text-5xl font-bold max-w-2xl">
        Discover and Share Inspring Career Journeys
      </h1>
      <p className="max-w-lg text-muted-foreground">
        Story Career is a unique platform where individuals from all walks of
        life can share their career stories, challenges, and successes. Whether
        you&apos;re just starting out.
      </p>
      <Link href="/stories">
        <Button>Discover People Stories</Button>
      </Link>
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/reading.svg"
          alt="reading"
          layout="fill"
          objectFit="contain"
          className="w-auto h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
