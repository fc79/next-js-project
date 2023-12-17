import Link from "next/link";

export default function Home(){
    return(
        <main>
            <div className="container">
                <h1>آزمونک</h1>
                <Link href="/quiz">
                    <button>برو به آزمون</button>
                </Link>
            </div>
        </main>
    )
}