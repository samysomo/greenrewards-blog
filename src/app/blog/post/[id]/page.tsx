'use client'
import FullPost from "@/components/full-post"
import { Posts } from "@/data/posts"
import { useParams } from "next/navigation"

export default function PostPage(){
    const params = useParams()
    const id = params.id
    const findPost = Posts.find(post => post.id.toString() === id)

    if (!findPost){
        return <div>No se encontró el post</div>
    }

    return(
        <main className="flex items-center justify-center min-h-screen mt-28">
            <section className=" w-7/12 bg-gray-100 rounded-lg shadow-lg">
                <FullPost post={findPost}></FullPost>
            </section>
        </main>
        
    )
}