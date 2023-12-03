import { StaticImageData } from "next/image";

export interface workCardProps{
    title: string,
    description: string,
    tools:string,
    img: StaticImageData,
    link: string,
    no: string,
    real:boolean
    
}