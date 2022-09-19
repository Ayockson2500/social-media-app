import React from "react";
import { FaVideo } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";
import { GrEmoji } from "react-icons/gr";
import "../css/HomeContent.css"
import MenuElements from '../components/Navbar/MenuElements';


const HomeContent = ({user, setShow}) => {
  
  return (
        <div>
          <MenuElements />
        <div className="user-profile">
        <div className="profile">
          <div className="post-field-container">
            <div className="fields card">
              <div className="py-2">
                <img
                  src={user.picture}
                  alt={user.family_name}
                  className="user-pic"
                />
                <button onClick={() =>setShow(true)} className="post-field">{`What's on your mind, ${user.nickname}?`}</button>
              </div>
              <div className="d-flex align-items-center justify-content-center py-2">
                <div className="me-3 post-file">
                 <a href="http://localhost"><FaVideo className="live-video" /> Live Video</a>
                </div>
                <div className="me-3 post-file">
                  <a href="http://localhost"><ImFolderOpen className="files" /> Photo/Photos</a>
                </div>
                <div className="me-3 post-file">
                  <a href="http://localhost"><GrEmoji className="emoji" /> Feeling/activity</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      

  )
}

export default HomeContent;