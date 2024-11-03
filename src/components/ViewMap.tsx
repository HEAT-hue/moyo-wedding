import classNames from "classnames"
import Link from "next/link"
// import Image from "next/image"

const ViewMap = () => {
    return (
        <div className="px-inlinePage py-8">
            <div>
                <Link href={"https://maps.app.goo.gl/zyH1crc5cucEZLDc8"} className="block">
                    <div className={
                        classNames({
                            "relative h-[30vh] rounded-md overflow-hidden bg-[url('/header/viewmap.png')] bg-cover bg-center bg-no-repeat shadow-xl": true,
                        })
                    }>
                    </div >
                </Link>
            </div>
        </div>
    )
}

export default ViewMap