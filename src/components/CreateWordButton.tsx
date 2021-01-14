import React from 'react';
import { IonButton, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useHistory } from 'react-router';


const CreateWordButton: React.FC = () => {
  const history = useHistory();
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton onClick={() => history.push("/create")}>
        <IonIcon icon={add} />
      </IonFabButton>
      
    </IonFab>
  );
};

export default CreateWordButton;
