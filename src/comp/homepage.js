import { useState } from "react";
import './homestyles.css';
export default function HomePga(){
    const[LName,setLName]=useState('');
    const [FName,setFName]=useState('');
    const[phone,setPhone]=useState('');
    const[message,setMessage]=useState('');
    function GoToTheTop(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return(
        <section className="min-h-screen overflow-x-clip">   
        <div className="hidden lg:relative lg:mt-5">
          <img src="./pics/vectortotop.png" alt="" />
          <img src="./pics/vectortop.png" alt="" />
        </div>
      
        <div className="grid lg:grid-cols-6  pr-[140px]">  
          <div className="col-span-6">
            {/* BigVector Image */}
            <img src="./pics/bigvectpr.png" alt="" className="hidden lg:absolute -top-28" />
      
            {/* Mobile Vector Images */}
            <div className="flex absolute mt-[21.5rem] -left-6 md:mt-[14rem] lg:mt-[22rem] md:ml-2 lg:ml-1 Vectors">
            <img src="./pics/bigvectpr.png" alt="" className="absolute -top-[335px]  ml-16 lg:ml-20 lg:-mt-20 " />
              <img src="./pics/mobile/vecdown.png" alt="" />
              <img src="./pics/mobile/vecdown.png" alt="" className="-ml-4 lg:ml-0"/>
              <img src="./pics/mobile/vecdown.png" alt="" className="-ml-4 lg:ml-0"/>
              <img src="./pics/mobile/vecdown.png" alt="" className="-ml-4 lg:ml-0" />
              <img src="./pics/mobile/vecdown.png" alt="" className="-ml-4 lg:ml-0"/>
              <img src="./pics/mobile/vecdown.png" alt="" className="-ml-4 lg:ml-0"/>
            </div>
        </div>
      </div>
      {/* paragraphes*/}
        <div className="firstparagraphes grid ml-6 mr-7 mt-16 lg:ml-32 lg:mt-32  ">
            <div className="grid-cols-7 lg:col-span-4 ">
            <p className="font-neo lg:mr-32 font-[400] text-[16.1px]/[25.83px] text-[#320606] uppercase lg:text-[25.22px] xl:text-[29px] xl:tracking-[0.017em] leading-[36px] 2xl:text-[35px] 2xl:tracking-[0.025em] RepP" >Réparation et réglage <br /> automobile innovants.</p>
            <p className="font-turret font-[500] text-[15px] text-[#323131] mt-3 lg:text-[18.02px] md:text-[14px] xl:text-[24px] 2xl:text-[30px] loremRep">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Donec dolor ante, posuere faucibus elit ut, aliquam.</p>
          
            <div className="relative p-3 ">
                <div className="-ml-5 lg:mt-5 md:w-[350px]  ">
                    <div className="grid relative bg-white bg-no-repeat mr-2  lg:w-[465px]  border-[#A2A6B0] xl:w-[600px] 2xl:w-[660px] parDiv" style={{borderWidth:"1.1px"}}>
                         <div className="col-span-5 m-4 mb-2  border-solid w-[44.49px] h-[44.49px] lg:w-[62px] lg:h-[62px] " ><img src="./pics/mecaniclogo.png" alt="" className="xl:w-[82px] xl:h-[82px] xl:mt-2 2xl:w-[102px] 2xl:h-[102px] 2xl:mt-3" /> </div>
                         <div className="ml-24 -mt-[58px] grid-cols-6">
                              <p className="font-turretBold text-[15px] text-[#3C2B1F] font-[800] uppercase lg:txet-[19.96px] xl:text-[23px] 2xl:text-[29px] loremTittle">LOREM IPSUM DOLOR</p>
                              <p className="font-turret text-[12px] mb-4 text-[#323131]  lg:txet-[14.41px] xl:text-[18px] 2xl:text-[24px] loremDesc ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere.</p>
                         </div>
                    </div>  
                </div>

                <div className="-ml-5 bg-white mt-2 lg:mt-3 md:w-[350px]">
                    <div className="grid relative bg-white bg-no-repeat mr-2 lg:w-[465px] border-[#A2A6B0] xl:w-[600px] 2xl:w-[660px] parDiv" style={{borderWidth:"1.1px" }}>
                         <div className="grid-cols-3 m-4 mb-2 border-solid w-[44.49px] h-[44.49px] lg:w-[62px] lg:h-[62px] " ><img src="./pics/secplogo.png" alt="" className="xl:w-[82px] xl:h-[82px] xl:mt-2  2xl:mt-3" /> </div>
                          <div className="ml-24 -mt-[58px] grid-cols-6">
                               <p className="font-turretBold text-[15px] text-[#3C2B1F] font-[800] uppercase lg:txet-[19.96px] xl:text-[23px]  2xl:text-[29px] 2xl:ml-22 loremTittle">LOREM IPSUM DOLOR</p>
                              <p className="font-turret text-[12px] mb-4 text-[#323131] lg:txet-[14.41px] xl:text-[18px] 2xl:text-[24px] loremDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor ante, posuere.</p>
                         </div>
                    </div>  
                </div> 
            </div>
        </div>
    </div>

   <div className="lg:col-span-4 lg:w-[750px] lg:h-[320.65px] lg:mt-[5rem] lg:ml-3 xl:ml-48 xl:mt-[3rem] 2xl:ml-72  2xl:mt-24 ">
  <img
    src="./pics/carpic.png"
    alt=""
    className="bigCarPosition 
      -ml-3 
      md:w-[400px] md:h-auto  md:-mt-56 md:ml-[24rem]
      lg:w-[540px] lg:h-[320.65px] 
      lg:ml-[33.5rem] 
      lg:-mt-[25rem]
       xl:ml-36 
      
    "
  />
</div>


    <div className="flex  mt-24 -ml-3 md:hidden" style={{clipPath:"polygon(20% 0%, 100% 0, 100% 25%, 100% 67%, 80% 100%, 20% 100%, 0 100%, 0 0)"}}>
        <img src="./pics/mobile/patternright.png" alt="" className="-ml-[10px]" />
        <img src="./pics/mobile/patternleft.png" alt="" className="ml-[36px]" style={{position:"relative",top:"-1rem"}} />
    </div>

   {/*imgs row, scroller */}
 <div className="w-full overflow-x-hidden -mt-[46rem] md:mt-11 ">
    <div className="flex w-max gap-6 animate-scrollLeft will-change-transform scrollbar-transparent lg:mt-9 xl:mt-16 scroller">
        <img src="./pics/sixthimg.png" alt="" className="w-[200px] xl:w-[250px]" />
        <img src="./pics/seventhimg.png" alt="" className="w-[200px] xl:w-[250px]"/>
        <img src="./pics/eightimg.png" alt="" className="w-[200px] xl:w-[250px]" />
        <img src="./pics/ninethimg.png" alt="" className="w-[200px] xl:w-[250px]" />
        <img src="./pics/tenimg.png" alt="" className="w-[200px] xl:w-[250px]"/>
        <img src="./pics/sixthimg.png" alt="" className="w-[200px] xl:w-[250px]"/>
        <img src="./pics/seventhimg.png" alt="" className="w-[200px] xl:w-[250px]" />
        <img src="./pics/eightimg.png" alt="" className="w-[200px] xl:w-[250px]"/>
        <img src="./pics/ninethimg.png" alt="" className="w-[200px] xl:w-[250px]"/>
        <img src="./pics/tenimg.png" alt="" className="w-[200px] xl:w-[250px]"/>
        
    </div>
 </div> 
 {/*links to socia media */}
    <div className="-ml-1  socialmedia md:ml-3  z-20">
        <div className=" mt-16 ml-4 flex md:ml-36 lg:hidden">
             <img src="./pics/formline.png" alt="" className="mr-40 ml-5"/>
             <img src="./pics/formliner.png" alt="" className="ml-4 " />
        </div>
        <div className=" lg:mt-16 lg:ml-32 lg:gap-28 lg:flex hidden ">
             <img src="./pics/formlineld.png" alt="" className="mr-40 ml-5  "/>
             <img src="./pics/formlinerd.png" alt="" className="ml-4 " />
        </div>
        <div className="flex gap-2 -mt-7 ml-[8.4rem] lg:ml-[36.5rem] lg:gap-4 lg:mb-6 md:ml-[15.5rem] xl:-mt-12 xl:ml-[37.2rem] socialmediaicons">
           <a href="https://web.facebook.com/" target="_blank" className="relative z-30" >
             <img src="./pics/fclogo.png" alt="" className="w-[38px] h-[38px] "/>
           </a>
          <a href="https://www.instagram.com/" target="_blank" className="relative z-30" >
           <img src="./pics/instalogo.png" alt="" className="w-[38px] h-[38px] "/>
          </a>
          <a href="https://www.tiktok.com/login?lang=fr&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Dfr" target="_blank" rel="noopener noreferrer" className="relative z-30">
          <img src="./pics/tiktoklogor.png" alt="" className="w-[38px] h-[38px] "/>
           </a>
        </div>
    </div>    

    {/*Second Layout */}
   <div onClick={GoToTheTop} className="relative z-30"><img src="./pics/vectorgoup.png" alt="" className="cursor-pointer h-[58.36px] w-[57px] mt-4 lg:mt-6 lg:ml-[58rem]  lg:h-[77.6.36px] lg:w-[77.6px] md:ml-[44.5rem] md:mt-16 xl:ml-[75rem]  Vecposition"   /> </div> 
    <div className="flex gap-20 -mt-40 -ml-24 lg:ml-[42rem]  lg:mt-9 md:ml-60 xl:ml-[50rem] carposition ">
        <img src="./pics/carg.gif" alt="" className=" w-[180px] mt-[100px] ml-[6rem] lg:-mt-12  lg:ml-56  " />
        
    </div>

    <div className="lg:hidden xl:hidden 2xl:hidden md:hidden Mobile mt-[520px]" >
        <div style= {{ backgroundImage: 'linear-gradient(to top, #151514, #640C0C)',clipPath: 'polygon(21% 0, 80% 0, 100% 14%, 100% 100%, 80% 100%, 15% 100%, 0 100%, 0 0)',
    WebkitClipPath: 'polygon(21% 0, 80% 0, 100% 14%, 100% 100%, 80% 100%, 15% 100%, 0 100%, 0 0)'}} className="relative bg-no-repeat w-full mt-[27rem] z-0" >
        
        <img src="./pics/fortyeightmobile.png" alt="" className="relative z-10 -mt-[31.5rem] -ml-[0.3rem] fortyeight " style={{top:"8rem"}} />
        <div className="relative z-10 -mt-32 ml-[27.3px] Paragraphes  ">
           <div>
             <img src="./pics/mobile/whiteline.png" alt="" className="w-[227.4px]" />
             <p className="text-white text-[21.09px] font-neo mt-2">POUR NOUS JOINDRE </p>
             <p className="text-white font-turretBold text-[14.6px] uppercase">Découvrez des solutions abordables <br /> pour votre voiture!</p>
            </div> 
             
            <div className="text-white">
                                 <p className="">
                                  <img src="./pics/phoneicon.png" alt="" className="mt-10"/>
                                  <p className="font-turretBold text-[19px] ml-20 -mt-[4.3rem]" style={{top:"5rem"}} >Appeler à tout moment</p>
                                  <p className="ml-20 font-turret text-[15.04px]">05 36 716 777</p>
                                  <p className="ml-20 font-turret text-[15.04px]" >05 36 716 778</p>
                                 </p>
        
                                 <p className="mt-5">
                                    <img src="./pics/emaillogo.png" alt="" />
                                    <p className="font-turretBold text-[19px] ml-20 -mt-[3.4rem]"  >Envoyer un e-mail</p>
                                    <p  className="font-turret text-[15.04px] ml-20 ">contact@auto48.ma</p>
                                 </p>
                                 
                                 <p className="mt-8">
                                    <img src="./pics/locationl.png" alt="" />
                                    <p className="font-turretBold text-[19px] ml-20 -mt-[4rem]">Visitez-nous</p>
                                    <p className="font-turret text-[15.04px] ml-20"  >Rte d'Algérie lotis boustane 3 N° 191 <br /> Zone industrielle - Oujda</p>
                                 </p>
            </div>

           
           
            <div
  className="relative bg-white z-0 bg-no-repeat bg-cover w-full min-h-[495px] py-2 h-fit px-6 -ml-4 mt-6 "
  style={{clipPath:"polygon(20% 0%, 96% 0, 100% 8%, 100% 100%, 80% 100%, 5% 100%, 0 96%, 0 0)"}}
  
>
<p className="flex w-[268.34px] ml-5 p-2">
                <img src="./pics/redline.png" className="h-[20px]" alt="" />
                <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem]">PARLEZ-NOUS</p>
</p>
 

  {/* Form Section */}
  <form className="relative z-10 space-y-4 text-sm font-turret w-full  rounded-s-[2rem] ">
    <input
      type="text"
      placeholder="Nom"
      value={LName}
      onChange={(e) => setLName(e.target.value)}
      className="w-full p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px]  text-black placeholder-black"
    />
    <input
      type="text"
      placeholder="Prénom"
      value={FName}
      onChange={(e) => setFName(e.target.value)}
      className="w-full p-3 border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <input
      type="text"
      placeholder="Téléphone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full text-black p-3 border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <textarea
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full p-3 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input h-40 resize-none"
    />
    <button className="button bg-gradient-to-r from-[#C81717] to-[#700000] text-white px-4 py-2  shadow-md w-full " style={{clipPath:"polygon(20% 0%, 98% 0, 100% 22%, 100% 100%, 80% 100%, 3% 100%, 0 77%, 0 0)"}}>
      Envoyé
    </button>
  </form>
  
</div> 
<p className="text-[14.55px] bg-[#700000] uppercase font-turretBold text-white text-center mt-6"   style={{ backgroundColor: "transparent" }}>© SOFTCACTUS, Tous les droits <br/> sont réservés, 2025</p>
           </div>
          
        </div>

       
        </div>
           
          
        

       
       

 {/*desktop layout */}
 
       

   
   
    <div className="hidden md:block lg:block relative lg:mt-28 lg:-ml-40 lg:w-full md:-mt-[32rem] md:-ml-20 ComponentOfForm" >
        <div style= {{backgroundImage:'linear-gradient(135deg, #151514, #640C0C)',  clipPath: 'polygon(23% 0, 71% 0, 100% 51%, 100% 100%, 80% 100%, 15% 100%, 13% 100%, 13% 15%)',
                 WebkitClipPath: 'polygon(23% 0, 71% 0, 100% 51%, 100% 100%, 80% 100%, 15% 100%, 13% 100%, 13% 15%)'}} className="relative bg-no-repeat w-screen mt-[27rem] z-0 md:w-full  lg:w-screen lg:-mt-[16rem] lg:ml-20 lg:mr-4 " >
        
        <img src="./pics/fortyeightbgdesk.png" alt="" className="relative z-10 mt-[4.5rem] -ml-[0.3rem] lg:w-[1547.84px] lg:h-[541.84px] lg:ml-7 fortyeightD" style={{top:"8rem"}} />
        <div className="relative z-10 -mt-32 ml-[27.3px] lg:ml-48 lg:-mt-[28rem] md:-mt-52 md:ml-40 xl:ml-[17rem] md:pb-16 secondLayout ">
           <div>
             <img src="./pics/whitelinear.png" alt="" className="w-[227.4px]" />
             <p className="text-white text-[24.09px] font-neo mt-2 lg:text-[33.78px] md:text-[20px]  xl:text-[40px] 2xl:text-[46px] joinP">POUR NOUS JOINDRE </p>
             <p className="text-white font-turretBold text-[15.6px] md:text-[11.6px] uppercase lg:text-[21.87px] xl:text-[26px] 2xl:text-[32px] discoverP">Découvrez des solutions abordables <br /> pour votre voiture!</p>
            </div> 
             
            <div className="text-white">
                                 <p className="">
                                  <img src="./pics/phoneicon.png" alt="" className="mt-10 2xl:h-28 2xl:mt-16 "/>
                                  <p className="font-turretBold text-[19.99px] md:text-[15.99px] ml-20 -mt-[4.3rem] lg:text-[20.98px] xl:text-[27.98px] 2xl:text-[34px] 2xl:ml-40 2xl:-mt-32  InfosTittles" style={{top:"5rem"}} >Appeler à tout moment</p>
                                  <p className="ml-20 font-turret text-[16.04px]  md:text-[14px] lg:text-[16.83px] xl:text-[23.98px] 2xl:text-[27px] 2xl:ml-40 infosContent">05 36 716 777</p>
                                  <p className="ml-20 font-turret text-[16.04px]  md:text-[14px] lg:text-[16.83px] xl:text-[23.98px] 2xl:text-[27px] 2xl:ml-40 infosContent" >05 36 716 778</p>
                                 </p>
        
                                 <p className="mt-5">
                                    <img src="./pics/emaillogo.png" alt="" className="2xl:h-28 2xl:mt-16"/>
                                    <p className="font-turretBold text-[19.99px] ml-20 -mt-[3.4rem] lg:text-[20.98px]  md:text-[15.99px] xl:text-[27.98px]  2xl:text-[34px] 2xl:ml-40 InfosTittles 2xl:-mt-28 "  >Envoyer un e-mail</p>
                                    <p  className="font-turret text-[16.04px] ml-20 lg:text-[16.83px]  md:text-[14px] xl:text-[23.98px] 2xl:text-[27px] 2xl:ml-40 infosContent">contact@auto48.ma</p>
                                 </p>
                                 
                                 <p className="mt-8">
                                    <img src="./pics/locationl.png" alt="" className="2xl:h-28 2xl:mt-16" />
                                    <p className="font-turretBold text-[19.99px] ml-20 -mt-[4rem] lg:text-[20.98px]  md:text-[15.99px] xl:text-[27.98px]  2xl:text-[34px] 2xl:ml-40  2xl:-mt-28 InfosTittles">Visitez-nous</p>
                                    <p className="font-turret text-[16.04px] ml-20 lg:text-[16.83px]  md:text-[14px] xl:text-[23.98px]  2xl:text-[27px] 2xl:ml-40 infosContent" >Rte d'Algérie lotis boustane 3 N° 191 <br /> Zone industrielle - Oujda</p>
                                 </p> 
                                 <br /> <br></br>
            </div>
    </div>
         
        </div>

  <div
  className=" formm relative bg-white py-8 px-6 w-96 mx-auto lg:absolute lg:-right-20 lg:top-[33.5rem] md:z-20  md:w-[362.41px] md:-mt-[29.5rem]  md:ml-[31rem] md:h-[442px] lg:h-[476px] lg:w-[380px] xl:mr-4 xl:w-[450px] xl:h-[600px] "
  style={{clipPath:"polygon(20% 0%, 96% 0, 100% 8%, 100% 100%, 80% 100%, 5% 100%, 0 96%, 0 0)"}}
 >
<p className="flex w-[268.34px] md:hidden ml-7 p-2 lg:hidden xl:hidden 2xl:hidden">
                <img src="./pics/redline.png" className="lg:hidden w-[30px] h-[8px]" alt="" />
                
                <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem] lg:text-[20.38px] lg:ml-[3rem] ">PARLEZ-NOUS</p>
</p>
            <p className="parlerNous flex w-[333.34px] ml-7 lg:ml-52 p-2 md:ml-44 md:gap-2 ">
               
                <img src="./pics/fromlf.png" alt="" className=" md:w-[33.15px] md:h-[13.15px] mr-7 md:-ml-44"/>
                <p className="font-neo text-[16.38px] uppercase text-[#C81717] -ml-[12.5rem] lg:text-[20.38px] lg:-ml-[1rem] md:-mt-2 md:-ml-3">PARLEZ-NOUS</p>
                <img src="./pics/fromlr.png" alt="" className=" md:w-[33.15px] md:h-[13.15px] md:ml-3"/>
            </p>
 

  {/* Form Section */}
  <form className="relative z-10 space-y-4 text-sm font-turret w-[313.51px] ml-4 md:ml-1 rounded-s-[2rem] lg:ml-2 xl:w-[400px] xl:ml-1">
    <input
      type="text"
      placeholder="Nom"
      value={LName}
      onChange={(e) => setLName(e.target.value)}
      className="w-full p-3 lg:p-4 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px]  text-black placeholder-black"
    />
    <input
      type="text"
      placeholder="Prénom"
      value={FName}
      onChange={(e) => setFName(e.target.value)}
      className="w-full p-3 lg:p-4  border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <input
      type="text"
      placeholder="Téléphone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full lg:p-4  text-black p-3 border border-[#A2A6B0] outline-none  rounded-tr-[11px] rounded-bl-[11px] custom-input"
    />
    <textarea
      placeholder="Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="w-full p-3 lg:p-4 border border-[#A2A6B0] outline-none rounded-tr-[11px] rounded-bl-[11px] custom-input h-32 resize-none"
    />
    <button className="button bg-gradient-to-r from-[#C81717] to-[#700000] text-white px-4 py-2 shadow-md w-[313.51px] xl:w-[400px] " style={{clipPath:"polygon(20% 0%, 98% 0, 100% 22%, 100% 100%, 80% 100%, 3% 100%, 0 77%, 0 0)"}}>
      Envoyé
    </button>
  </form>
  <div 
  className="reservedRightsP text-[15.55px] uppercase font-turretBold text-white text-center mt-7 cursor-pointer block md:hidden lg:hidden xl:hidden 2xl:hidden"
  onClick={() => window.open('https://softcactus.ma/', '_blank')}
>
  © SOFTCACTUS, Tous les droits sont réservés, 2025
</div>

</div>

        <p className="text-[#585858] md:text-[19.21px] md:mt-[2rem]   md:text-center uppercase md:font-turretBold lg:text-center lg:ml-60 xl:text-[23px] GrayRightsReserved "><a href="https://softcactus.ma/" target="_blank">© SOFTCACTUS, Tous les droits sont réservés, 2025</a></p> <br/>
        </div>

</section>
    )
}