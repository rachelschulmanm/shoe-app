import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Grid";
import CircularIndeterminate from "./CircularIndeterminate";

import { getAllShoes } from "../api/api";

const ShoesPage = () => {
  const [shoes, setShoes] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllShoes();
      console.log(data);
      setShoes(data);
      setLoad(false);
    };
    fetchData();
  }, []);
  return (
    <>
      {load ? (
        <CircularIndeterminate></CircularIndeterminate>
      ) : (
        <Grid container>
          {shoes &&
            shoes.map((shoe, index) => {
              return <MediaCard key={index} data={shoe}></MediaCard>;
            })}
        </Grid>
      )}
    </>
  );
};

export default ShoesPage;
