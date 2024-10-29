import { Post } from "./Post";
import { IPost } from "../page/PostPage";
import { configuracion } from "../config/appConfiguration";
import { useFetch } from "../hooks/useFetch";


export const PostList = () => {

    const { data: posts, loading, error } = useFetch<IPost[]>(configuracion.urlJsonServerPost);

    if (loading) return <p>Cargando datos...</p>
    if (error) return <p>Error en la consulta de datos {error}</p>

    return (
        <>
            <h1>Post List</h1>
            <ul>
                {
                    posts && posts.map(post => (
                        <Post key={post.id} id={post.id!} userId={post.userId} title={post.title} body={post.content} imagen={post.imagen} />
                    ))}
            </ul>
        </>
    )
}