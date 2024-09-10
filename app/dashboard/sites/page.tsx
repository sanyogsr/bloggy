import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { FileIcon, PlusCircle } from "lucide-react";
export default function SiteRoute() {
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className="mr-2 size-4" />
            Create Sites
          </Link>
        </Button>
      </div>

      <div
        className="flex flex-col justify-center items-center border-2 border-dashed p-8
         animate-in fade-in-50 rounded-md text-center
      "
      >
        <div className="flex size-20 rounded-full bg-primary/10 justify-center items-center cursor-pointer ">
          <FileIcon className="size-10 text-primary" />
        </div>
        <h2 className="mt-2">You don't have any site Created</h2>
        <p className="mt-2 mb-8 text-muted-foreground text-sm max-w-sm mx-auto leading-6">
          You currently don't have any sites. Please create some so tht you can
          see them right here!
        </p>
      </div>
    </>
  );
}
