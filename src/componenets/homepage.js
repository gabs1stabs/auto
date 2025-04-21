import { useState } from "react";

export default function HomePga() {
  const [LName, setLName] = useState('');
  const [FName, setFName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  function GoToTheTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <section className="relative">
      <div className="hidden lg:block lg:relative lg:mt-5">
        <img src="./pics/vectortotop.png" alt="" />
        <img src="./pics/vectortop.png" alt="" />
      </div>
    
      <div className="grid lg:grid-cols-6 pr-[100px]">  
        <div className="col-span-6">
          {/* BigVector Image */}
          <img src="./pics/bigvectpr.png" alt="" className="hidden lg:block lg:absolute -top-28" />
    
          {/* Mobile Vector Images */}
          <div className="flex absolute mt-[21.5rem] -left-6">
            <img src="./pics/bigvectpr.png" alt="" className="absolute -top-[335px] ml-10 lg:ml-20 lg:-mt-20" />
            <img src="./pics/mobile/vecdown.png" alt="" />
            <img src="./pics/mobile/vecdown.png" alt="" className="-ml-3 lg:ml-0"/>
            <img src="./pics/mobile/vecdown.png" alt="" className="-ml-3 lg:ml-0"/>
            <img src="./pics/mobile/vecdown.png" alt="" className="-ml-3 lg:ml-0" />
            <img src="./pics/mobile/vecdown.png" alt="" className="-ml-3 lg:ml-0"/>
            <img src="./pics/mobile/vecdown.png" alt="" className="-ml-3 lg:ml-0"/>
          </div>
        </div>
      </div>

      {/* paragraphes*/}
      <div className="grid ml-6 mr-7 mt-16 xl:ml-32 xl:mt-32 lg:ml-10">
        <div className="grid-cols-7 lg:col-span-4">
          <p className="font-neo lg:mr-32 font-[400] text-[16.1px]/[25.83px] text-[#320606] uppercase xl:text-[25.22px] lg:text-[23px]">Réparation et réglage <br /> automobile innovants.</p>
          <p className="font-turret font-[500] text-[15px] text-[#323131] mt-3 xl:text-[18.02px] lg:text-[16.02px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Donec dolor ante, posuere faucibus elit ut, aliquam.</p>
        
          <div className="relative p-3">
            <div className="-ml-5 lg:mt-5">
              <div className="grid relative bg-no-repeat mr-1 xl:w-[465px] lg:w-[400px]" style={{ backgroundImage: "url('./pics/paragraphebg.png')" }}>
                <div className="col-span-5 m-4 mb-2 border-solid w-[90%] h-[44.49px] lg:w-[56px] lg:h-[62px]">
                  <img src="./pics/mecaniclogo.png" alt=""/> 
                </div>
                <div className="ml-24 -mt-[58px] grid-cols-6">
                  <p className="font-turretBold text-[15px] text-[#3C2B1F] font-[800] uppercase lg:text-[19.96px]">LOREM IPSUM DOLOR</p>
                  <p className="font-turret text-[12px] mb-4 text-[#323131] lg:text-[14.41px] w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere.</p>
                </div>
              </div>  
            </div>

            <div className="-ml-5 mt-3 lg:mt-3">
              <div className="grid relative bg-no-repeat mr-2 lg:w-[465px]" style={{ backgroundImage: "url('./pics/paragraphebg.png')" }}>
                <div className="grid-cols-3 m-4 mb-2 border-solid w-[90%] h-[44.49px] lg:w-[56px] lg:h-[62px]">
                  <img src="./pics/secplogo.png" alt="" /> 
                </div>
                <div className="ml-24 -mt-[58px] grid-cols-6">
                  <p className="font-turretBold text-[15px] text-[#3C2B1F] font-[800] uppercase lg:text-[19.96px]">LOREM IPSUM DOLOR</p>
                  <p className="font-turret text-[12px] mb-4 text-[#323131] lg:text-[14.41px] w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere.</p>
                </div>
              </div>  
            </div> 
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 lg:w-[750px] lg:h-[320.65]">
        <img src="./pics/carpic.png" alt="" className="-ml-2 lg:col-span-6 lg:-mt-[25rem] 
        lg:ml-[33.5rem] lg:w-[530px]  xl:w-[660px] lg:h-[413.65]" />
      </div>

      <div className="flex gap-[30px] items-center relative z-0">
        <img src="/pics/carwheelpat1.png" alt="car wheel pattern" className="w-[47%] xl:h-[800px] h-[500px] xl:w-full" />
        <img src="/pics/carwheelpat.png" alt="car wheel pattern" className="w-[47%] xl:h-[800px] h-[500px] xl:w-full" />
      </div>

      {/* imgs row, scroller */}
      <div className="w-full overflow-x-hidden relative z-10 mt-[-460px]
       md:mt-[-440px] lg:mt-[-370px] xl:mt-[-680px]">
        <div className="flex w-max gap-3 animate-scrollLeft will-change-transform scrollbar-transparent lg:mt-9">
          <img src="./pics/sixthimg.png" alt="" className="w-[200px]" />
          <img src="./pics/seventhimg.png" alt="" className="w-[200px]"/>
          <img src="./pics/eightimg.png" alt="" className="w-[200px]" />
          <img src="./pics/ninethimg.png" alt="" className="w-[200px]" />
          <img src="./pics/tenimg.png" alt="" className="w-[200px]"/>
          <img src="./pics/sixthimg.png" alt="" className="w-[200px]"/>
          <img src="./pics/seventhimg.png" alt="" className="w-[200px]" />
          <img src="./pics/eightimg.png" alt="" className="w-[200px]"/>
          <img src="./pics/ninethimg.png" alt="" className="w-[200px]"/>
          <img src="./pics/tenimg.png" alt="" className="w-[200px]"/>
        </div>
      </div> 

      {/*links to socia media */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Mobile view */}
        <div className="mt-16 relative flex justify-center w-full lg:hidden">
          <img src="./pics/formline.png" alt="" className="mr-20" />
          <img src="./pics/formliner.png" alt="" className="ml-20" />
          
          {/* Social icons positioned absolutely in the center between the lines */}
          <div className="absolute flex gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="https://web.facebook.com/" target="_blank">
              <img src="./pics/fclogo.png" alt="" className="w-[48px] h-[48px]" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="./pics/instalogo.png" alt="" className="w-[48px] h-[48px]" />
            </a>
            <a href="https://www.tiktok.com/login?lang=fr&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Dfr" target="_blank" rel="noopener noreferrer">
              <img src="./pics/tiktoklogor.png" alt="" className="w-[48px] h-[48px]" />
            </a>
          </div>
        </div>
        
        {/* Desktop view */}
        <div className="relative lg:mt-16 lg:flex lg:justify-center w-full hidden ">
          <div className="flex justify-center">
            <img src="./pics/formlineld.png" alt="" className="mr-40" />
            <img src="./pics/formlinerd.png" alt="" className="ml-40" />
          </div>
          
          {/* Social icons positioned absolutely in the center between the lines */}
          <div className="absolute flex gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a href="https://web.facebook.com/" target="_blank">
              <img src="./pics/fclogo.png" alt="" className="w-[48px] h-[48px]" />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="./pics/instalogo.png" alt="" className="w-[48px] h-[48px]" />
            </a>
            <a href="https://www.tiktok.com/login?lang=fr&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Dfr" target="_blank" rel="noopener noreferrer">
              <img src="./pics/tiktoklogor.png" alt="" className="w-[48px] h-[48px]" />
            </a>
          </div>
        </div>
      </div>

      {/*Second Layout */}
      <div className="flex gap-20 -mt-10 -ml-20 lg:ml-[590px]
       lg:gap-3 lg:mt-[-60px] xl:ml-[800px]  2xl:ml-[1000px] relative">
        <img src="./pics/smallcarf.png" alt="" className="lg:mt-1 lg:top-[120px] relative" />
        <button
          onClick={GoToTheTop}
          className="absolute right-0 top-20 lg:static xl:absolute xl:right-4 xl:top-28">
          <img
            src="./pics/vectorgoup.png"
            alt=""
            className="h-[58.36px] w-[57px] mt-4 lg:-mt-4 lg:ml-12 lg:h-[77.6px] lg:w-[77.6px]"
          />
        </button>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden w-full">
        <div 
          style={{clipPath: "polygon(0 0, 72% 0, 100% 10%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0% 20%)"}}
          className="relative w-full mt-[27rem] z-0 bg-gradient-to-br from-[#920d0d] to-[#370606]">
        
          <img src="./pics/fortyeightmobile.png" alt="" 
            className="relative z-10 -mt-[31.5rem] ml-[60px]" 
            style={{top:"8rem"}} />
          <div className="relative z-10 -mt-32 ml-[27.3px] ">
            <div>
              <img src="./pics/mobile/whiteline.png" alt="" className="w-[227.4px]" />
              <p className="text-white text-[24.09px] font-neo mt-2">POUR NOUS JOINDRE </p>
              <p className="text-white font-turretBold text-[15.6px] uppercase">Découvrez des solutions abordables <br /> pour votre voiture!</p>
            </div> 
              
            <div className="text-white">
              <p className="">
                <img src="./pics/phoneicon.png" alt="" className="mt-10"/>
                <p className="font-turretBold text-[19.99px] ml-20 -mt-[4.3rem]" style={{top:"5rem"}}>Appeler à tout moment</p>
                <p className="ml-20 font-turret text-[16.04px]">05 36 716 777</p>
                <p className="ml-20 font-turret text-[16.04px]">05 36 716 778</p>
              </p>
          
              <p className="mt-5">
                <img src="./pics/emaillogo.png" alt="" />
                <p className="font-turretBold text-[19.99px] ml-20 -mt-[3.4rem]">Envoyer un e-mail</p>
                <p className="font-turret text-[16.04px] ml-20">contact@auto48.ma</p>
              </p>
                                 
              <p className="mt-8">
                <img src="./pics/locationl.png" alt="" />
                <p className="font-turretBold text-[19.99px] ml-20 -mt-[4rem]">Visitez-nous</p>
                <p className="font-turret text-[16.04px] ml-20">Rte d'Algérie lotis boustane 3 N° 191 <br /> Zone industrielle - Oujda</p>
              </p>
            </div>
 
            <div
              className="relative z-0 w-[95%] py-8 px-5 mt-[20px] bg-white "
              style={{clipPath: "polygon(0 0, 98% 0, 100% 2%, 100% 100%, 80% 100%, 2% 100%, 0 98%, 0% 20%)"}}
            >
              <div className="flex items-center justify-center mb-5 relative mx-5
               sm:px-[100px]">
                <img src="./pics/redline.png" alt="Red arrows" className="w-full" />
                <p className="font-neo text-base uppercase text-[#C81717] absolute">
                  PARLEZ-NOUS
                </p>
              </div>
              
              {/* Form Section */}
              <form className="relative z-10 space-y-4 text-sm font-turret w-full ml-4 rounded-s-[2rem]">
                <input
                  type="text"
                  placeholder="Nom"
                  value={LName}
                  onChange={(e) => setLName(e.target.value)}
                  className="w-[95%] p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] text-black placeholder-black"
                />
                <input
                  type="text"
                  placeholder="Prénom"
                  value={FName}
                  onChange={(e) => setFName(e.target.value)}
                  className="w-[95%] p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input"
                />
                <input
                  type="text"
                  placeholder="Téléphone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-[95%] text-black p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input"
                />
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-[95%] p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input h-24 resize-none"
                />
                <button 
                  className="bg-gradient-to-r from-[#C81717] to-[#700000] text-white px-4 py-2 shadow-md w-[95%]" 
                  style={{clipPath:"polygon(20% 0%, 98% 0, 100% 22%, 100% 100%, 80% 100%, 3% 100%, 0 77%, 0 0)"}}
                >
                  Envoyé
                </button>
              </form>
            </div> 
            <p className="text-[15.55px] uppercase font-turretBold text-white text-center mt-[20px] pb-3">
              © SOFTCACTUS, Tous les droits<br />sont réservés, 2025
            </p>          
          </div>      
        </div>
      </div>

      <div className="hidden lg:block relative lg:mt-52 lg:pb-20 md:pb-16">
        <div 
          className="absolute bg-gradient-to-br from-[#170101] to-[#760808] 
          z-0 w-full lg:w-[95%] lg:mx-5 lg:-mt-[16rem]" 
          style={{
            clipPath: "polygon(12% 0, 57% 0, 100% 59%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 13%)",
            height: "calc(100% + 8rem)"
          }}
        >
        </div>
          
        {/* Content positioned on top of the background */}
        <div className="relative z-10">
          <img src="./pics/fortyeightbgdesk.png" alt="" className="mt-[4.5rem] -ml-[0.3rem] lg:w-[1547.84px] lg:h-[541.84px]" style={{top:"8rem"}} />
          
          <div className="lg:ml-[80px] -mt-32 lg:-mt-[650px] relative xl:left-[50px] 2xl:left-[70px]">
            <div>
              <img src="./pics/whitelinear.png" alt="" className="w-[227.4px]" />
              <p className="text-white text-[24.09px] font-neo mt-2 lg:text-[28px] xl:text-[33.78px]">POUR NOUS JOINDRE </p>
              <p className="text-white font-turretBold text-[15.6px] uppercase lg:text-[18px] xl:text-[21.87px]">Découvrez des solutions abordables <br /> pour votre voiture!</p>
            </div> 
               
            <div className="text-white">
              <p className="">
                <img src="./pics/phoneicon.png" alt="" className="mt-10"/>
                <p className="font-turretBold text-[19.99px] ml-20 -mt-[4.3rem] lg:text-[20.98px]" style={{top:"5rem"}}>Appeler à tout moment</p>
                <p className="ml-20 font-turret text-[16.04px] lg:text-[16.83px]">05 36 716 777</p>
                <p className="ml-20 font-turret text-[16.04px] lg:text-[16.83px]">05 36 716 778</p>
              </p>

              <p className="mt-5">
                <img src="./pics/emaillogo.png" alt="" />
                <p className="font-turretBold text-[19.99px] ml-20 -mt-[3.4rem] lg:text-[20.98px]">Envoyer un e-mail</p>
                <p className="font-turret text-[16.04px] ml-20 lg:text-[16.83px]">contact@auto48.ma</p>
              </p>
                                   
              <p className="mt-8">
                <img src="./pics/locationl.png" alt="" />
                <p className="font-turretBold text-[19.99px] ml-20 -mt-[4rem] lg:text-[20.98px]">Visitez-nous</p>
                <p className="font-turret text-[16.04px] ml-20 lg:text-[16.83px]">Rte d'Algérie lotis boustane 3 N° 191 <br /> Zone industrielle - Oujda</p>
              </p>
            </div>
          </div>
        </div>
        
        <div
          className="relative z-20 bg-no-repeat bg-cover py-8 px-6 
          ml-6 lg:-mt-[450px] lg:ml-[31rem] lg:w-[461.41px] 2xl:left-[370px] xl:left-[200px]"
          style={{ 
            backgroundImage: "url('./pics/formbgd.png')",
            height: "auto"
          }}
        >
          <p className="flex w-[268.34px] ml-7 p-2 lg:hidden ">
            <img src="./pics/redline.png" className="lg:hidden" alt="" />
            <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem] lg:text-[20.38px] lg:ml-[3rem]">PARLEZ-NOUS</p>
          </p>
          <p className="flex w-[333.34px] ml-7 lg:ml-8 p-2 ">
            <img src="./pics/fromlf.png" alt="" className="lg:w-[53.15px] lg:h-[33.15px]"/>
            <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem] lg:text-[20.38px] lg:ml-[1rem]">PARLEZ-NOUS</p>
            <img src="./pics/fromlr.png" alt="" className="lg:w-[53.15px] lg:h-[33.15px]"/>
          </p>

          {/* Form Section */}
          <form className="space-y-4 text-sm font-turret
           w-[313.51px] ml-4 rounded-s-[2rem] mb-8 ">
            <input
              type="text"
              placeholder="Nom"
              value={LName}
              onChange={(e) => setLName(e.target.value)}
              className="w-full p-3 lg:p-4 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] text-black placeholder-black"
            />
            <input
              type="text"
              placeholder="Prénom"
              value={FName}
              onChange={(e) => setFName(e.target.value)}
              className="w-full p-3 lg:p-4 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input"
            />
            <input
              type="text"
              placeholder="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full lg:p-4 text-black p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 lg:p-4 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input h-24 resize-none"
            />
            <button 
              className="bg-gradient-to-r from-[#C81717] to-[#700000] text-white px-4 py-2 shadow-md w-[313.51px]" 
              style={{clipPath:"polygon(20% 0%, 98% 0, 100% 22%, 100% 100%, 80% 100%, 3% 100%, 0 77%, 0 0)"}}
            >
              Envoyé
            </button>
          </form>
        </div>
        
        {/* Copyright text for desktop */}
        <div className="text-black text-center pb-8">
          <p className="text-[16px] uppercase font-turretBold relative top-20 ">
            © SOFTCACTUS, Tous les droits sont réservés, 2025
          </p>
        </div>
      </div>
    </section>
  );
}