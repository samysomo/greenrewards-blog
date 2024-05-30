'use client'
import { useState, useEffect } from "react"
import FullPost from "@/components/full-post"
import { Posts } from "@/data/posts"
import { useParams } from "next/navigation"
import type { User } from "@/data/users"

export default function PostPage(){
    const params = useParams()
    const id = params.id
    const findPost = Posts.find(post => post.id.toString() === id)

    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
        if (typeof window !== "undefined") {
          const storedUser = localStorage.getItem("user");
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }
      }, []);

    if (!findPost){
        return <div>No se encontró el post</div>
    }

    return(
        <main className="flex items-center justify-center min-h-screen mt-28">
            <section className=" w-7/12 bg-gray-100 rounded-lg shadow-lg">
                <FullPost post={findPost} user={user}></FullPost>
            </section>
        </main>
        
    )
}