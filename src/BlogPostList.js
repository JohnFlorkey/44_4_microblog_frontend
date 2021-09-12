import React from "react";
import { Row } from "react-bootstrap";
import BlogPostCard from "./BlogPostCard";

function BlogPostList({ blogPosts }) {
  const blogPostData = [];
  for (const [key, value] of Object.entries(blogPosts)) {
    blogPostData.push(
      <BlogPostCard
        key={key}
        description={value.description}
        id={key}
        title={value.title}
      />
    );
  }

  return (
    <div>
      <Row>{blogPostData}</Row>
    </div>
  );
}
export default BlogPostList;
