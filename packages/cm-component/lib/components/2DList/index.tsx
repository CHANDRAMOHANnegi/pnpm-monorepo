import Card from "../card"

export type ListDataProp = Record<string, string>

export const D2List = ({ data = [] }: { data: ListDataProp[] }) => {
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-4 gap-y-4 bg-slate-500">
            {data.map((d) => {
                return <Card key={d.key} data={d} />
            })}
        </div>
    )
}

export default D2List