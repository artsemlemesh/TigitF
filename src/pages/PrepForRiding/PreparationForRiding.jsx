import { useSelector } from "react-redux";
import PostList from "./components/postList";
import Sidebar from "./components/sideBar";
import { useState } from "react";
import VideoCarousel from "./components/videoCarousel";
import PostCarousel from "./components/postCarousel";
import LeaveComment from "./components/leaveComment";

const Blog = () => {
  const posts = useSelector((state) => state.posts.posts);
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-8">
          <PostList
            posts={posts}
            activePost={activePost}
            setActivePost={setActivePost}
          />

          <div >
            <VideoCarousel />
          </div>
          <div>
            <PostCarousel posts={posts} />
          </div>
          <div>
            <LeaveComment/>
          </div>

        </div>

        <div className="md:w-1/3">
          <Sidebar activePost={activePost} posts={posts} />
        </div>
      </div>

      
    </div>
  );
};

export default Blog;
