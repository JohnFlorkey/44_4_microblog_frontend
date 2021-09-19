import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import BlogPostForm from "./BlogPostForm";
import SiteNav from "./SiteNav";
import BlogPostList from "./BlogPostList";
import BlogPostDetail from "./BlogPostDetail";
import rootReducer from "../reducers/rootReducer";

function Routes() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
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
