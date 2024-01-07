import Frame from "../components/frame";
import BearImg from "../../../public/assests/bear.jpg";
export default function PhotoPage(){
    return(
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Frame photo={BearImg} />
            </div>

        </div>
    )
}