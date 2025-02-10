interface cardProps {
    title: string,
    description: string,
    children: React.ReactNode
}
export const Card = ({ title, description, children }: cardProps) => {
    return (
        <div className=" rounded-2xl bg-gradient-to-br from-[#1A2246] to-[#200F18]">
            <div className=" space-y-2 p-5">
                <h3 className=" text-xl font-medium">{title}</h3>
                <p className=" text-sm text-[#FFFFFFb3]">{description}</p>
                <div className="flex justify-end">
                    {children}
                </div>
            </div>

        </div>
    )
}