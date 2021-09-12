import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import BlogPostForm from "./BlogPostForm";
import SiteNav from "./SiteNav";
import BlogPostList from "./BlogPostList";
import BlogPostDetail from "./BlogPostDetail";
import useBlogPosts from "./useBlogPosts";

function Routes() {
  const INITIAL_BLOG_POSTS_STATE = {
    [uuid()]: {
      body: "sample blog post content",
      description: "this is just a sample",
      title: "Some Content",
      isEditing: false,
    },
  };
  const [blogPosts, updateBlogPosts, editBlogPost, deleteBlogPost] =
    useBlogPosts(INITIAL_BLOG_POSTS_STATE);

  const stateFunctions = {
    updateBlogPosts,
    deleteBlogPost,
    editBlogPost,
  };

  return (
    <BrowserRouter>
      <Container>
        <SiteNav />
        <Switch>
          <Route exact path="/new">
            <BlogPostForm stateFunctions={stateFunctions} />
          </Route>
          <Route exact path="/:postid">
            <BlogPostDetail
              blogPosts={blogPosts}
              stateFunctions={stateFunctions}
            />
          </Route>
          <Route path="/">
            <BlogPostList blogPosts={blogPosts} />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Routes;
