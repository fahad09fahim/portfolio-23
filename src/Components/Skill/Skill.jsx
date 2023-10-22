import skill from '../../assets/skill.png'
const Skill = () => {
 
  return (
    <div className=" py-12 px-4">
      <h1 className="text-2xl  md:text-3xl text-start m-5">Skills:</h1>

      {/* skills */}
     
    <div className='border rounded-lg shadow-xl mb-3'>
    <img src={skill} className='rounded-lg' alt="" />
    </div>
    </div>
  );
};

export default Skill;
