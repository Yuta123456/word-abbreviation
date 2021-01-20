import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

const CreateWordButton: React.FC = () => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton routerLink="./create">
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  );
};

export default CreateWordButton;
