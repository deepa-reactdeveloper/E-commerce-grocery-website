import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./Filter.css";
import { subCategoryFilter } from "./FilterComponentData";
import Search from "./SearchComponent"
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function OfferFilter(props) {
  const [state, setState] = React.useState({
    // checkedA: true,
    // checkedB: true,
    // checkedF: true,
    // checkedG: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    return true;
  };

  return (
    <div
     
    >
      {subCategoryFilter.map((item, index) => {
        return (
          <div style={{ marginTop: "3rem", display: "block", flexDirection: "column" ,marginBottom:'5rem'}}>
          <div style={item.titleStyle}>{item.title}</div>
          <Search  history={props.history} placeholder={props.placeholder}/>
            <div id="overflowSlide">
              <FormGroup row>
                {item.category.map((values, index) => {
                  return (
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={state.checkedG}
                          onChange={handleChange}
                          name="checkedG"
                        />
                      }
                      label={values.name}
                    />
                  );
                })}

                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={state.checkedG}
                      onChange={handleChange}
                      name="checkedG"
                    />
                  }
                  label="Custom color"
                />
              </FormGroup>
            </div>
          </div>
        );
      })}
    </div>
  );
}
