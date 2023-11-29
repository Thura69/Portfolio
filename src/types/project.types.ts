import { ImageProps, StaticImageData } from "next/image";

export interface projectCardProps{
    title: string,
    year: string,
    description: string,
    link:string,
    image: StaticImageData[],
    account:boolean,
    accountDetail?: string,
    url?: string,
    skills?:string
}

