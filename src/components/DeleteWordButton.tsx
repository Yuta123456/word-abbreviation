import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { trash } from 'ionicons/icons';
type ButtonProps = { 
  setShowAlert: (newState:boolean) => void
  disabled : boolean
}
const DeleteWordButton: React.FC<ButtonProps> = (props) => {

  return (
    <IonFab vertical="bottom" horizontal="start" slot="fixed">
      <IonFabButton onClick={() => props.setShowAlert(true)}
                    disabled={props.disabled}
      >
        <IonIcon icon={trash} />
      </IonFabButton>
    </IonFab>
  );
};

export default DeleteWordButton;
