import React from 'react';
import { IonAlert } from '@ionic/react';
type AlertProps = { setShowAlert: (newState:boolean) => void
                    showAlert:boolean
                    deleteWord: () => void
                    setDeleteList: (newList:Set<string>) => void
}
const DeleteAlert: React.FC<AlertProps> = (props) => {
  return (
    <IonAlert
          isOpen={props.showAlert}
          onDidDismiss={() => props.setShowAlert(false)}
          //cssClass='my-custom-class'
          header={'Confirm'}
          message={'Could I delete word you selected ?'}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              //cssClass: 'secondary',
              handler: () => {
                props.setShowAlert(false);
              }
            },
            {
              text: 'OK',
              handler: () => {
                props.deleteWord();
                props.setDeleteList(new Set<string>());
              }
            }
          ]}
        />
  );
};

export default DeleteAlert;
