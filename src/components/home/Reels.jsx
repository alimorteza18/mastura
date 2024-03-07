import Image from "next/image";

const Reels = () => {
    return (<section className="w-full flex justify-center items-center z-10 mt-20 px-4">
        <div className="xl:w-[70%] w-[100%] flex md:bg-white bg-transparent flex-col md:p-5 p-0 rounded-3xl max-w-[1400px]">
            <div className="flex w-full space-x-3 space-x-reverse md:px-0 px-4">
                <Image src='/icons/reels-icon.svg'
                    alt="vide-icon"
                    width={22}
                    height={22}
                    quality={100} />
                <h1 className="text-xl font-bold z-10">محتوای کاربران مسطورا</h1>
            </div>
            <div className="w-full flex mt-6 md:justify-between justify-center">
                <Image className="cursor-pointer"
                    src='/images/video1.svg'
                    alt="vide" width={320}
                    height={612}
                    quality={100} />
                        <Image className="cursor-pointer md:block hidden"
                    src='/images/video.svg'
                    alt="vide" width={320}
                    height={612}
                    quality={100} />
                        <Image className="cursor-pointer md:block hidden"
                    src='/images/video1.svg'
                    alt="vide" width={320}
                    height={612}
                    quality={100} />
                    
                
            </div>
        </div>
    </section>);
}

export default Reels;