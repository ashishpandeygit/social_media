const Welcome = ({onGetPostsClick}) => {
  return (
    <center  className="welcome">
      <h1>There are no posts to show.</h1>
      <button className="btn btn-success " type="button" onClick={onGetPostsClick}>Fetch</button>
    </center>
  ); 
};

export default Welcome;
