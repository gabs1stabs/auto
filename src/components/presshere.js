import React, { useState, useRef, useEffect } from 'react';

export default function PressHere({ onComplete }) {
  const [introStage, setIntroStage] = useState('landing');
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    setIntroStage('playing');
  };

  const handleVideoEnd = () => {
    console.log("Video ended, starting fade out.");
    setIntroStage('fading');

    const fadeTimer = setTimeout(() => {
      console.log("Fade out complete (via timeout).");
      onComplete();
    }, 400); 

    return () => clearTimeout(fadeTimer);
  };



  useEffect(() => {
    if (introStage === 'playing' && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        
      });
    }
  }, [introStage]); 



  return (
    <div
      className={`
        fixed inset-0 z-[999] 
        transition-opacity duration-500 ease-out 
        ${introStage === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'} 
        ${introStage === 'playing' || introStage === 'fading' ? 'bg-black' : 'bg-transparent'} 
      `}>
      <div
        className={`
          absolute inset-0 w-full h-full flex flex-col items-center justify-center
          bg-no-repeat bg-center bg-cover font-turret
          transition-opacity duration-300 ease-in 
          ${introStage === 'playing' || introStage === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'} 
        `}
        style={{ backgroundImage: "url('/pics/bg1.svg')" }}
      >
        <div className="flex flex-col items-center justify-center w-4/5 max-w-4xl space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <img
            src="/pics/logo2.png"
            alt="logo"
            className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-32 lg:h-28 xl:w-36 xl:h-32"
          />
          <div className="relative flex items-center justify-center w-full">
            <img
              src="/pics/brdTrns.png"
              alt="border"
              className="w-full sm:w-[75%] lg:w-[65%] h-auto max-h-24 sm:max-h-28 md:max-h-32 lg:max-h-38"
            />
            <div className="absolute text-center font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black w-3/4 sm:w-[70%] md:w-[60%] lg:w-[50%]">
              Votre atelier de confiance pour la mécanique générale, l'électricité auto,
              la tôlerie-peinture et le pneumatique
            </div>
          </div>
          <button
            className="mt-2 sm:mt-3 md:mt-4
                       w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44
                       h-8 sm:h-10 md:h-12 lg:h-14
                       rounded-lg
                       font-turret font-bold text-white
                       text-xs sm:text-sm md:text-base lg:text-lg
                       shadow-[5px_5px_0px_white]
                       bg-gradient-to-r from-red-900 via-red-500 to-red-900
                       hover:opacity-90 transition-opacity"
            onClick={handleButtonClick}
          >
            CLIQUER ICI
          </button>
        </div>
      </div>

      {(introStage === 'playing' || introStage === 'fading') && (
         <div className={`absolute inset-0 transition-opacity duration-300 ease-in ${introStage === 'playing' ? 'opacity-100' : 'opacity-0'}`}> 
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd} 
            muted       
            playsInline 
            src="/animvid/autovid.mp4"
          >
             Your browser does not support the video tag.
          </video>
         </div>
      )}
    </div>
  );
}