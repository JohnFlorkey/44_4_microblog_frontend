import { v4 as uuid } from "uuid";

const INITIAL_BLOG_POSTS_STATE = {
  [uuid()]: {
    body: "sample blog post content",
    description: "this is just a sample",
    title: "Some Content",
    isEditing: false,
    comments: [{ id: uuid(), comment: "no comment" }],
  },
};
function blogPostReducer(state = INITIAL_BLOG_POSTS_STATE, action) {
  let blogPostID = "";
  switch (action.type) {
    case "updateBlogPosts":
      blogPostID = action.payload.blogPostID;
      const { blogPostData } = action.payload;
      const key = blogPostID ? blogPostID : uuid();
      return { ...state, [key]: { ...blogPostData } };
    case "deleteBlogPost":
      blogPostID = action.payload.blogPostID;
      const newState = { ...state };
      delete newState[blogPostID];
      return { ...newState };
    case "addComment":
      blogPostID = action.payload.blogPostID;
      const { comment } = action.payload;
      return {
        ...state,
        [blogPostID]: {
          ...state[blogPostID],
          comments: [...state[blogPostID].comments, { id: uuid(), comment }],
        },
      };
    case "deleteComment":
      blogPostID = action.payload.blogPostID;
      const { commentID } = action.payload;
      return {
        ...state,
        [blogPostID]: {
          ...state[blogPostID],
          comments: state[blogPostID].comments.filter(
            (c) => c.id !== commentID
          ),
        },
      };
    default:
      return state;
  }
}
export default blogPostReducer;
