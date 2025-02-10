import Link from "next/link"

interface hyperLinkProps {
    title: string,
    href: string
}

export const HyperLink = ({title, href} : hyperLinkProps) => {
    return <Link className=" underline text-sm" href={href} >
    {title}
    </Link>
}