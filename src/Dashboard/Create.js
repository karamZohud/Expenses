import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useNavigate } from "react-router-dom";
export default function Create() {

  const [data,setData]=useState({
    text:"",
    Price:""
  });
const nav=useNavigate();
  function changeData(e){
    return setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submitData(e){
    e.preventDefault();  
    fetch("http://localhost:3100/myData", {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         'text':data.text,
         'price':Number(data.Price)
      })
  }).then(nav("/"))
  
  
  }
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
      scale:"0.99"
    },
  }));

  return (
    <Box
      component="form"
      sx={{
        marginTop: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="Transaction  Title"
        sx={{ m: 1, width: "333px" }}
        required
        onChange={changeData}
        name="text"
        InputProps={{
          startAdornment: <InputAdornment position="start">👉
          </InputAdornment>,
        }}
        variant="filled"
      />
      <br />
      <TextField
        label="Price"
        onChange={changeData}
        name="Price"
       required
        sx={{ m: 1, width: "333px" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />
      <ColorButton className="mt-3" variant="contained" onClick={submitData}>
        Submit <KeyboardArrowRightIcon/>
      </ColorButton>
    </Box>
  );
}
