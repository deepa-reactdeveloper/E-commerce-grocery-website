import React from "react";
import ReactDOM from "react-dom";
//import Slider, { Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import Slider, { createSliderWithTooltip } from "rc-slider";

import "rc-slider/assets/index.css";
//import "./styles.css";

const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

export default class RangeSliders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }
  onSliderChange = value => {
    this.setState(
      {
        value
      },
      () => {
        console.log(this.state.value);
      }
    );
  };

  render() {
    return (
      <div class="slidecontainer" style={{}}>
        <p style={{position:'absolute',zIndex:'3',bottom:'px'}}>{this.state.value}</p>
        
        <Slider
          min={0}
          max={9}
          value={this.state.value}
          onChange={this.onSliderChange}
          railStyle={{
            height: 13,
            backgroundImage: 'url(https://i.ibb.co/5vGc1X1/Rating-Bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          outline: 'none',
          opacity: '0.7',
          transition: 'opacity .2s'
          }}
          SliderStyle={{backgroundImage: 'url(https://i.ibb.co/NZmjmvD/Group-813.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          outline: 'none',
          opacity: '0.7',
          transition: 'opacity .2s'
          
        }}

          handleStyle={{
            
            height: 26,
            width: 26,
            marginLeft: -14,
            marginTop: -6,
            backgroundColor: "white",
          position:'relative',
    border: '4px solid yellow'
    
          }}
          trackStyle={{
          background:'transparent'
          }}
        />
      </div>
    );
  }
}


