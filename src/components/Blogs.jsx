import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        columnGap: "50px",
        rowGap: "50px",
      }}
    >
      {blogs &&
        blogs.map((blog) => (
          <Blog
            //isUser={localStorage.getItem("userId"===blog.user._id)}
            id={blog._id}
            key={blog._id}
            isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog?.user?.name}
          />
        ))}
    </div>
  );
};

export default Blogs;
