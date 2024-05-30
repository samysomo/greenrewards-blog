import type { Post } from "@/data/posts";
import { useState } from "react";
import Image from "next/image";
import type { Comment } from "@/data/posts";
import { Posts } from "@/data/posts";

type FullPostProps = {
    post : Post
}
export default function FullPost({post} : FullPostProps){
    const [newCommentContent, setNewCommentContent] = useState<string>("")

    const addComment = (comment : Comment, postID: number) =>{
        const findPost = Posts.find(post => post.id === postID)
        findPost?.comments.push(comment)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCommentContent(e.target.value)
    }

    const handleAddComment = () => {
        if (newCommentContent.trim() === "") return;
    
        const newComment: Comment = {
          id: post.comments.length + 1,
          autor: "Test User",
          date: "22/05/2024",
          content: newCommentContent,
          autorProfilePicture: "/images/user.png", 
        };
    
        addComment(newComment, post.id);
        setNewCommentContent(''); // Limpiar el campo de entrada después de agregar el comentario
      };

    return(
        <div className="flex flex-col gap-10 my-5 p-10">
            <Image
                src={post.image}
                alt="Post image"
                width={550}
                height={500}
                className=" m-auto my-10"
            />
            <div className="flex flex-col gap-3">
                <p className="text-sm">{post.date}</p>
                <p className="text-sm font-bold">By: {post.autor}</p>
                <h3 className="font-bold text-3xl">{post.title}</h3>
                <p className="text-md">{post.content}</p>
            </div>
            <div className="flex flex-col">
                <h3 className="font-bold p-4 border-b-2 border-black my-5">Comentarios</h3>
                <div className="flex gap-5 mb-10">
                    <input 
                        type="text" 
                        placeholder="Deja un comentario..."
                        className="w-full rounded-md h-14 p-5 mb-5"
                        value={newCommentContent}
                        onChange={handleInputChange}
                    />
                    <button className="p-4 bg-emerald-400 h-14 rounded-md" onClick={handleAddComment}>
                        <p className="font-bold">Comentar</p>
                    </button>
                </div>
                <div className="flex flex-col gap-6">
                    {
                        post.comments.map((comment) => (
                            <div key={comment.id} className=" flex items-center">
                                <div className="p-5">
                                    <Image 
                                        src={comment.autorProfilePicture}
                                        alt="Profile Picture"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                
                                <div className="bg-white w-full h-15 p-5 rounded-md flex flex-col justify-center gap-2">
                                    <p className="text-md font-bold mb-2">{comment.autor}</p>
                                    <p className="text-sm ">{comment.date}</p>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}