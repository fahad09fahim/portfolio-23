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
    <div className="mx-auto">
      <h1 className="text-2xl  md:text-3xl text-start m-5 text-white">Skills:</h1>

      {/* skills */}
     
    <div className=' mx-8 grid grid-cols-3 md:grid-cols-5 gap-5 p-0 md:p-9 '>
    <img  data-aos="fade-right" data-aos-duration="2000" src={htmlLogo} className='rounded-lg h-full w-full ' alt="" />
    <img  data-aos="fade-right" data-aos-duration="2000" src={csslogo} className='rounded-lg h-full w-full' alt="" />
    <img  data-aos="fade-right" data-aos-duration="2000" src={javascirptLogo} className='rounded-lg h-full w-full' alt="" />
    <img  data-aos="fade-right" data-aos-duration="2000" src={bootstrapLogo} className='rounded-lg h-full w-full' alt="" />
    <img  data-aos="fade-right" data-aos-duration="2000" src={tailwinLogo} className='rounded-lg h-full w-full' alt="" />
    <img data-aos="fade-left"   data-aos-duration="2000" src={firebaselogo} className='rounded-lg h-full w-full' alt="" />
    <img data-aos="fade-left"   data-aos-duration="2000" src={react} className='rounded-lg h-full w-full' alt="" />
    <img data-aos="fade-left"   data-aos-duration="2000" src={nodejs} className='rounded-lg h-full w-full' alt="" />
    <img data-aos="fade-left"   data-aos-duration="2000" src={npm} className='rounded-lg h-full w-full' alt="" />
    <img data-aos="fade-left"   data-aos-duration="2000" src={mongodb} className='rounded-lg h-full w-full' alt="" />
    <img data-aos="fade-right"   data-aos-duration="2000" src={redux} className='rounded-lg h-full w-full' alt="" />
    </div>
    </div>
  );
};

export default Skill;
