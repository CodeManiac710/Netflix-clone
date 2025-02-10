interface NavbarProps {
    children: React.ReactNode;
}

export const Button = ({ children } : NavbarProps) => {
    return (
        <div className=" w-full h-full flex items-center justify-evenly px-3 py-1 rounded-sm bg-netflixButton text-white hover:bg-netflixButtonHover">
            { children }
        </div>
    )
};