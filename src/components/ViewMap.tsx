"use client";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import OwambeDance from "../../public/assets/owambe-dance.gif";
import ProgramFlower from "../../public/svgs/programFlower.svg";
import Mileke from "../../public/assets/mileke.jpg";
import GbengaImg from "../../public/assets/Gbenga.jpg";
import CopyIcon from "../../public/assets/copy.png";
import { useState } from "react";

const ViewMap = () => {
    const [copyNumber, setCopyNumber] = useState<string | null>();

    const handleCopyNumber = async (value: string) => {
        try {
            await navigator.clipboard.writeText(value || "");
            setCopyNumber(value);
            setTimeout(() => setCopyNumber(null), 2000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="px-[5rem] py-[5rem] max-[1200px]:py-[3rem] max-[694px]:px-4">
            <div className="font-[tangerine] text-[#0A112F] text-[3rem] flex items-center justify-center gap-8 mb-[5rem] max-[1200px]:mb-[3rem] max-[587px]:flex-col">
                <h2 className="text-center">It&apos;s a Yoruba party!</h2>
                <Image
                    src={OwambeDance}
                    alt="owambe"
                    width={150}
                    height={200}
                    className="rounded-2xl max-[587px]:w-[300px]"
                />
                <h2 className="text-center">Rice, Stew, Very, Plenty!</h2>
            </div>
            <div className="h-max flex gap-[2rem] max-[1200px]:flex-col">
                <div className="w-[50%] h-max  max-[1200px]:w-full">
                    <Link
                        target="_blank"
                        href={"https://maps.app.goo.gl/zyH1crc5cucEZLDc8"}
                        className="block"
                    >
                        <div
                            className={classNames({
                                "relative h-[45vh] flex items-center justify-center rounded-2xl overflow-hidden bg-[url('/assets/eventCenter.png')] bg-top bg-cover bg-center bg-no-repeat shadow-xl":
                                    true,
                            })}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-50"></div>
                            <p className="text-[#fff] text-[2rem] max-[375px]:text-[1.5rem] bg-[#255660] rounded-2xl px-4 py-2">
                                Locate Venue Via Map
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="relative text-[#fff] bg-[#255660] h-[45vh] w-[50%] max-[1200px]:w-full rounded-2xl">
                    <Image
                        src={ProgramFlower}
                        alt="program-flower"
                        className="absolute right-0 top-0 z-20"
                    />
                    <div className="flex flex-col justify-center md:justify-start h-full pb-[4rem] pl-[4rem] gap-4 max-[485px]:pb-[2rem] max-[485px]:pl-[2rem] max-[485px]:pb-[1rem] max-[485px]:pl-[1rem]">
                        <p
                            className={`font-[tangerine] text-[4rem] mt-3 opacity-10 max-[694px]:text-[3rem] max-[485px]:text-[2rem]`}
                        >
                            Event Program
                        </p>
                        <ul className="opacity-50">
                            <li>Engagement: Friday - 12 PM</li>
                            <li>Church: Saturday - 11 AM</li>
                            <li>Reception: Follows immediately after church</li>
                        </ul>

                        <div className="absolute bottom-5 z-40 flex flex-col gap-y-3">
                            {/* Copy Number */}
                            <div className="flex items-center gap-2 cursor-pointer w-max" onClick={() => handleCopyNumber("08100550405")}>
                                <Image
                                    src={Mileke}
                                    alt="Mileke"
                                    width={40}
                                    height={40}
                                    className="rounded-full hover:rounded-md transition-all duration-300 ease-in-out cursor-pointer"
                                />
                                <p className="opacity-70">
                                    Mileke: 08100550405
                                </p>
                                <Image src={CopyIcon} alt="copy" width={20} height={20} />
                                {copyNumber == "08100550405" && (
                                    <span className="text-sm text-green-500 mt-1">Copied!</span>
                                )}
                            </div>

                            {/* Copy Number */}
                            <div className="flex items-center gap-2 cursor-pointer w-max" onClick={() => handleCopyNumber("08064004788")}>
                                <Image
                                    src={GbengaImg}
                                    alt="Gbenga"
                                    width={32}
                                    height={32}
                                    className="rounded-full hover:rounded-md transition-all duration-300 ease-in-out cursor-pointer"
                                />
                                <p className="opacity-70">
                                    Gbenga: 08064004788
                                </p>
                                <Image src={CopyIcon} alt="copy" width={20} height={20} />
                                {copyNumber == "08064004788" && (
                                    <span className="text-sm text-green-500 mt-1">Copied!</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewMap;
