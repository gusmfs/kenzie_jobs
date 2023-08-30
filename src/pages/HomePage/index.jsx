import { AboutSection } from "../../components/sections/AboutSection";
import { BannerSection } from "../../components/sections/BannerSection";
import { JobsListSection } from "../../components/sections/JobsListSection";
import { DefaultTemplate } from "../DefaultTemplate";

export const HomePage = () => {
  return (
    <>
    <DefaultTemplate>
      <BannerSection />
      <AboutSection />
      <JobsListSection />
    </DefaultTemplate>
    </>
  );
};
