import Image from "next/image"
import classNames from "classnames"

const HeroSection = () => {
    return (
        <div className={classNames({
            "relative h-[50vh] bg-[url('/header/heroImg.png')] bg-cover bg-center bg-no-repeat": true,
        })}>

            {/* Quote */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-inlinePage">
                <q className="text-[#E6E6E6] text-[24px] text-center">Love does not consist in gazing at each other, but in looking outward together in the same direction.</q>
            </div>

            {/* M | O Logo */}
            <Image src={"/header/logo.svg"} className="absolute top-[2vh] left-[5vw] z-10" width={70} height={70} alt="M | O" />
        </div>
    )
}

export default HeroSection