import htmlLogo from '../../assets/Skill/1.png'
import csslogo from '../../assets/Skill/2.png'
import javascirptLogo from '../../assets/Skill/3.png'
import bootstrapLogo from '../../assets/Skill/4.png'
import tailwinLogo from '../../assets/Skill/5.png'
import firebaselogo from '../../assets/Skill/6.png'
import react from '../../assets/Skill/7.png'
import nodejs from '../../assets/Skill/8.png'
import npm from '../../assets/Skill/9.png'
import mongodb from '../../assets/Skill/10.png'
import redux from '../../assets/Skill/11.png'

const Skill = () => {
 
  return (
    <div className="mx-[1rem] relative">
      <h1 className="text-2xl  md:text-3xl text-start m-5 text-white">Skills:</h1>

      {/* skills */}
     
    <div className='relative flex justify-center items-center w-full   '>

   <div className='grid grid-cols-3 md:grid-cols-8   gap-5'>
   <img  data-aos="flip-right" data-aos-duration="2000" src={htmlLogo} className='rounded-lg w-[5rem] h-fit  ' alt="" />
    <img  data-aos="flip-right" data-aos-duration="2000" src={csslogo} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img  data-aos="flip-right" data-aos-duration="2000" src={javascirptLogo} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img  data-aos="flip-right" data-aos-duration="2000" src={bootstrapLogo} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img  data-aos="flip-right" data-aos-duration="2000" src={tailwinLogo} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img data-aos="flip-left"   data-aos-duration="2000" src={firebaselogo} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img data-aos="flip-left"   data-aos-duration="2000" src={react} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img data-aos="flip-left"   data-aos-duration="2000" src={nodejs} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img data-aos="flip-left"   data-aos-duration="2000" src={npm} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img data-aos="flip-left"   data-aos-duration="2000" src={mongodb} className='rounded-lg w-[5rem] h-fit' alt="" />
    <img data-aos="flip-right"  data-aos-duration="2000" src={redux} className='rounded-lg w-[5rem] h-fit' alt="" />
   </div>
    </div>
    </div>
  );
};

export default Skill;
