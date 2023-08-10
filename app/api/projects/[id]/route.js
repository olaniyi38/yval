import { NextResponse } from "next/server";
import projects from '../data.json'

export async function GET(res, req) {
    const id = req.params.id
    const data = projects.filter((project) => project.id === id)

    return NextResponse.json(data[0])
}