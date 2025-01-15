import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/createPost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [count, setCount] = useState(0)

  const [selectedTab,setSelectedTab] =useState("Home")
  return (
    <>
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {
            selectedTab==="Home"? <PostList></PostList>:<CreatePost></CreatePost>
          }
          
         
          <Footer></Footer>
        </div>
      </div>
      </PostListProvider>
    </>
  );
}

export default App;
