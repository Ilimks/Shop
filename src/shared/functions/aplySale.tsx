



export default function aplySale(oldPrice: number, sale: number = 0): number {

    return oldPrice - oldPrice * (sale / 100)
}