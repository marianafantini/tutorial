import {NextRequest} from "next/server";

export async function GET(
    request: NextRequest, {params}:
    { params: Promise<{ name: string }> }) {

    const {name} = await params;
    return new Response(`Hello, ${name}!`);
}