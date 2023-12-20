import Skeleton from "react-loading-skeleton";

export default function Loading ({count}) {
    return(
        <Skeleton 
        count={count}
        direction="rtl"
        duration={2}
        height={40}
        baseColor="rgb(69, 69, 69)"
        highlightColor="rgb(154, 153, 153)"
         
        />
    )
}