export function GET(request){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    return new Response(`query is: ${query}`,{
        status: 200
    })
}