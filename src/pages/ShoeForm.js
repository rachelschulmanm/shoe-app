import React, { useEffect, useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useParams, Navigate } from "react-router-dom";
import {
  getShoeById,
  updateShoeById,
  deleteShoeById,
  addShoe,
} from "../api/api";
import { checkIfDataFull, checkIfNumber } from "../helpers/validation";
import CircularIndeterminate from "./CircularIndeterminate";
const ShoeForm = () => {
  const [shoe, setShoe] = useState({});
  const [disable, setdisable] = useState(false);
  const [load, setLoad] = useState(false);
  let error = {
    name: false,
    price: false,
    image: false,
  };
  const [isCaneled, setIsCanceled] = useState(false);
  const { shoeId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (shoeId) {
        const resShoe = await getShoeById(shoeId);
        setShoe(resShoe);
      }
    };
    fetchData();
  }, [shoeId]);

  const validation = () => {
    error = {
      name: false,
      price: false,
      image: false,
    };
    if (!checkIfDataFull(shoe.name)) {
      console.log(1, checkIfDataFull(shoe.name));
      error.name = true;
    }
    if (!checkIfDataFull(shoe.price) || !checkIfNumber(shoe.price)) {
      console.log(2, checkIfNumber(shoe.price));
      error.price = true;
    }
    if (!checkIfDataFull(shoe.image)) {
      console.log(3);

      error.image = true;
    }
  };

  const updateShoe = async () => {
    const body = {
      name: shoe.name,
      price: shoe.price,
      image: shoe.image,
    };
    validation();
    console.log("error", error);
    if (!error.name && !error.price && !error.image) {
      setLoad(true);
      await updateShoeById(shoeId, body);
      cancel();
    } else {
      alert("complete correct fields");
    }
    setLoad(false);
  };
  const cancel = () => {
    setIsCanceled(true);
  };
  const deleteShoe = async () => {
    setLoad(true);
    await deleteShoeById(shoeId);
    setLoad(false);
  };
  const add = async () => {
    setLoad(true);
    validation();
    console.log("error", error);
    if (error.name || error.price || error.image) {
      console.log(error);
      alert("complete correct fields");
    } else {
      setdisable(true);
      await addShoe(shoe);
    }
    setLoad(false);
  };
  return (
    <form>
      {isCaneled ? <Navigate to="/shoes"></Navigate> : null}
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="name"
        variant="outlined"
        value={shoe?.name}
        onChange={(e) => {
          setShoe((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="price"
        variant="outlined"
        value={shoe?.price}
        onChange={(e) => {
          setShoe((prev) => ({ ...prev, price: e.target.value }));
        }}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="image"
        variant="outlined"
        value={shoe?.image}
        onChange={(e) => {
          setShoe((prev) => ({ ...prev, image: e.target.value }));
        }}
      />

      <br />
      {load ? <CircularIndeterminate></CircularIndeterminate> : null}
      {shoeId ? (
        <Grid container>
          <Button variant="contained" color="primary" onClick={cancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={updateShoe}>
            Update
          </Button>
          <Button variant="contained" color="primary" onClick={deleteShoe}>
            Delete
          </Button>
        </Grid>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={add}
          disabled={disable}
        >
          Add
        </Button>
      )}
    </form>
  );
};

export default ShoeForm;
