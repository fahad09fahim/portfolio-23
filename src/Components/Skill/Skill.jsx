import { SkillBars } from "react-skills";
import './Skill.css'
const Skill = () => {
  const skillsData = [
    {
      name: "HTML5",
      level: 100,
      color: "#e34c26",
    },
    {
      name: "CSS3",
      level: 85,
      color: "#264de4",
    },
    {
      name: "javascript",
      level: 89,
      color: "#ff9900",
    },
    { name: "Tailwind", level: 98, color: "#3e9abd" },
    { name: "Bootstrap", level: 97, color: "#563d7c" },
    { name: "Figma", level: 97, color: "#ffad33" },
  ];
  const skillsData2 = [
    {
      name: "React js",
      level: 100,
      color: "#61DBFB",
    },
    {
      name: "Node js",
      level: 80,
      color: "#68a063",
    },
    {
      name: "Express js",
      level: 80,
      color: "#303030",
      
    },
    {
      name: "MongoDb",
      level: 85,
      color: "#4DB33D",
    },
    {
      name: "Typescript",
      level: 75,
      color: "rgb(0,122,204)",
    },
    {
      name: "Next js",
      level: 60,
      color: "black",
    },
  ];
  return (
    <div className="pt-4 my-4">
      <h1 className="text-3xl text-start ms-5">Skills:</h1>

      {/* skills progress */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-2">
        <div
          className="w-full m-7 p-4 rounded-xl shadow-xl bg-card "
         
        >
          <SkillBars skills={skillsData} />
        </div>
        <div className="w-full m-7  p-4 rounded-xl shadow-xl bg-card">
          <SkillBars skills={skillsData2} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
