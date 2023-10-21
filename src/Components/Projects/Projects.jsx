import react from '../../assets/react.png'
import tailwind from '../../assets/tailwind.png'
import firebase from '../../assets/firebase.png'
import mongodb from '../../assets/mongo.png'
import express from '../../assets/express.png'
import daisy from '../../assets/daisy.png'

const Projects = () => {
    return (
        <div className="my-6"> 
        <h1 className="text-start text-3xl ms-4">Projects:</h1>
        <div className="grid grid-cols-2 gap-3 m-6">
          {/* the reportorial nexus */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src='https://i.imgur.com/iLjArjq.png' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">The Reportorial Nexus</h2>
    <p>Summer camp school based website.</p>
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
     <a href="">GitHub(client)</a>|
     <a href="">Github(server)</a>
    </div>
  </div>
</div>
{/* leafy universe */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
{/* sports flash */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
{/* taste bud */}
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Projects;