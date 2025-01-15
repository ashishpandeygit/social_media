import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const useridElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();
  const userreactionsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = useridElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const userreactions = userreactionsElement.current.value;

    useridElement.current.value="";
titleElement.current.value="";
 bodyElement.current.value="";
tagsElement.current.value="";
userreactionsElement.current.value="";

    addPost(userid, title, body, tags, userreactions);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userid"
          aria-describedby="emailHelp"
          ref={useridElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Topic
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          ref={titleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          rows="3"
          type="text"
          className="form-control"
          id="body"
          ref={bodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userreactions" className="form-label">
          userReactions
        </label>
        <input
          type="text"
          className="form-control"
          id="userreactions"
          ref={userreactionsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
