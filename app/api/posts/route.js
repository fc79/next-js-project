export async function GET (){
    const res = await fetch ("https://jsonplaceholder.ir/posts" ,{
        next:{revalidate : 60},
        method:"GET",
        headers:{
            "Content-Type" : 'application.json'
        }
    })
    const data = await res.json();
    return Response.json({data});
}