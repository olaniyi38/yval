import { NextResponse } from "next/server";
import products from '../data.json'

export async function GET(res, req) {
    const name = req.params.name

    const data = products.filter((product) => {
        return product.name.toLowerCase() === name.toLowerCase()
    })
   
    return NextResponse.json(data[0])
}