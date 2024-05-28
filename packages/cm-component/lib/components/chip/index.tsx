import classNames from "classnames"

type ChipProps = {
    type: "filled" | "outlined",
    text: string
}

export const Chip = ({ type, text = "" }: ChipProps) => {
    const styles = classNames("relative grid select-none items-center whitespace-nowrap rounded-lg py-1.5 px-3 font-sans text-xs font-bold uppercase", {
        "text-white bg-gray-900": type === "filled",
        "text-gray-700 border border-gray-900": type === "outlined"
    })
    return (
        <div className="flex gap-2">
            <div className={styles}>
                <span className="">{text}</span>
            </div>
        </div>
    )
}

export default Chip