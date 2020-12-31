import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const LoadingComponent: React.FC = (props) => {

  return (
    <div style={{ textAlign: "center" }}>
      <div>Loading...</div>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs

      />
    </div>

  );
};

export default LoadingComponent;
