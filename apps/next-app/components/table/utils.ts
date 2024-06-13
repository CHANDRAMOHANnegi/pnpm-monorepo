import { faker } from '@faker-js/faker'
import { StockMainData, WeightAge } from './types'

const range = (len: number) => {
    const arr: Array<number> = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const getWeightAge = (): WeightAge => {

    return {
        currentWeightAge: faker.number.int(1000),
        industry: faker.number.int(1000),
        largeCap: faker.number.int(1000),
        portfolio: faker.number.int(1000),
    }
}

const newStockData = (): StockMainData => {
    return {
        stockName: faker.person.firstName(),
        buyPrice: faker.finance.amount({}),
        currentPrice: faker.finance.amount({}),
        quantity: faker.number.int(1000),
        wightAge: getWeightAge()
    }
}

export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): StockMainData[] => {
        const len = lens[depth]!
        return range(len).map((d): StockMainData => {
            return {
                ...newStockData(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}
