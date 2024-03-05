import { cookies } from "next/headers";

export async function GET(){
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    return new Response(`hello !! : Token :${token && token.value}`,{
        status: 200,
        headers: {"set Headers": `token=${token}`}
    })
}