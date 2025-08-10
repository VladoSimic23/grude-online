import React from "react";
import { isMobileDevice } from "../libs/UserAgent/UserAgent";
import DesktopForm from "./DesktopForm";
import MobileForm from "./MobileForm";

const Contact = async () => {
  const isMobile = await isMobileDevice();

  return <div>{isMobile ? <MobileForm /> : <DesktopForm />}</div>;
};

export default Contact;
