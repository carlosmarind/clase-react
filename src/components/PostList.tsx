import { useEffect, useState } from "react";
import { Post } from "./Post";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const PostList = () => {

    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data: Post[]) => {
                setPosts(data);
            });
    }, []);

    return (
        <>
            <h1>Post List</h1>
            <ul>
                {
                    posts.map(post => (
                        <Post key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body} />
                    ))}
            </ul>
        </>
    )


}