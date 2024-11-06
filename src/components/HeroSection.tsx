import Image from "next/image";
import classNames from "classnames";
import WeddingFlower from "../../public/svgs/weddingFlower1.svg";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundPosition: "50% 10%" }}
      className={classNames({
        "relative h-[95vh] bg-[url('/slider/IFX_9622.jpg')] bg-cover bg-center bg-no-repeat ":
          true,
      })}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end pb-[1rem] text-[#E6E6E6] text-[24px]">
        <q className="text-[#E6E6E6] text-[24px] text-center opacity-50 mx-[3rem] font-tangerine">
          Love does not consist in gazing at each other, but in looking outward
          together in the same direction.
        </q>
        <p className="font-[tangerine] text-[3rem] max-[400px]:text-[2.5rem]">
          Moyosoluwa weds Olasehinde
        </p>
      </div>

      <div className="fixed top-[2rem] left-[2rem] max-[444px]:top-[1rem] max-[444px]:left-[1rem] z-40">
        <Image src={"/header/logo.svg"} width={70} height={70} alt="M | O" />
        <Image
          className="-mt-[3rem] ml-[2rem]"
          src={WeddingFlower}
          alt=""
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

export default HeroSection;
