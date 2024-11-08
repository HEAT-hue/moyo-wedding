import React from "react";
import Link from "next/link";

const Registry = () => {
  return (
    <Link href={"https://wishgum.com/w/moyoola"} target="_blank">
      <div className="text-[2rem] p-[3rem] w-full text-center  bg-[url('/assets/animatedLove.webp')] bg-cover mt-[5rem] text-[white]">
        visit our registry
      </div>
    </Link>
  );
};

export default Registry;
