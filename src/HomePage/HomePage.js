import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Paper, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export default function HomePage() {
  const drawerWidth = 240;
  const [exspenses, setExpenses] = useState([]);
  var totalprice = 0;
  const [ref, serRef] = useState(true);
  exspenses.forEach((e) => {
    totalprice = totalprice + e.price;
  });

  useEffect(() => {
    fetch("http://localhost:3100/myData", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((e) => setExpenses(e));
  }, [ref]);

  function deleteExpenses(id) {
    fetch(`http://localhost:3100/myData/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then( ()=>
      serRef((prev) => !prev)
    );
  }

  const showExpenses = exspenses.map((e, key) => (
    <Paper
      key={key}
      sx={{
        position: "relative",
        display: "flex",
        width: "366px",
        justifyContent: "space-between",
        alignItems: "center",
        pb: "5px",
        pt: "30px",
        mt: "22px",
        px: "12px",
      }}
    >
      <Typography variant="h6" color="-moz-initial">
        {e.text}
      </Typography>

      <Typography variant="inherit" color="-moz-initial">
        {e.price}$
      </Typography>
      <IconButton
        aria-label=""
        sx={{ position: "absolute", top: "0", right: "0" }}
        onClick={(item) => deleteExpenses(e.id)}
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  ));

  return (
    <div>
      <Box
        sx={{
          mt: "130px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {showExpenses}


        <Typography variant="inherit" sx={{my:"10px"}} color="-moz-initial">
      👉 You spend {totalprice}$ 
      </Typography>
      </Box>
    </div>
  );
}
