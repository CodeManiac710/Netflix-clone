"use client";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from "next/image";
import { useState } from "react";

export const LangButton = () => {
    const languages = ["English", "Hindi"]
    const [drop, isdropped] = useState(false);
    const [lang, setLang] = useState("English");

    return (
        <div>
            <button className={` w-16 h-8 flex items-center justify-evenly rounded-sm border border-gray-600 netflixMd:w-32 `} onClick={() => isdropped(!drop)}>
                <Image src={"/assets/lang-symbol.svg"} alt="lang symbol" width={15} height={15} />
                <div className=' hidden netflixMd:block'>{lang}</div>
                <ArrowDropDownIcon />
            </button>
            {
                drop && <div className=' rounded-sm bg-white text-black'>
                    <ul>
                        {
                            languages.map((lang) => <li className='px-2 rounded-sm hover:bg-blue-500' key={lang} onClick={() => {
                                setLang(lang);
                                isdropped(!drop);
                            }}>{lang}</li>)
                        }
                    </ul>
                </div>
            }
        </div>
    )
}