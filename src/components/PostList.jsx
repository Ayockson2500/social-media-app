import React, { useState } from "react";
import { BiLike, BiComment, BiDotsHorizontalRounded } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FaTrashAlt } from "react-icons/fa";
import "../css/PostList.css";
import Modal from "./Modal";
import { Link } from "react-router-dom"

const PostList = ({ inputedValue, user, setInputedValue }) => {
  const [like, setLike] = useState(0);
  const [show, setShow] = useState(false);

  const handleClickLike = () => {
    setLike(like + 1);
  };

  const showModal = () => {
    setShow(!show);
  };

  const handleDeletePost = (post) => {
    const deletedPost = inputedValue.filter(
      (removePost) => removePost.id !== post.id
    );
    setInputedValue(deletedPost);
  };

  const handleEditPost = (post) => {
    const editedPost = inputedValue.map((newEditedPost) => {
      if (newEditedPost.id === post.id) {
        return { ...newEditedPost, isEditable: true };
      }
      return {...newEditedPost, isEditable: false}
    });
    console.log(editedPost);
  };

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
                  <BiDotsHorizontalRounded
                    className="edit-button"
                    onClick={() => handleEditPost(post)}
                  />
                  <Modal show={show} />
                </div>
              </div>
              <div>{post.value}</div>
              <div>
                <img src={post.image} alt="" className="upload-file" />
              </div>
              <div>
                <div className="d-flex justify-content-between p-3 mb-2 borde-bt">
                  <div>
                    <BiLike /> <FcLike /> {like} likes
                  </div>
                  <div>
                    <Link to="/comments">0 comments</Link>
                    </div>
                </div>
                <div className="borde-bt">
                  <button onClick={handleClickLike} className="me-5 ms-2 btn">
                    <BiLike /> Like
                  </button>
                  <button className="btn me-5">
                    <BiComment /> Comment
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleDeletePost(post)}
                  >
                    <FaTrashAlt /> Delete Post
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
