import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import {PostList} from "../store/post-list-store";

const Post = ({ post }) => {
  const {deletePost} = useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-info tag">{`#${tag}`}</span>
        ))}
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <TiDeleteOutline />
        </span>

        <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success ">
          {post.reactions.likes}
        </span>
      </div>
    </div>
  );
};

export default Post;
