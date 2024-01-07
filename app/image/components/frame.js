import Image from "next/image";
export default function Frame({photo}){
    return(
        <>
          <Image
          alt=""
          src={photo}
          height={400}
          width={400}
          className="w-full object-cover aspect-squere col-span-2"
          /> 
        </>
    )
}