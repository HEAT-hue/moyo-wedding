import React from "react";
import SehindeMoyo from "../../public/svgs/sehindeMoyo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center bg-[#0A112F] justify-between p-[5rem] pb-[1rem]">
      <div></div>
      <div className="w-[40%] flex items-end">
        <Image src={SehindeMoyo} alt="sehindeMoyo" />
        <Image src={"/header/logo.svg"} width={200} height={200} alt="M | O" />
      </div>
    </div>
  );
};

export default Footer;
