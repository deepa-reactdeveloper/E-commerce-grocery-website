import ReactDOM from "react-dom";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MobileSlider.css"
import "../../Mediaquery/Home/Home.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://i.ibb.co/6J3ykGP/prodban1.png",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src:
      "https://i.ibb.co/qJqgbLb/prodban2.png",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src:
      "https://i.ibb.co/6J3ykGP/prodban1.png",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

var lastX = 0;
var currentX = 0;

export default class MobileSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  handleMouse = e => {
    e.persist();
    let type = e.type.toLowerCase();
    if (type === "dragstart") {
      lastX = e.clientX;
    } else {
      if (lastX === 0 || e.clientX === 0 || lastX === e.clientX) {
        return;
      }
      if (e.clientX > lastX) {
        this.previous();
        console.log("swife right");
      } else {
        this.next();
        console.log("swife left");
      }
    }
  };

  handleTouch = e => {
    e.persist();
    let type = e.type.toLowerCase();

    if (type === "touchstart") {
      lastX = e.touches[0].clientX;
    }

    if (type === "touchmove") {
      currentX = e.touches[0].clientX;
    }

    if (type === "touchend") {
      if (lastX === 0 || currentX === 0 || lastX === currentX) {
        return;
      }
      if (currentX > lastX) {
        this.previous();
        console.log("swife right");
      } else {
        this.next();
        console.log("swife left");
      }
    }
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
     
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            style={{ width: "100%" }}
            src={item.src}
            alt={item.altText}
            onTouchStart={e => this.handleTouch(e)}
            onTouchMove={e => this.handleTouch(e)}
            onTouchEnd={e => this.handleTouch(e)}
            onDragStart={e => this.handleMouse(e)}
            onDragEnd={e => this.handleMouse(e)}
          />
        </CarouselItem>
        
      );
    });

    return (
<div className="mobileViewSlider" style={{margin:'15rem 0rem 3rem 0rem'}}>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        {slides}

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
      </div>
    );
  }
}

// import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
// import "./MobileSlider.css";
// import "../../Mediaquery/Home/Home.css"
// export default function MobileSlider() 
// {
//     return(
//         <div className="mobileViewSlider">
//         <div class="carousel">
//           <ul class="slides">
//             <input type="radio" name="radio-buttons" id="img-1" checked />
//             <li class="slide-container">
//               <div class="slide-image">
//                 <img src="https://i.ibb.co/6J3ykGP/prodban1.png" style={{width:'100%',height:"260px"}}/>
//               </div>
//               <div class="carousel-controls">
//                 <label for="img-3" class="prev-slide">
//              {/* */}   <span>&lsaquo;</span>
//                 </label>
//                 <label for="img-2" class="next-slide">
//                   {/* */}  <span>&rsaquo;</span>
//                 </label>
//               </div>
//             </li>
//             <input type="radio" name="radio-buttons" id="img-2" />
//             <li class="slide-container">
//               <div class="slide-image">
//                 <img src="https://i.ibb.co/qJqgbLb/prodban2.png" style={{width:'100%',height:"260px"}}/>
//               </div>
//               <div class="carousel-controls">
//                 <label for="img-1" class="prev-slide">
//                   <span>&lsaquo;</span>
//                 </label>
//                 <label for="img-3" class="next-slide">
//                   <span>&rsaquo;</span>
//                 </label>
//               </div>
//             </li>
//             <input type="radio" name="radio-buttons" id="img-3" />
//             <li class="slide-container">
//               <div class="slide-image">
//                 <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg" style={{width:'100%',height:"260px"}}/>
//               </div>
//               <div class="carousel-controls">
//                 <label for="img-2" class="prev-slide">
//                   <span>&lsaquo;</span>
//                 </label>
//                 <label for="img-1" class="next-slide">
//                   <span>&rsaquo;</span>
//                 </label>
//               </div>
//             </li>
//             <div class="carousel-dots">
//               <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
//               <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
//               <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
//             </div>
//           </ul>
//         </div>
//       </div>
//     )
// }