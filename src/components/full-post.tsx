import type { Post } from "@/data/posts";
import Image from "next/image";

type FullPostProps = {
    post : Post
}
export default function FullPost({post} : FullPostProps){
    return(
        <div className="flex gap-10 my-10 p-3">
            <Image
                src={post.image}
                alt="Post image"
                width={100}
                height={100}
                className=" h-52 w-56"
                
        />
        <h2>Desde FullPost</h2>
            <div className="flex flex-col gap-3">
                <p className="text-sm">{post.date}</p>
                <h3 className="font-bold text-2xl">{post.title}</h3>
                <p className="text-md">{post.summary}</p>
            </div>
        </div>
    )
}