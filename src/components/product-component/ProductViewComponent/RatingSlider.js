import React, { useEffect ,useState} from "react";
export default function RatingSlider() {
  const [range, setRange] = useState(0);
  useEffect(() => {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
    };
  }, []);

  return (
    <div class="slidecontainer">
      <input
        type="range"
        id="start"
    name="rating"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
        onChange={e => setRange(e.target.value)}
      />
      {/*
      <input
    type="range"
    id="start"
    name="age"
    defaultvalue="0"
    class="sliderrange rangevalue"
    min="1"
    max="100"
    id="myRange"
    onChange={e => setRange(e.target.value)}
  />
      */}
      <p>
        Value: <span id="demo"></span>
      </p>
    </div>
  );
}

// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Slider from "@material-ui/core/Slider";

// const useStyles = makeStyles({
//   root: {
//     width: 200
//   }
// });

// const CustomSlider = withStyles({
//   rail: {
//     backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
//   },
//   track: {
//     backgroundImage: "linear-gradient(.25turn, #f00, #00f)"
//   }
// })(Slider);

// export default function ContinuousSlider() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(30);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <CustomSlider
//         value={value}
//         onChange={handleChange}
//         aria-labelledby="continuous-slider"
//       />
//     </div>
//   );
// }
