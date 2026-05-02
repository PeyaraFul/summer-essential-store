import Image from "next/image";
import React from "react";
import peyaraful from "../../../public/peyaraful.jpg";

const ProfilePage = () => {
  return (
    <div>
      <div className="mx-auto w-[60%] p-4 my-4 border border-amber-700 bg-base-100 shadow-sm">
        <div >
          <Image className="mx-auto rounded-full" src={peyaraful} alt="Movie" width={200} height={280} />
          <p className=" text-xl text-center font-semibold my-4">Peyaraful</p>
          <p className="text-center my-4">arakash@hmail.com</p>
        </div>
        <button className="btn btn-primary mx-auto">Update</button>
        
        
      </div>
    </div>
  );
};

export default ProfilePage;
