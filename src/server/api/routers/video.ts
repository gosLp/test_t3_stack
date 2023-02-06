import {z} from "zod";
import { publicProcedure, protectedProcedure, createTRPCRouter } from "../trpc";


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
    
    
});