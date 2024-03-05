export async function GET (request, {params}) {
    const user = params.user;
    console.log("user", user);
    return new Response (`user is ${user}`)

}