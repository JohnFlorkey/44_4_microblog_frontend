import { useState } from "react";
import { v4 as uuid } from "uuid";

function useBlogPosts(initialValue) {
  const [blogPosts, setBlogPosts] = useState(initialValue);

  const updateBlogPosts = (blogPostID, blogPostData) => {
    const key = blogPostID ? blogPostID : uuid();
    setBlogPosts({
      ...blogPosts,
      [key]: { ...blogPostData, isEditing: false },
    });
  };

  const editBlogPost = (blogPostID) => {
    const newState = { ...blogPosts };
    newState[blogPostID].isEditing = newState[blogPostID].isEditing
      ? false
      : true;
    setBlogPosts({ ...newState });
  };

  const deleteBlogPost = (id) => {
    const newState = { ...blogPosts };
    delete newState[id];
    setBlogPosts({ ...newState });
  };

  return [blogPosts, updateBlogPosts, editBlogPost, deleteBlogPost];
}

export default useBlogPosts;
