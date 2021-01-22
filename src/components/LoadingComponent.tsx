import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { IonSpinner } from '@ionic/react';
const LoadingComponent: React.FC = (props) => {

  return (
    <div style={{ textAlign: "center" }}>
      <div>Loading...</div>
      <IonSpinner
        name="circles"
        color="primary"
      />
    </div>

  );
};

export default LoadingComponent;
