import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { subCategoryFilter } from "./FilterComponentData";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "43ch",
    },
  },
}));

export default function Search(props) {
  const classes = useStyles();
console.log(props,"propssssssssssssssssssssssssssss")
  return (
    <div>
     
    
          <div style={{ paddingLeft: "15px", paddingBottom: "5px" }}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label={props.placeholder}
                variant="outlined"
              />
            </form>
          </div>
      
    </div>
  );
}
