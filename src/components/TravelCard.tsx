'use client'

import { useState } from "react"
import { VlogPlayer } from "./VlogPlayer"
import { Rating } from "@mui/material"
import { useWindowListener } from "@/hooks/useWindowListener"

export function TravelCard() {

    const [playing , setPlaying] = useState(true)
    const [rating , setRating] = useState(0)
    const [pointerPosition , setPointerPosition] = useState({ x:0 , y:0 })

    useWindowListener('pointermove' , (e)=>{
        setPointerPosition({ x:(e as PointerEvent).clientX , y:(e as PointerEvent).clientY })
    })

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-grey-200
        flex flex-row">
            <VlogPlayer isPlaying={playing} vdoSrc="/video/ThailandNatural.mp4" />
            <div className="m-5">
                Thailand Natural ({ pointerPosition.x } , { pointerPosition.y })
                <button 
                    className="block rounded-md bg-sky-600 hover:bg-indigo-600 
                    px-3 py-2 shadow-sm text-white"
                    onClick={()=> setPlaying(!playing)}
                >
                    { playing ? "Pause" : "Play" }
                </button>

                <Rating 
                    className="w-full h-[10%]"
                    value={(rating == undefined) ? 0 : rating}
                    onChange={(event, newValue) => {
                        if(newValue != null) setRating(newValue)
                    }}
                />
            </div>
            
        </div>
    )
}