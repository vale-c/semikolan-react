import Lottie from 'react-lottie';
import home from '../lottie/home';
import about from '../lottie/about';
import achievements from '../lottie/achievements';
import git from '../lottie/git';
import contact from "../lottie/contact";
import work from "../lottie/work";
import join from "../lottie/join";
import Typed from "react-typed";
import AOS from 'aos';
import React, { useEffect, useState } from "react";


const lotties = {
  home: home,
  about: about,
  achievements: achievements,
  git: git,
  contact: contact,
  work: work,
  join:join
};
function Landing(props) {
  useEffect(() => {
    AOS.init()
  } );
   const clock2 = {
     loop: true,
     autoplay: true,
     animationData: lotties[props.lottiename],
     rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
     },
   };
   const style = {
     width: "100%",
   };
  return (
    <div className="home01">
      <div className="homebox01">
        <span data-aos="fade-right" data-aos-duration={500}>
          {props["p1"]}
        </span>
        
        <span data-aos="fade-right" data-aos-duration={500}>
    {props.IndexPage ? 
<>
    <Typed
                strings={[
                    'Web Developer',
                    'App Developer',
                    'Graphic Designer',
                    'UI/UX Designer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
                
                </>
    :
    <>
         {props.p2}
         </>
}
        </span>

        <span data-aos="fade-right" data-aos-duration={500}>
          {props.p3}
        </span>
        <a
          data-aos="fade-right"
          data-aos-duration={500}
          data-aos-anchor-placement="top-bottom"
          href={props.redirect}
        >
          {props.buttontext}
        </a>
      </div>
      <div
        className="lottie"
        data-aos="fade-up"
        data-aos-duration={500}
        data-aos-anchor-placement="top-bottom"
      >
        {/* <lottie-player src="./lottie/home.json" background="transparent" speed={1} className="lottie-element" loop autoPlay>
    </lottie-player> */}
        <div className="lottie-element">
          <Lottie options={clock2} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
