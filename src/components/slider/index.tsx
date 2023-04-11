import React, { useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Capital, Market, HomePic, Start } from "../../assets";
// import Carousel from "framer-motion-carousel";

// import Carousel from "react-elastic-carousel";import Slider from "react-slick";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const a2 = [
//   { heading: "YOUR HOME FOR CRYPTO", imageSrc: HomePic },
//   { heading: "2nd slide", imageSrc: Start },
// ];

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const Slider = () => {
//   const [current, setScuurent] = useState(0);
//   const slide = [1, 2, 3, 4, 5];
//   return (
//     <div style={{ width: "100%", height: 400 }}>
//       <div className="slideshow">
//         <div className="slideshowSlider">
//           {colors.map((backgroundColor, index) => (
//             <div
//               className="slide"
//               key={index}
//               style={{
//                 backgroundColor,
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {" "}
//               {index}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];

// function Slideshow() {
//   const delay = 2500;
//   const [index, setIndex] = React.useState(0);
//   React.useEffect(() => {
//     setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {};
//   }, [index]);
//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(0, ${(index + 1) * 420}px, 0)` }}
//       >
//         {colors.map((backgroundColor, index) => (
//           <div className="slide" key={index} style={{ backgroundColor }}>
//             {index}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slideshow;

function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  // return <>s</>;
  return (
    // // @ts-ignore
    // <Carousel
    //   itemsToShow={1}
    //   isRTL={false}
    //   verticalMode
    //   showArrows={false}
    //   showEmptySlots={false}
    //   // enableAutoPlay={true}
    //   autoPlaySpeed={1000}
    //   enableMouseSwipe
    // >
    //   <div style={{ height: "400px", background: "red", width: "100%" }}>1</div>
    //   <div style={{ height: "400px", background: "green", width: "100%" }}>
    //     2
    //   </div>
    // </Carousel>
    <Slider {...settings}>
      <div style={{ border: "5px solid blue !important" }}>
        <div
          style={{
            height: "400px",
            background: "red",
            width: "100%",
            border: "2px solid green !important",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ background: "orange", margin: "0px" }}>1</h3>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "400px",
            background: "green",
            width: "100%",
            border: "2px solid green !important",
          }}
        >
          <h3 style={{ background: "yellow", margin: "0px" }}>2</h3>
        </div>
      </div>
    </Slider>
  );
}

export default SlideShow;
