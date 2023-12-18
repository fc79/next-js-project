import Link from "next/link";

export default function Home(){
    return(
        <main>
            <div className="container">
                <h1 className="padd-b-10">آزمونک</h1>
                <Link href="/quiz">
                    <button className="btn">برو به آزمون</button>
                </Link>
            </div>
        </main>
    )
}