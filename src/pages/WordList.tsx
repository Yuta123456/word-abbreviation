import React, { useState } from 'react';
import {
  IonButton, IonButtons, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonContent,
  IonHeader, IonIcon,
  IonItem, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter
} from '@ionic/react';
import CreateWordButton from './create/CreateWordButton';
import DeleteWordButton from './delete/DeleteWordButton';
import DeleteAlert from './delete/DeleteAlert';
import FarewellToast from './delete/FarewellToast'
import { helpCircleOutline } from 'ionicons/icons';
import { TwitterShareButton } from 'react-share';
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
  function createTweetText(word: string, result: string) {
    return `お前らまだ「 ${word} 」なんて使ってんのwww\n 今の時代は「 ${result} 」だろwwww`;
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
        <IonList>
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
                <IonCardContent>
                  <IonButton>
                    <TwitterShareButton
                      // :TODO URLを変数で取得
                      //location.hrefで現在のURLを取得
                      url={window.location.host}
                      title={createTweetText(key, wordList[key])}
                      hashtags={["waApp"]}>
                      <i className="fab fa-twitter" />
                                　Tweetする
                </TwitterShareButton>
                  </IonButton>
                </IonCardContent>
              </IonItem>
            );
          }
          )}
        </IonList>
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
