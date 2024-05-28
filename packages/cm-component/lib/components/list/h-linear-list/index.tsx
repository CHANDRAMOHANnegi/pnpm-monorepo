import classNames from "classnames"
import { ReactNode } from "react"

export const LinearList = ({ children, style }: { children: ReactNode, style?: string }) => {
    const className = classNames("flex gap-2 my-1", style)
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default LinearList