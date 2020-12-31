import React, { useEffect, useState } from 'react';
import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CreateWordButton from '../components/CreateWordButton';
import CreateWordModal from '../components/CreateWordModal';

const WordList: React.FC = () => {
  const [wordList, setWordList] = useState(JSON.parse(localStorage.getItem("wordList") || '{}'));
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setWordList(JSON.parse(localStorage.getItem("wordList") || '{}'))
  }, [showModal])
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
        {Object.keys(wordList).map((key) => {
          return (
            <IonCard key={key}>
              <div>{key}</div>
              <div>{wordList[key]}</div>
            </IonCard>
          );
        }
        )}
        <CreateWordModal isOpen={showModal} setShowModal={setShowModal} />
        <CreateWordButton setShowModal={setShowModal} />
      </IonContent>
    </IonPage>
  );
};

export default WordList;
