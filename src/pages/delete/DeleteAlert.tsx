import React from 'react';
import { IonAlert } from '@ionic/react';
type AlertProps = {
  setShowAlert: (newState: boolean) => void
  showAlert: boolean
  deleteWord: () => void
  setShowFarewellToast: (newState: boolean) => void
}
const DeleteAlert: React.FC<AlertProps> = (props) => {
  return (
    <IonAlert
      isOpen={props.showAlert}
      onDidDismiss={() => props.setShowAlert(false)}
      message={'この略語を削除します。よろしいですか？'}
      buttons={[
        {
          text: 'キャンセル',
          role: 'cancel',
          handler: () => {
            props.setShowAlert(false);
          }
        },
        {
          text: '削除',
          handler: () => {
            props.deleteWord();
            props.setShowFarewellToast(true);
          }
        }
      ]}
    />
  );
};

export default DeleteAlert;
