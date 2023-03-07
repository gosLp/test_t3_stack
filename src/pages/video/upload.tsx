import { api } from "../../utils/api";
import { useRouter } from "next/router";
import { string } from "zod";
import { NextPage } from "next";
import { ReactNode, useState } from "react";
import Head from "next/head";

interface FileObject {
    name: string;
    size: number;
}

const Upload: NextPage = () =>{
    const [file, setfile] = useState<FileObject| null>(null);

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) =>{
        setfile(e.target.files?.[0]!);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        //handle the upload of file here
        console.log(file);
    }

    return(
        <>
        <Head>
            <title>Courses</title>
            <meta name="description" content="The course list" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label htmlFor="video" className="text-lg font-bold text-gray-700">
                 Upload your video
            </label>
        <input
            id="video"
            type="file"
            accept="video/*"
            onChange={handleChange}
            className="mt-4 p-2 border border-gray-300 rounded-md"
        />
        {file && (
            <p className="mt-2 text-sm text-green-500">
                {file.name} selected ({Math.round(file.size / 1024)} KB)
            </p>
        )}
      <button
        type="submit"
        disabled={!file}
        className={`mt-6 py-2 px-4 bg-blue-600 text-white rounded-md ${
          !file && "opacity-50 cursor-not-allowed"
        }`}
      >
        Upload
      </button>
    </form>
    </>
    );
}

export default Upload;