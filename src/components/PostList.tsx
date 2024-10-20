import { useEffect, useState } from "react";
import { Post } from "./Post";
import { IPost } from "../page/PostPage";
import { configuracion } from "../config/appConfiguration";


export const PostList = () => {

    const [posts, setPosts] = useState<IPost[]>([]);


    useEffect(() => {
        fetch(configuracion.urlJsonServerPost)
            .then(response => response.json())
            .then((data: IPost[]) => {
                setPosts(data);
            });
    }, []);

    return (
        <>
            <h1>Post List</h1>
            <ul>
                {
                    posts.map(post => (
                        <Post key={post.id} id={post.id!} userId={post.userId} title={post.title} body={post.content} imagen={post.imagen} />
                    ))}
            </ul>
        </>
    )


}