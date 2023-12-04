import { StaticImageData } from "next/image";
import { URL } from "url";

export interface projectDetail{
  id: number;
  project_name: string;
  status: boolean;
  year: number;
  live_at: string;
  role: string;
  about: string;
  tools: string;
  pictures: StaticImageData[]; // Assuming pictures are URLs or file paths
  next_project_title: string;
  next_project_description: string;
  next_project_pictures: StaticImageData[];
};