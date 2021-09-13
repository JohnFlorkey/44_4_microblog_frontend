import {
  ADD_COMMENT,
  DELETE_BLOG_POST,
  DELETE_COMMENT,
  UPDATE_BLOG_POSTS,
} from "./actionTypes";

export function actionAddComment(blogPostID, comment) {
  return { type: ADD_COMMENT, payload: { blogPostID, comment } };
}

export function actionDeleteComment(blogPostID, commentID) {
  return { type: DELETE_COMMENT, payload: { blogPostID, commentID } };
}

export function actionDeleteBlogPost(blogPostID) {
  return { type: DELETE_BLOG_POST, payload: { blogPostID } };
}

export function actionUpdateBlogPosts(blogPostID, blogPostData) {
  return { type: UPDATE_BLOG_POSTS, payload: { blogPostID, blogPostData } };
}
