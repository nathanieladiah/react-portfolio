import Blog from "./components/Blog/Blog";
import Experiences from "./components/Experiences/Experiences";
import Hobbies from "./components/Hobbies/Hobbies";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <Intro />
      <Skills />
      <Blog />
      <Hobbies />
      <Experiences />
    </>
  );
};
export default App;
