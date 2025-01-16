import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./welcome";
const PostList = () => {
  const { postList,addPosts } = useContext(PostListData);
  const handlePostsList = () => {
    // console.log("fetch clicked")
    // Could be GET or POST/PUT/PATCH/DELETE
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data)=>{
        addPosts(data.posts)
      });

    /* { status: 'ok', method: 'GET' } */
  };
  return (
    <>
      {postList.length === 0 && (
        <Welcome onGetPostsClick={handlePostsList}></Welcome>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
