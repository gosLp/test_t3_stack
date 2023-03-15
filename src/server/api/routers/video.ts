import {z} from "zod";
import { publicProcedure, protectedProcedure, createTRPCRouter } from "../trpc";
import fs from 'fs';
import path from "path";
import axios from "axios";
export interface FileObject {
    name: string;
    size: number;
}

export const videoRouter = createTRPCRouter({
    list: publicProcedure
        .query(()=>{
            return {
                list_of_videos: [
                        "Movie 1",
                        "Movie 2",
                        "Scott pilgrim vs the worls",
                        "the legend of of Korra"
                                
                    ],
            }
        }),

     upload:  publicProcedure
            .input(z.object({
                file: z.any(),
            }))
            // .output(z.object({
            //     url: z.string()
            // }))
            .mutation(async ({input}) =>{
                const {file} = input;
                
                const formData = new FormData();
                formData.append('file', file);

                const response = await axios.post("/api/upload",formData,{
                    headers:{
                        "Content-Type": "multipart/form-data",
                    },
                });

                const {url} = response.data;

                return {url};

                const dirname = path.join(process.cwd(),"videos");
                console.log(dirname + " " + process.cwd());
                let writeStream = fs.createWriteStream("whisPT\prominence\public\videos")
            })
            
    
    
});