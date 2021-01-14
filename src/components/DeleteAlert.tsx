import React from 'react';
import { IonAlert } from '@ionic/react';
type AlertProps = { setShowAlert: (newState:boolean) => void
                    showAlert:boolean
                    deleteWord: () => void
                    setDeleteList: (newList:Set<string>) => void
                    setShowFarewellToast :(newState:boolean) => void
}
const DeleteAlert: React.FC<AlertProps> = (props) => {
  return (
    <IonAlert
          isOpen={props.showAlert}
          onDidDismiss={() => props.setShowAlert(false)}
          //cssClass='my-custom-class'
          header={'確認'}
          message={'選択した言葉たちを削除してもよろしいですか？'}
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
                props.setShowFarewellToast(true);
                props.setDeleteList(new Set<string>());
              }
            }
          ]}
        />
  );
};

export default DeleteAlert;
