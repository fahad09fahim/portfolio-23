import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import firebase from '../../assets/firebase.png'
import mongodb from '../../assets/mongo.png'
import express from '../../assets/express.png'
import daisy from '../../assets/daisy.png'


const Projects = () => {

    return (
        <div className="py-16"> 
        <h1 className="text-start text-2xl md:text-3xl ms-4 text-white">Projects:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-6 ">
          {/* the reportorial nexus */}
       
       <div className="card w-full bg-base-100 shadow-xl " >
  <figure  >
    <img data-aos="fade-up" data-aos-duration="2000"  src='https://i.imgur.com/iLjArjq.png' alt="Shoes" /></figure>
  <div className="card-body"  >
    <h2 className="card-title">The Reportorial Nexus</h2>
    <p>Summer camp school based web application.</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={express} alt="" />
      <img src={firebase} alt="" />
      <img src={mongodb} alt="" />
      <img src={tailwind} alt="" />
      <img src={daisy} alt="" />
    </h3>
    <div className="card-actions justify-center">
     <a href="https://reportorial-nexus.netlify.app/" target='_blank' rel="noreferrer">Live site</a>|
     <a href="https://github.com/fahad09fahim/reportorial-nexus" target='_blank' rel="noreferrer">Github(client)</a>|
     <a href="https://github.com/fahad09fahim/reportorial-nexus-server-" target='_blank' rel="noreferrer">Github(server)</a>
    </div>
  </div>
</div>
      
{/* leafy universe */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img data-aos="fade-up" data-aos-duration="2000"  src="https://i.imgur.com/19Gdekd.png" alt="Shoes" /></figure>
  <div className="card-body" >
    <h2 className="card-title">Leafy Universe</h2>
    <p>Tree e-commerce web application</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={express} alt="" />
      <img src={firebase} alt="" />
      <img src={mongodb} alt="" />
      <img src={tailwind} alt="" />
      <img src={daisy} alt="" />
    </h3>
    <div className="card-actions justify-center">
      <a href="https://leafy-universe.netlify.app/" target='_blank' rel="noreferrer">live Site</a>|
      <a href="https://github.com/fahad09fahim/leafy-universe-client" target='_blank' rel="noreferrer">Github(client)</a>|
      <a href="https://github.com/fahad09fahim/leafy-universe-server" target='_blank' rel="noreferrer">Github(server)</a>
    </div>
  </div>
</div>
{/* sports flash */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img data-aos="fade-up" data-aos-duration="2000"  src="https://i.imgur.com/nM0LwpM.png" alt="Shoes" /></figure>
  <div className="card-body" >
    <h2 className="card-title">Sports Flash</h2>
    <p>Sports photographer hire base web application</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={firebase} alt="" />
     
    </h3>
    <div className="card-actions justify-center">
    <a href="https://sports-flash.web.app/" target='_blank' rel="noreferrer">Live Site</a>|
    <a href="https://github.com/fahad09fahim/Sports-Flash" target='_blank' rel="noreferrer">Github</a>
    </div>
  </div>
</div>
{/* taste bud */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img data-aos="fade-up" data-aos-duration="2000"  src="https://i.imgur.com/wtPQym1.png" alt="Shoes" /></figure>
  <div className="card-body" >
    <h2 className="card-title">Taste Bud Treasure</h2>
    <p>popular chef info web application</p>
    <h3 className='flex justify-start items-center gap-5 h-5 w-5'>
      <img src={react} alt="" />
      <img src={firebase} alt="" />
    </h3>
    <div className="card-actions justify-center">
    <a href="https://taste-bud-treasure.netlify.app/" target='_blank' rel="noreferrer">Live Site</a>|
    <a href="https://github.com/fahad09fahim/taste-bud-treasure" target='_blank' rel="noreferrer">Github</a>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Projects;