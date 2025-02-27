import About from "./(components)/about";
import Experience from "./(components)/experience";
import GetInTouch from "./(components)/get-in-touch";
import Hero from "./(components)/hero";
import Projects from "./(components)/project";
import Skill from "./(components)/skill";

async function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <GetInTouch />
    </main>
  );
}

export default Page;
