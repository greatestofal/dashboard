import React from "react";
import Hikmat from "react-image-gallery";
import images from "./gallery/Images";
const App = () => {
  return (
    <>
      <div>
        <h1> App</h1>
      </div>
      <div className="w-full h-screen mx-auto">
        <Hikmat items={images} className="w-[300px]" />
      </div>
    </>
  );
};

export default App;
