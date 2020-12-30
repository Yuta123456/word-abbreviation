import React, { useState } from 'react';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {add} from 'ionicons/icons';
type ButtonProps = { setShowModal : (newState:boolean)=>void}
const CreateWordButton: React.FC<ButtonProps> = (props) => {

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton onClick={()=>props.setShowModal(true)}>
        <IonIcon icon={add}/>
      </IonFabButton>
    </IonFab>

    
  );
};

export default CreateWordButton;
