import React, { useState } from "react";
import "../css/Post.css";
import { MdClose } from "react-icons/md";

const Post = ({
  user,
  show,
  onClose,
  setInputedValue,
  setFileUpload
}) => {
  const [inputValue, setInputValue] = useState("");
  const [imageUpload, setImageUpload] = useState(null);

  const handleFileUpload = (e) => {
    let file = URL.createObjectURL(e.target.files[0]);
    setImageUpload(file);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    setInputedValue((inputedValue) => [
      ...inputedValue,
      { value: inputValue, id: Math.floor(Math.random() * 10000 )},
    ]);
    setInputValue('')
    setFileUpload(imageUpload);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  if (!show) return null;
  return (
    <div className="post-modal-overlay">
      <form
        className="form shadow bg-body rounded post-modal"
        onSubmit={handleSubmitPost}
      >
        <h4 className="text-center mb-3">Create a post</h4>
        <MdClose className="close-icon" onClick={onClose} />
        <div>
          <textarea
            id="txtid"
            name="txtname"
            rows="4"
            cols="50"
            maxLength="200"
            placeholder={`What's in your mind, ${user.nickname}`}
            className="text-field"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </div>
        <div>
          <input
            onChange={(e) => handleFileUpload(e)}
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            multiple
          />
        </div>
        <button type="submit" className="post-btn mt-2 py-2">
          Post
        </button>
      </form>
    </div>
  );
};

export default Post;
// export default reduxForm({
//   form: 'createpost'
// })(Post);
