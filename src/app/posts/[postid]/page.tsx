import { useRouter } from "next/navigation";
const Post = ({ params }: { params: { postid: string } }) => {
    return <div>Post id {params.postid}</div>;
};

export default Post;
