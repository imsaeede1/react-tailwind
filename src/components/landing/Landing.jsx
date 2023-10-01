import Header from "./header/Header";
import Profile from "./profile/Profile";
import Project from "./project/Project";
import Resume from "./resume/Resume";
import Skills from "./skills/Skills";

const Landing = () => {
  return (
    <div className="grid grid-cols-4 gap-3 grid-rows-10 bg-slate-300">
      <Header />
      <Profile />
      <Project />
      <Project />
      <Skills />
      <Resume />
      <Resume />
    </div>
  );
};

export default Landing;
