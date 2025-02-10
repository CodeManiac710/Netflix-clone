import Image from "next/image";
import { Button } from "../utils/button";
import { LangButton } from "../utils/lang-button";

export const Navbar = () => {
    return (
        <div className=" w-full flex">
            <Image src={"/assets/logo.svg"} alt="netflix logo" width={100} height={50} />
            <div>
                <LangButton />
                <Button title="Sign in"/>
            </div>
        </div>
    );
};