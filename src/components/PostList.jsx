import React from "react";
import { BiLike,  BiComment } from "react-icons/bi"
import { FcLike } from "react-icons/fc"
import "../css/PostList.css"

const PostList = ({ inputedValue, fileUpload }) => {
  // const [listOfPost, setListOfPost] = useState([...inputedValue, inputedValue])
  console.log(inputedValue);

  return (
    <div className="postList-Container">
      <div className="">
        {inputedValue.map((post, idx) => {
          return (
            <div key={idx} className="card mb-3 post-card">
              <div>{post.value}</div>
              <div>
                <img src={fileUpload} alt="" />
              </div>
              <div>
                <div className="d-flex justify-content-between p-3 mb-2 borde-bt">
                  <div><BiLike /> <FcLike /> 0 likes</div>
                  <div>0 comments</div>
                </div>
                <div className="borde-bt">
                  <button className="me-5 ms-2 btn">
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
