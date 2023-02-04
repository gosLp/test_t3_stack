import { api } from "../../utils/api";
import { useRouter } from "next/router";
import { string } from "zod";
import { NextPage } from "next";


const VideoPage: NextPage =() =>{
    const {query} = useRouter();
    const input = query.id?.toString()
    const videoQuery = api.example.hellotest.useQuery({mehtod: input?input: "the id didnt work"});

    return(
        <>
        <div>
            <h1>
                {videoQuery.data?.prat_test}
            </h1>
        </div>
        </>
    );

}

export default VideoPage;