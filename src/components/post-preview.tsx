import type { Post } from "@/data/posts";
import Link from "next/link";
import Image from "next/image";

type PostPreviewProps = {
    post : Post
}

export default function PostPreview({post} : PostPreviewProps){
    return(
        <Link href={ `/blog/post/${post.id}` }>
            <div className="flex gap-10 my-10 p-3">
                <Image
                    src={post.image}
                    alt="Post image"
                    width={100}
                    height={100}
                    className=" h-52 w-56"
                    
                />
                <div className="flex flex-col gap-3">
                    <p className="text-sm">{post.date}</p>
                    <h3 className="font-bold text-2xl">{post.title}</h3>
                    <p className="text-md">{post.summary}</p>
                    <p className="text-sm font-bold">By: {post.autor}</p>
                </div>
            </div>
        </Link>
        
    )
}