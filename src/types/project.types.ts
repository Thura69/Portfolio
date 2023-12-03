import { ImageProps, StaticImageData } from "next/image";
import { Url } from "url";

export interface projectCardProps{
    title: string,
    year: string,
    description: string,
    link:string,
    image: StaticImageData[],
    account:boolean,
    accountDetail?: string,
    url?: string,
    skills?: string,
    toPage?:any
}

