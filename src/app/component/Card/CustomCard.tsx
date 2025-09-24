import React from "react";

function CustomCard() {
  return (
    <div className="min-h-32 border-neutral-800 justify-center border-l-4 border-l-neutral-600">
      <div className="relative mt-16">
        <div className="flex w-5 justify-start h-5 -left-3 absolute top-1 rounded-full bg-neutral-600 backdrop-blur-sm"></div>
        <div className="px-10">
          <div className="text-start text-lg">Title</div>
          <div className="text-wrap max-w-lg text-sm text-start">
            Led large-scale product classification with high accuracy and system
            reliability. Built a scalable platform handling 2,000+ TPS.
            Delivered projects with cross-functional teams, ensuring regulatory
            compliance. Managed resources and timelines effectively,
            consistently meeting deadlines. Strengthened team skills through
            code reviews and mentoring junior engineers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
