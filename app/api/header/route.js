import {headers} from "next/headers";
export async function GET(request){
    const useHeader = headers(request);
    const header = useHeader.get("Content-Type");
    return new Response(`Content-Type : ${header}`,
    {status : 200,
        headers:{
            "Content-Type":header,
        }})

}