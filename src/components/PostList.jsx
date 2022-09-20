import React, { useState } from "react";
import { BiLike, BiComment, BiDotsHorizontalRounded } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import "../css/PostList.css";

const PostList = ({ inputedValue, fileUpload, user }) => {
  const [like, setLike] = useState(0)

  const handleClickLike = () => {
    setLike(like + 1)
  }
console.log(PostList);
  return (
    <div className="postList-Container">
      <div className="">
        {inputedValue.map((post, idx) => {
          return (
            <div key={idx} className="card mb-3 post-card">
              <div className="d-flex justify-content-between p-2 user-header">
                <div className="d-flex align-items-center">
                  <img
                    src={user.picture}
                    alt={user.family_name}
                    className="user-picture me-2"
                  />
                  <p className="text-center">{user.nickname}</p>
                </div>
                <div>
                  <BiDotsHorizontalRounded />
                </div>
              </div>
              <div>{post.value}</div>
              <div>
                <img src={fileUpload} alt="" className="upload-file" />
              </div>
              <div>
                <div className="d-flex justify-content-between p-3 mb-2 borde-bt">
                  <div>
                    <BiLike /> <FcLike /> {like} likes
                  </div>
                  <div>0 comments</div>
                </div>
                <div className="borde-bt">
                  <button onClick={handleClickLike} className="me-5 ms-2 btn">
                    <BiLike /> Like
                  </button>
                  <button className="btn">
                    <BiComment /> Comment
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
