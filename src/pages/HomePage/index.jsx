import { useContext } from "react";
import { AboutSection } from "../../components/sections/AboutSection";
import { BannerSection } from "../../components/sections/BannerSection";
import { JobsListSection } from "../../components/sections/JobsListSection";
import { DefaultTemplate } from "../DefaultTemplate";
import { JobContext } from "../../providers/jobContext";
import { ApplyJobModal } from "../../components/ApplyJobModal";

export const HomePage = () => {
  const {jobs} = useContext(JobContext)
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
