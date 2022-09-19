import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import HomeContent from "./HomeContents";
import Post from "./Post";
import PostList from "../components/PostList";

const Home = () => {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [inputedValue, setInputedValue] = useState([]);
  const [fileUpload, setFileUpload] = useState(null);

  return (
    isAuthenticated && (
      <div>
        <HomeContent user={user} setShow={setShow} />
        <Post
          show={show}
          user={user}
          setShow={setShow}
          inputedValue={inputedValue}
          setInputedValue={setInputedValue}
          fileUpload={fileUpload}
          setFileUpload={setFileUpload}
        />
        <PostList
          inputedValue={inputedValue}
          fileUpload={fileUpload}
        />
      </div>
    )
  );
};

export default Home;
