import { Posts } from "@/data/posts"
import type { Post } from "@/data/posts"
import PostPreview from "@/components/post-preview"

export default function Blog(){

    return(
        <main className="min-h-screen flex flex-col items-center justify-center mt-28">
            <section className="w-7/12 p-10 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-4xl text-center font-bold">GreenRewards - <span className=" text-emerald-400">blog</span></h2>
                <p className=" text-md text-center mt-5">Descubre el cambio que nuestra aplicación está generando en la comunidad.</p>
                <section className="border-t-2 border-black mt-10">
                    {
                        Posts.map((post : Post) => (
                            <PostPreview key={post.id} post={post}></PostPreview>
                        ))
                    }
                </section>
            </section>
            
            
        </main>
    )
}