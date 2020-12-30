import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CreateWordButton from '../components/CreateWordButton';
import CreateWordModal from '../components/CreateWordModal';

const WordList: React.FC = () => {
  const [wordList, setWordList] = useState(localStorage.getItem("wordList"));
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WordList</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">WordList</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CreateWordModal isOpen={showModal} setShowModal={setShowModal}/>
        <CreateWordButton setShowModal={setShowModal}/>
      </IonContent>
    </IonPage>
  );
};

export default WordList;
