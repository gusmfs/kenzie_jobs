import { AboutSection } from "../../components/sections/AboutSection";
import { BannerSection } from "../../components/sections/BannerSection";
import { JobsListSection } from "../../components/sections/JobsListSection";

export const HomePage = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <JobsListSection />
    </>
  );
};
