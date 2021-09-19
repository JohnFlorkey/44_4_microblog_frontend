import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import BlogPostCard from "./BlogPostCard";
import { getTitlesFromAPI } from "./actions";

function BlogPostList() {
  const dispatch = useDispatch();
  const { titles } = useSelector((store) => store);

  useEffect(() => {
    if (titles.length === 0) dispatch(getTitlesFromAPI());
  }, [dispatch, titles]);

  return (
    <div>
      <Row>
        {titles.map((t) => (
          <BlogPostCard
            key={t.id}
            description={t.description}
            id={t.id}
            title={t.title}
          />
        ))}
      </Row>
    </div>
  );
}
export default BlogPostList;
