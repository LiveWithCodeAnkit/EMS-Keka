import React from "react";
import ListCardBox from "../common-ui/list-card/ListCardBox";
import { announcementData } from "./constant/announcement";

const AnnouncementList = () => {
  return (
    <>
      <ListCardBox heading="Announcement" info={announcementData} />
    </>
  );
};

export default AnnouncementList;
