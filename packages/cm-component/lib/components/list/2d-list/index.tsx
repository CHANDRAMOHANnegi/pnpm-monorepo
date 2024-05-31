import Card from "../../card"

export type ListDataProp = Record<string, any>

export const D2List = ({ data = [], onCardClick }: { data: ListDataProp[], onCardClick: (s: object) => void }) => {
    return (
        <div className="grid lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] gap-x-4 gap-y-4 bg-slate-500">
            {data.map((d) => {
                return <Card onClick={onCardClick} key={d.key} data={d} />
            })}
        </div>
    )
}

export default D2List