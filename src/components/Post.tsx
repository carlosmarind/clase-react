
interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
    imagen?: string;
}

export const Post = (props: PostProps) => {

    return (
        <div className="post-container">
            <h2>{props.title}</h2>
            <p>{props.userId}</p>
            <p>{props.body}</p>
            {props.imagen && <img src={props.imagen} alt="imagen" height="100px"/>}
        </div>
    )

}