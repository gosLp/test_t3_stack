import { api } from "../../utils/api";
import { useRouter } from "next/router";
import { string } from "zod";
import { NextPage } from "next";
import { ReactNode } from "react";


const VideoPage: NextPage =() =>{
    const {query} = useRouter();
    
    const input = query.id?.toString()
    const videoQuery = api.example.hellotest.useQuery({mehtod: input?input: "the id didnt work"});
    const videoListQuery = api.video.list.useQuery();
    return(
        <>
        <div>
            <h1>
                {videoQuery.data?.prat_test}
            </h1>
            <div>
               
                {
                    videoListQuery.data?.list_of_videos.map((x) =>{
                        return <h1>{x}</h1>
                    })
                }
            </div>
        </div>
        </>
    );

}

export default VideoPage;