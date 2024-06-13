export type WeightAge = {
    largeCap: number,
    portfolio: number
    industry: number
    currentWeightAge: number
}


export type StockMainData = {
    stockName: string
    buyPrice: string
    currentPrice: string
    quantity: number
    wightAge: WeightAge
    subRows?: StockMainData[]
}
