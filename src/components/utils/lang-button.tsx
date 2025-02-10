"use client";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from "next/image";
import { useState } from "react";

const languages = Array(["English", "Hindi"])

export const LangButton = () => {

    const [lang, setLang] = useState("English");

    return (<div>
        
        <button className=" w-16 h-8 flex items-center justify-evenly rounded-sm border border-white">
            <Image src={"/assets/lang-symbol.svg"} alt="lang symbol" width={15} height={15} />

            <ArrowDropDownIcon />
        </button>
        <div>
        </div>
    </div>
    )
}