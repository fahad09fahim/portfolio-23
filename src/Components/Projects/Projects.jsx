import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import firebase from '../../assets/firebase.png'
import mongodb from '../../assets/mongo.png'
import express from '../../assets/express.png'
import daisy from '../../assets/daisy.png'
import oracle from '../../assets/Projects/oracle.png'
import crypto from '../../assets/Projects/crypto.png'
import fashion from '../../assets/Projects/fashion.png'
import skyline from '../../assets/Projects/skyline.png'


const Projects = () => {

    return (
        <div className="py-16"> 
        <h1 className="text-start text-2xl md:text-3xl ms-4 text-white">Projects:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-6 ">
          {/* The oracle */}
       
       <div className="card w-full bg-base-100 shadow-xl " >
  <figure  >
    <img data-aos="flip-down" data-aos-duration="2000"  src={oracle} alt="oracle" /></figure>
  <div className="card-body"  >
    <h2 className="card-title">The Oracle</h2>
    <p>Ai landing page</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={tailwind} alt="" />
      <img src={daisy} alt="" />
    </h3>
    <div className="card-actions justify-center">
     <a href="https://the-oracle-01.netlify.app/" target='_blank' rel="noreferrer">Live site</a>|
     <a href="https://github.com/fahad09fahim/oracle" target='_blank' rel="noreferrer">Github(client)</a>|
    </div>
  </div>
</div>
      
{/* crypto chain*/}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img data-aos="flip-down" data-aos-duration="2000"  src={crypto} alt="crypto" /></figure>
  <div className="card-body" >
    <h2 className="card-title">Crypto Chain</h2>
    <p>NFT Landing page</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={tailwind} alt="" />
      <img src={daisy} alt="" />
    </h3>
    <div className="card-actions justify-center">
      <a href="https://crypto-chain-01.netlify.app/" target='_blank' rel="noreferrer">live Site</a>|
      <a href="https://github.com/fahad09fahim/crypto-chain" target='_blank' rel="noreferrer">Github(client)</a>|
    </div>
  </div>
</div>
{/* Fashion Fusion */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img data-aos="flip-down" data-aos-duration="2000"  src={fashion} alt="fashion" /></figure>
  <div className="card-body" >
    <h2 className="card-title">Fashion Fusion</h2>
    <p>E-commerce Landing page</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={tailwind} alt="" />
     
    </h3>
    <div className="card-actions justify-center">
    <a href="https://fashion-fusion-00.netlify.app/" target='_blank' rel="noreferrer">Live Site</a>|
    <a href="https://github.com/fahad09fahim/FashionFusion" target='_blank' rel="noreferrer">Github</a>
    </div>
  </div>
</div>
{/* Skyline */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img data-aos="flip-down" data-aos-duration="2000"  src={skyline} alt="Shoes" /></figure>
  <div className="card-body" >
    <h2 className="card-title">Skyline</h2>
    <p>Real Estate Landing Page</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={tailwind} alt="" />
    </h3>
    <div className="card-actions justify-center">
    <a href="https://skyline-009.netlify.app/" target='_blank' rel="noreferrer">Live Site</a>|
    <a href="https://github.com/fahad09fahim/skyline" target='_blank' rel="noreferrer">Github</a>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Projects;