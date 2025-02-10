interface NavbarProps {
    title: string;
}

export const Button = ({ title } : NavbarProps) => {
    return (
        <button className=" font-medium px-3 py-1 rounded-sm bg-netflixButton text-white hover:bg-netflixButtonHover">
            { title }
        </button>
    )
};