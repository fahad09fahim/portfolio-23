import { FaFacebook,FaLinkedin,FaGithub } from 'react-icons/fa';
import avatar from '../../../assets/fahim.png';
import { TypeAnimation } from 'react-type-animation';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


const AboutMe = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="flex flex-col  md:flex-row mx-5 justify-center items-center min-h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
             
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#25cf7d",
              distance: 180,
              enable: true,
              opacity: 0.5,
              width: 1.2,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'polygon' ,
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> 
    <div className="avatar    p-12 md:p-0">
  <div className="w-full md:w-1/2  border-2 md:border-4 border-double rounded-xl shadow-xl">
    <img src={avatar} />
  </div>
</div>
      <div className='text-white'>
        <h1 className='text-4xl'>Md.Fahad Al Fahim</h1>
        <p className='text-2xl'>
        I,m  
        <span className='ms-2 text-teal-400'>
            <TypeAnimation
      sequence={[
        'Front End Developer', 
        2000, 
    
        'React Developer', 
        3000, 
      
        'MERN STACK Developer', 
        4000,
       
      
      ]}
      wrapper="span"
      speed={25}
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '22px',  display: 'inline-block' }}
    /></span>
        </p>
        <p>
            Cell:+8801705-295104
        </p>
        <p>
         Address: Bogura, Bangladesh
        </p>
        <div className='flex justify-center md:justify-start items-center space-x-6 mt-3 text-3xl'>
            <a  href="https://www.linkedin.com/in/fahadalfahim07/" target='_blank' rel="noreferrer" ><FaLinkedin/> </a>
            <a href="https://www.facebook.com/fahad.fahim09/" target='_blank' rel="noreferrer" ><FaFacebook/> </a>
            <a href="https://github.com/fahad09fahim" target='_blank' rel="noreferrer"><FaGithub/> </a>
           

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
