import { Navbar } from "./component/navigation";
import { AboutPage, IntroPage, ProjectPage, SkillSection } from "@pages/index";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import ContactPage from "./pages/ContactPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroPage />
      <AboutPage />
      <SkillSection />
      <Experience />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}
