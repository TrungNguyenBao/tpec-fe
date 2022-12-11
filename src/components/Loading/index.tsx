import React from "react";

const Loading = () => {
  return (
    <div className="loading-cpm min-h-[100vh] flex justify-center items-center">
      <div className="animate-spin h-12 w-12 border-4 rounded-[50%] border-[#8001CB] border-t-4 border-t-[#ffffff]" />
    </div>
  );
};

export default Loading;
