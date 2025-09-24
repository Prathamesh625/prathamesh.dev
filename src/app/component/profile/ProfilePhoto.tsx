import React from "react";
import profile from "@/assets/user.jpg";

const ProfilePhoto: React.FC = () => {
  return (
    <div className="w-80 max-md:w-52">
      <svg viewBox="0 0 200 200">
        <mask id="mask">
          <path
            fill="white"
            d="M56.5,-69.3C71,-55.2,79,-35.3,82,-15C84.9,5.4,82.9,26,72,38.3C61,50.5,41.1,54.3,23.2,58.6C5.4,62.8,-10.5,67.5,-26.9,65.2C-43.3,63,-60.3,53.8,-70.8,39.1C-81.4,24.5,-85.5,4.3,-82.5,-14.8C-79.4,-33.9,-69.1,-52,-54.1,-66C-39.2,-80,-19.6,-90,0.7,-90.8C21,-91.7,42,-83.4,56.5,-69.3Z"
            transform="translate(100 100)"
          />
        </mask>
        <image
          href={profile.src}
          width="200"
          height="200"
          mask="url(#mask)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

export default ProfilePhoto;
