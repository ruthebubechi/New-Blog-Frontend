import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const UserBlog = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`https://ruebyscuisine.onrender.com/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        columnGap: "50px",
        rowGap: "50px",
      }}
    >
      {""}
      {user &&
        user.blogs &&
        user.blogs.map((blog) => (
          <Blog
            id={blog._id}
            key={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={user?.name}
          />
        ))}
    </div>
  );
};

export default UserBlog;
