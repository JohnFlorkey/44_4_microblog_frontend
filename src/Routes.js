import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BlogPostForm from "./BlogPostForm";
import SiteNav from "./SiteNav";
import BlogPostList from "./BlogPostList";
import BlogPostDetail from "./BlogPostDetail";
import blogPostReducer from "./blogPostReducer";

function Routes() {
  const store = createStore(
    blogPostReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <SiteNav />
          <Switch>
            <Route exact path="/new">
              <BlogPostForm />
            </Route>
            <Route exact path="/:postid">
              <BlogPostDetail />
            </Route>
            <Route path="/">
              <BlogPostList />
            </Route>
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
