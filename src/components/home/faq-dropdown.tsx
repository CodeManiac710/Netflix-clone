"use client"

import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

interface faqDropdownProps {
    question: string,
    children: React.ReactNode
}

export const FaqDropdown = ({ question, children }: faqDropdownProps) => {

    const [open, setOpen] = useState(false);

    return (
        <div className=" bg-[#2C2C2D] font-medium ">
            <button onClick={() => {
                setOpen(!open);
            }} className="w-full hover:bg-[#484444] p-6 flex justify-between">
                <p>{question}</p>
                {
                    !open && <AddIcon />
                }
                {
                    open && <CloseIcon />
                }
            </button>
            {
                open && <div className="p-6">
                    {children}
                </div>
            }

        </div>
    )
}