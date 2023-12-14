import { ImageProps, StaticImageData } from "next/image";

export interface projectCardProps{
    id: number,
    project_name: string,
    description: string,
    date:string,
    image: StaticImageData,
    video:string,
    github_link?: string,
    demo_link?: string,
    category?: any[],
}