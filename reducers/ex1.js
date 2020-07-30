const prices = [30, 24, 821, 12, 51]
const getTotalPrices = (acc, price) => acc + price

const totalPrices = prices.reduce(getTotalPrices, 0)
console.log(totalPrices)

const people = [
    { id: 1, name: "Lucas", age: 13 },
    { id: 2, name: "Karen", age: 15 },
    { id: 3, name: "Alexandre", age: 20 },
    { id: 4, name: "Kevin", age: 15 },
    { id: 5, name: "Melissa", age: 13, },
    { id: 6, name: "Gabrielly", age: 20 },
    { id: 7, name: "Carlos Alberto", age: 13 }
]

const getAverageAge = (acc, { age }) => {
    acc[age] = acc[age] + 1 || 1
    return acc
}

const averageAge = people.reduce(getAverageAge, {})
console.log(averageAge)