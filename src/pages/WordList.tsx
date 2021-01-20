import React, { useState } from 'react';
import {
  IonButton, IonButtons, IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter
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
    console.log("delete word list", selectItem);
    const newWordList = Object.assign({}, wordList);
    delete newWordList[selectItem];
    setWordList(newWordList);
    console.log("run delete word")
    localStorage.setItem("wordList", JSON.stringify(newWordList));
  }
  function createTweetText(word: string, result: string) {
    return `お前らまだ「 ${word} 」なんて使ってんのwww\n 今の時代は「 ${result} 」だろwwww`;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>俺が略した言葉たち</IonTitle>
          <IonButtons slot="end" >
            <IonButton routerLink="./about">
              <IonButton>
                <IonIcon icon={helpCircleOutline} size="large" />
              </IonButton>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {Object.keys(wordList).map((key) => {
            return (
              //   <IonItem>
              //   <IonLabel className="ion-text-wrap">
              //     <IonText color="primary">
              //       <h3>H3 Primary Title</h3>
              //     </IonText>
              //     <p>Paragraph line 1</p>
              //     <IonText color="secondary">
              //       <p>Paragraph line 2 secondary</p>
              //     </IonText>
              //   </IonLabel>
              // </IonItem>
              // タッチしたら、アクションが出てきて共有か削除か選べるようにしよう
              // Twitterで共有する処理が書けるかどうかは不明
              // <IonItem lines="none">
              //       <IonButton>
              //         <TwitterShareButton
              //           url={window.location.host}
              //           title={createTweetText(key, wordList[key])}
              //           hashtags={["waApp"]}>
              //           <i className="fab fa-twitter" />
              //                 　Tweetする
              //       </TwitterShareButton>
              //       </IonButton>
              //     </IonItem>
              <IonItem key={key} button onClick={() => { setShowActionSheet(true); setSelectItem(key);}}>
                <IonLabel className="ion-text-wrap">
                  <IonText color="dark">
                    最高言葉 : {wordList[key]}
                  </IonText>
                  <br />
                  <IonText>
                    ダサ言葉 : {key}
                  </IonText>
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
