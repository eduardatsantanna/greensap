import React from "react"
import { BubbleMap } from "@/components/map"

export const ProjectMap = ({projects}) => {
    return (
        <div className="map">
            <BubbleMap projects = {projects}/>
        </div>
    )
}
