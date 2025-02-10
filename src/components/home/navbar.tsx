import Image from "next/image";
import { Button } from "../utils/button";
import { LangButton } from "../utils/lang-button";

export const Navbar = () => {
    return (
        <div className=" w-full h-20 flex flex-wrap justify-between">
            <div className="flex items-center">
                <Image src={"/assets/logo.svg"} alt="netflix logo" className=" w-24 h-6 netflixLg:h-10 netflixLg:w-auto" width={148} height={40} />
            </div>
            <div className=" flex items-center space-x-3">
                <LangButton />
                <div className=" h-8 font-medium text-sm">
                    <Button>
                        <button className="bg-inherit">Sign in</button>
                    </Button>
                </div>

            </div>
        </div>
    );
};