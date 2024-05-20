import type { Post } from "@/data/posts"
import { Posts } from "@/data/posts"
import FullPost from "@/components/full-post"
 type PostPageProps = {
    id: number
 }

export default function PostPage({id} :PostPageProps){
    console.log(id)

    const findPost = Posts.find(post => post.id === id)

    if (!findPost) {
        return <div>Post no encontrado</div>;
    }

    return(
        <FullPost
            post={findPost}
        />
    )
}