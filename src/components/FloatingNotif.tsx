import React from "react";
import { Notification } from "iconsax-react";

const FloatingNotif = () => {
  return (
    <div className="w-10 h-10 bg-white rounded-full inline-flex items-center justify-center">
      <Notification size="22" color="#00AA12" variant="Bold" cursor={"pointer"} />
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 absolute top-2.5 right-3" />
    </div>
  );
};

export default FloatingNotif;
