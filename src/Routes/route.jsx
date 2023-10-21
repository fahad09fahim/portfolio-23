import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Skill from "../Components/Skill/Skill";
import Projects from "../Components/Projects/Projects";
import Blog from "../Components/Blog/Blog";



const router = createBrowserRouter([
 {
    path:'/',
    element:<Main/>,
    children:[{
        path:'/',
        element:<App/>
    },
{
 path:'/skill',
 element:<Skill/>
},
{
    path:'/projects',
    element:<Projects/>
},
{
    path:'/blog',
    element:<Blog/>

}
]

 }
  
]);

export default router;