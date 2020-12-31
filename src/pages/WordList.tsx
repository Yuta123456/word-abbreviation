import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCheckbox, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CreateWordButton from '../components/CreateWordButton';
import CreateWordModal from '../components/CreateWordModal';

const WordList: React.FC = () => {
  const [wordList, setWordList] = useState(JSON.parse(localStorage.getItem("wordList") || '{}'));
  const [showModal, setShowModal] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const deleteList = new Set<string>();
  useEffect(() => {
    setWordList(JSON.parse(localStorage.getItem("wordList") || '{}'))
  }, [showModal])

  function deleteWord() {
    const newWordList = Object.assign({}, wordList);
    deleteList.forEach((value:string) => {
      delete newWordList[value];
    })
    setWordList(newWordList);
    console.log(newWordList);
    localStorage.setItem("wordList", JSON.stringify(newWordList));
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>WordList</IonTitle>
          <IonButton onClick={()=>deleteWord()}>delete</IonButton>
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
            <IonItem key={key}>
              <IonCheckbox onIonChange={
                () => {
                  if (deleteList.has(key)) {
                    deleteList.delete(key);
                  }else{
                    deleteList.add(key);
                  }
                  console.log(deleteList);
                }
              }></IonCheckbox>
              <div>{key}</div>
              <div>{wordList[key]}</div>
            </IonItem>
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
