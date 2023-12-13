import { useToastMessages } from "@common-hooks/useToastMessages";

interface AboutInfo {
  aboutInfo: string;
}
interface AboutJob {
  aboutJob: string;
}

interface AboutHobby {
  aboutHobby: string;
}

export const useAbout = () => {
  const { Success } = useToastMessages();

  const handleAboutInfo = (values: AboutInfo) => {
    console.log(" handleAboutInfo function:=", values);
    Success("About Deatils", "Info Update..");
  };

  const handleAboutJob = (values: AboutJob) => {
    console.log(" handleAboutJob function:=", values);
    Success("About Deatils", "Info Update..");
  };

  const handleAboutHobby = (values: AboutHobby) => {
    console.log(" handleAboutHobby function:=", values);
    Success("About Deatils", "Info Update..");
  };

  return {
    handleAboutInfo,
    handleAboutJob,
    handleAboutHobby,
  };
};
