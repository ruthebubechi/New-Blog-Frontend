import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState(false);

  return (
    <AppBar position="sticky" sx={{ background: "black" }}>
      <Toolbar>
        <Box display="block">
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="#" label="About" />
            <Tab LinkComponent={Link} to="#" label="Recipes" />
            <Tab LinkComponent={Link} to="#" label="Cookbook" />
            <Tab LinkComponent={Link} to="#" label="Shop" />
            <Tab LinkComponent={Link} to="#" label="SHoppioe" />
          </Tabs>
        </Box>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
              <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 2, borderRadius: 10 }}
                color="warning"
              >
                LOGIN
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 2, borderRadius: 10 }}
                color="warning"
              >
                SIGNUP
              </Button>{" "}
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 2, borderRadius: 10 }}
              color="warning"
            >
              LOGOUT
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
