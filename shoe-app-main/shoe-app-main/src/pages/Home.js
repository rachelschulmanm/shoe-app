import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useParams, Navigate } from "react-router-dom";
const Home = () => {
  const [shoes, setShoes] = useState(false);
  const [add, setAdd] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <>
      {shoes ? <Navigate to="/shoes"></Navigate> : null}
      {add ? <Navigate to="/shoes/add"></Navigate> : null}
      {about ? <Navigate to="/about"></Navigate> : null}

      <Button
        variant="contained"
        onClick={() => {
          setShoes(true);
        }}
      >
        All Shoes
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setAdd(true);
        }}
      >
        Add Shoe
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setAbout(true);
        }}
      >
        About
      </Button>
    </>
  );
};

export default Home;
