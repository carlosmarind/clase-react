
interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const Post = (props: PostProps) => {

    return (
        <div className="post-container">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )

}