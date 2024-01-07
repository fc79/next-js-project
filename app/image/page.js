import Image from "next/image";
import Link from "next/link";
import BearImage from ".././../public/assests/bear.jpg";
export default async function ImagePage(){
    return(
        <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded">
            <div>
                <div className="text-gray-300 text-center mb-5">
                    <Link href={"/image/photo"}>
                        <Image alt="" src={BearImage}
                        height={400} width={400} className="mx-auto rounded object-cover aspect-square"/>
                    </Link>

                </div>
            </div>

        </main>
    )
}