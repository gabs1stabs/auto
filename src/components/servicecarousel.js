import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServiceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={` ${className} p-1 2xl:w-3 ` }
        style={{ ...style, display: 'block', 
        background: isHover?'white':"#eae3e3a3",
        clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'
        ,border: isHover?"1px solid black":""}}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg"  className="w-5 h-5 2xl:w-7 2xl:h-7"
              viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
          <polyline points="10 16 17 10 10 6"></polyline>
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    const [isHover, setIsHover] = useState(false);

    return (
      <div
        className={`${className} 
        p-1 ` }
        style={{ ...style, display: 'block', background: isHover?'white':"#eae3e3a3",
        border: isHover?"1px solid black":"",
        clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'}}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg"   className="w-5 h-5 2xl:w-7 2xl:h-7"
        viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" 
        strokeLinecap="round" strokeLinejoin="round">
          <polyline points="14 16 7 10 14 6"></polyline>
        </svg>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const cards = [
    { id: "01", title: "CARROSSERIE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "02", title: "PEINTURE AUTO", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "03", title: "ÉLECTRICITÉ ", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "04", title: "DIAGNOSTICS", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "05", title: "MÉCANIQUE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "06", title: "VIDANGE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "07", title: "CLIMATISATION", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "08", title: "FREINAGE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "09", title: "TÔLERIE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];
  

  return (
    <div>
      <div className=" w-[70%] sm:w-[55%] md:w-[50%] lg:w-[90%]   
      m-auto font-turret h-[150px]">
        <div className="h-[150px] ">
          <style jsx>{`
            .slick-prev:before, .slick-next:before {
              display: none;
            }   
            .gradient-bg {
              background: linear-gradient(45deg, #450a0a  ,#c01f1f );
            }
          `}</style>
          
          <Slider {...settings}>
            {cards.map((d, index) => (
              <div key={d.id} 
              className="px-2  ">
                <div  
                style={{
                  clipPath: "polygon(100% 0%, 100% 60%, 75% 100%, 0 100%, 0 50%, 25% 0%)",
                  boxShadow: index === activeSlide
                ? '0 10px 30px rgba(0, 0, 0, 0.4)'  
                : '0 4px 15px rgba(0, 0, 0, 0.2)'  ,
                border: index === activeSlide 
                ? '1px solid white' 
                : '1px solid black',       }}
                  className={`
                     transition-all duration-300 transform overflow-hidden h-[150px] sm:h-[170px] 
                     mg:h-[200px] 2xl:h-[280px] 3xl:h-[300px] 4xl:h-[300px] 5xl:h-[350px] 6xl:h-[400px] 7xl:h-[450px]
                     8xl:h-[500px] 9xl:h-[550px] 1xl:h-[600px] lg:w-[310px] xl:w-auto  2xl:w-[450px] 3xl:w-[500px] 4xl:w-[560px] 5xl:w-[620px] 6xl:w-[680px] 7xl:w-[740px] 8xl:w-[800px] 9xl:w-[890px]
                    ${index === activeSlide 
                      ? "gradient-bg scale-100 z-10 " 
                      : "bg-white scale-75 z-0"}
                  `}
                >
                  <div 
                    className={`
                      h-35 flex justify-center items-center relative
                      ${index === activeSlide ? "" : "bg-white"}
                    `}
                  >
                    <div className="absolute bg-gradient-to-tr from-[#450a0a]  to-[#a51313] right-[10px] top-4 w-10 h-9
                    md:w-11 md:h-10 mg:w-12 mg:h-11 2xl:w-[66px] 2xl:h-[64px] 3xl:w-[76px] 3xl:h-[74px] 5xl:w-[81px] 5xl:h-[79px]
                    6xl:w-[86px] 6xl:h-[84px] 7xl:w-[92px] 7xl:h-[89px] 8xl:w-[100px] 8xl:h-[96px] 9xl:w-[120px] 9xl:h-[100px] 1xl:w-[130px] 1xl:h-[110px] "
                    style={{clipPath:"polygon(20% 0%, 100% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 100%, 0% 20%)"}} alt=""></div>
                    <div className='text-white absolute right-[17px] 2xl:right-[21px] 3xl:right-[22px] 9xl:right-[27px] 1xl:right-[30px]
                    top-5 text-[20px] md:text-[22px] mg:text-[24px] 3xl:top-7
                    2xl:text-[33px] 3xl:text-[39px] 4xl:text-[35px] 5xl:text-[39px] 6xl:text-[43px] 7xl:text-[48px]
                    8xl:text-[52px] 9xl:text-[56px] 1xl:text-[59px]'>{d.id}</div> 
                  </div>
                  <div className=" justify-end px-4 pt-10 sm:pb-4 sm:pt-12 h-[150px] text-left mt-4 mb-3 ml-1 md:ml-2 mg:ml-6 
                  2xl:ml-4 lg:ml-3 3xl:ml-5 4xl:ml-6 5xl:ml-7 6xl:ml-8 7xl:ml-9 8xl:ml-10 9xl:ml-11 1xl:ml-12 md:mb-0 md:mt-2 mg:mt-3
                  lg:mt-5 2xl:mt-[60px] 3xl:mt-[80px] 4xl:mt-[60px] 5xl:mt-[80px] 6xl:mt-[100px] 7xl:mt-[130px] 8xl:mt-[150px] 9xl:mt-[180px] 1xl:mt-[230px]">
  <p className={`text-[12px] xs:text-[14px] sm:text-[15px] md:text-[18px] mg:text-[21px] lg:text-[22px]
   2xl:text-[28px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[37px] 6xl:text-[40px] 7xl:text-[44px] 
   8xl:text-[47px] 9xl:text-[50px] 1xl:text-[56px] font-extrabold  ${index === activeSlide ? "text-white" : "text-red-700"}`}>
    {d.title}
  </p>
  <div style={{ width: '200px', margin: ' 7px 0' }}>
  <div
    style={{
      borderTop: "1px solid transparent",
      borderImage: "linear-gradient(to right, red,red, white , transparent) 1",
      borderImageSlice: 1
    }}
  />
</div>

  <p className={`text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13.5px] mg:text-[16px] 2xl:text-[19px] 
   3xl:text-[20px] 4xl:text-[23px] 5xl:text-[25px] 6xl:text-[29px] 7xl:text-[31px] 8xl:text-[34px] 9xl:text-[37px] 1xl:text-[41px]
   w-[150px] xs:w-[180px] md:w-[210px] mg:w-[230px] lg:w-[200px] 2xl:w-[240px] 3xl:w-[260px]
   4xl:w-[290px] 5xl:w-[320px] 6xl:w-[370px] 7xl:w-[420px] 8xl:w-[430px] 9xl:w-[470px] 1xl:w-[520px] ${index === activeSlide ? "text-white" : "text-black"}`}>
    {d.content}
  </p>
</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
