import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import BlogDetail from "./components/Blogs";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {!isLoggedIn ? (
            <Route path="/auth" element={<Auth />} />
          ) : (
            <>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlog />} />
              <Route path="/myBlogs/asdfasdfafd" element={<EditBlog />} />
              <Route path="/myBlogs/:id" element={<h1>Let Us</h1>} />{" "}
            </>
          )}
        </Routes>
        <header>
          <Header />
        </header>
      </main>
    </React.Fragment>
  );
}

export default App;
