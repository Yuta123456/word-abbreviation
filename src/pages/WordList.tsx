import React, { useState } from 'react';
import {
  IonButton, IonButtons, IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList, IonListHeader, IonNote, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter
} from '@ionic/react';
import CreateWordButton from './create/CreateWordButton';
import DeleteAlert from './delete/DeleteAlert';
import FarewellToast from './delete/FarewellToast'
import { helpCircleOutline } from 'ionicons/icons';
import ActionSheet from '../components/ActionSheet';
import ShareButtons from '../components/ShareButtonsModal';
const WordList: React.FC = () => {
  const [wordList, setWordList] = useState(JSON.parse(localStorage.getItem("wordList") || '{}'));
  const [showAlert, setShowAlert] = useState(false);
  const [showFarewellToast, setShowFarewellToast] = useState(false);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showShareButtonsModal, setShowShareButtonsModal] = useState(false);
  const [selectItem, setSelectItem] = useState("");
  useIonViewWillEnter(() => {
    setWordList(JSON.parse(localStorage.getItem("wordList") || '{}'));
  }, []);

  function deleteWord() {
    const newWordList = Object.assign({}, wordList);
    delete newWordList[selectItem];
    setWordList(newWordList);
    localStorage.setItem("wordList", JSON.stringify(newWordList));
  }
  function createTweetText(word: string, result: string) {
    return `お前らまだ「 ${word} 」なんて使ってんのwww\n 今の時代は「 ${result} 」だろwwww`;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">
            ことばず！
          </IonTitle>
          <IonButtons slot="end" >
            <IonButton routerLink="./about" aria-label="ヘルプ">
                <IonIcon icon={helpCircleOutline} size="large" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonListHeader>
          <div className="ion-text-center">
            俺が略した言葉たち
          </div>
        </IonListHeader>
        <IonList>
          {Object.keys(wordList).map((key) => {
            return (
              <IonItem key={key} button onClick={() => { setShowActionSheet(true); setSelectItem(key);}} aria-label="詳細">
                <IonLabel className="ion-text-wrap">
                  <IonText color="dark">
                    転生後 : {wordList[key]}
                  </IonText>
                  <br />
                  <IonNote>
                    転生前 : {key}
                  </IonNote>
                </IonLabel>
              </IonItem>
            );
          }
          )}
        </IonList>
        <DeleteAlert showAlert={showAlert}
          setShowAlert={setShowAlert}
          deleteWord={deleteWord}
          setShowFarewellToast={setShowFarewellToast}
        />
        <ShareButtons setShowShareButtonsModal={setShowShareButtonsModal}
                      showShareButtonsModal={showShareButtonsModal}
                      ShareText={createTweetText(selectItem, wordList[selectItem])}/>
        <ActionSheet showActionSheet={showActionSheet}
          setShowActionSheet={setShowActionSheet}
          setShowShareButtonsModal={setShowShareButtonsModal}
          setShowAlert={setShowAlert}
           />
        <CreateWordButton />    
      <FarewellToast setShowFarewellToast={setShowFarewellToast} showFarewellToast={showFarewellToast} />
      </ IonContent>
    </IonPage >
  );
};

export default WordList;
