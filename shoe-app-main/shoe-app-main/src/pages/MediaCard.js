import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";

export default function MediaCard({ data }) {
  const [editFlag, setEditFlag] = useState(false);
  return (
    <Grid item xs={3}>
      {editFlag ? <Navigate to={"/" + data.id}></Navigate> : null}

      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={data.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setEditFlag(true);
            }}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
