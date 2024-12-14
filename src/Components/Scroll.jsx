import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import Slider from 'react-slick';

const Scroll = () => {

    let imgArr=["/photos/cash7.webp","/photos/cash3.webp","/photos/cash4.webp","/photos/cash5.webp","/photos/cash6.webp","/photos/cash8.webp"]

  const settings = {
    dots: true,
    infinite: true, // Looping infinite
    speed: 500, // Slide animation speed
    autoplay: true, // Automatic scrolling
    autoplaySpeed: 2000, // 2 seconds delay
    slidesToShow: 1, // Only one image per view
  };

  return (
    <div className="px-[2vw] mb-[2rem]">
    <Slider {...settings}  >
     {
        imgArr.map((item,index)=>{
            return <img src={item} alt="img not available" className=" rounded-md" />
        })
     }
    </Slider>
    </div>
  );
};

export default Scroll; 
