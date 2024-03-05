import { redirect } from "next/navigation";
const name = "fatemeh";
export async function GET(){
    redirect(`http://localhost:3000/api/username/${name}`)
}