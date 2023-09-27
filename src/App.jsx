import Blog from "./components/Blog/Blog";
import Experiences from "./components/Experiences/Experiences";
import Hobbies from "./components/Hobbies/Hobbies";
import Intro from "./components/Intro/Intro";
import ProjectBar from "./components/ProjectBar/ProjectBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Intro />
      <Skills />
      <Blog />
      <Hobbies />
      <Experiences />
      <ProjectBar />
      <Projects />
    </>
  );
};
export default App;
