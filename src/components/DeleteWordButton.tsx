import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { trash } from 'ionicons/icons';
type ButtonProps = { setShowAlert: (newState:boolean) => void }
const DeleteWordButton: React.FC<ButtonProps> = (props) => {

  return (
    <IonFab vertical="bottom" horizontal="start" slot="fixed">
      <IonFabButton onClick={() => props.setShowAlert(true)}>
        <IonIcon icon={trash} />
      </IonFabButton>
    </IonFab>
  );
};

export default DeleteWordButton;
