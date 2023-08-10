const { NextResponse } = require("next/server");
import projects from "./data.json"

export async function GET(req, res) {
    return NextResponse.json(projects)
}