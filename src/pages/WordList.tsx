import React, { useState } from 'react';
import {
  IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent,
  IonHeader, IonIcon,
  IonItem, IonLabel, IonNote, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter
} from '@ionic/react';
import CreateWordButton from '../components/CreateWordButton';
import DeleteWordButton from '../components/DeleteWordButton';
import DeleteAlert from '../components/DeleteAlert';
import FarewellToast from '../components/FarewellToast'
import { helpCircleOutline } from 'ionicons/icons';
const WordList: React.FC = () => {
  const [wordList, setWordList] = useState(JSON.parse(localStorage.getItem("wordList") || '{}'));
  const [showAlert, setShowAlert] = useState(false);
  const [deleteList, setDeleteList] = useState(new Set<string>());
  const [showFarewellToast, setShowFarewellToast] = useState(false);

  useIonViewWillEnter(() => {
    setWordList(JSON.parse(localStorage.getItem("wordList") || '{}'));
  }, []);

  function deleteWord() {
    console.log("delete word list", deleteList);
    const newWordList = Object.assign({}, wordList);
    deleteList.forEach((value: string) => {
      delete newWordList[value];
    })
    setWordList(newWordList);
    console.log("run delete word")
    localStorage.setItem("wordList", JSON.stringify(newWordList));
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>俺が略した言葉たち</IonTitle>
          <IonButtons slot="end" >
            <IonButton routerLink="./about" >
              <IonButton>
                <IonIcon icon={helpCircleOutline} size="large" />
              </IonButton>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        {Object.keys(wordList).map((key) => {
          return (
            <IonItem key={key}>
              <IonCardHeader>
                <IonCardTitle>
                  最高言葉 : {wordList[key]}
                </IonCardTitle>
                <IonCardSubtitle>
                  ダサ言葉 : {key}
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCheckbox slot="start" onIonChange={
                () => {
                  if (deleteList.has(key)) {
                    const newDeleteList = new Set(deleteList);
                    newDeleteList.delete(key)
                    setDeleteList(newDeleteList);
                  } else {
                    const newDeleteList = new Set(deleteList);
                    newDeleteList.add(key)
                    setDeleteList(newDeleteList);
                  }
                }
              }></IonCheckbox>
            </IonItem>
          );
        }
        )}
        <DeleteAlert showAlert={showAlert}
          setShowAlert={setShowAlert}
          deleteWord={deleteWord}
          setDeleteList={setDeleteList}
          setShowFarewellToast={setShowFarewellToast}
        />
        <CreateWordButton />
        <DeleteWordButton setShowAlert={setShowAlert} disabled={deleteList.size === 0} />
        <FarewellToast setShowFarewellToast={setShowFarewellToast} showFarewellToast={showFarewellToast} />
      </IonContent>
    </IonPage>
  );
};

export default WordList;
