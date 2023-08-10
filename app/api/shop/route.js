import { NextResponse } from 'next/server'

import products from './data.json'
 
export async function GET(req) {
    return NextResponse.json(products)
}