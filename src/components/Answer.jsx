import { useEffect, useState } from "react";
import { isHeading, replaceHeadingStars } from "../helper";

const Answer=({ans, totalResultLength, type, index})=>{
    console.log(index);
    const [heading, setHeading]=useState(false);
    const [answer, setAnswer]=useState(ans);

    useEffect(()=>{
        if(isHeading(ans))
        {
            setHeading(true);
            setAnswer(replaceHeadingStars(ans))
        }
    }, [])

    return (
        <>
        {
            index==0 && totalResultLength>1?<span className="pt-2 text-lg block text-white">{answer}</span>
            :heading?<span className="pt-2 text-xl block text-white">{answer}</span>
            :<span className={type=='q'?'pl-1':'pl-5'}>{answer}</span>
        }
        </>
    )
}

export default Answer;