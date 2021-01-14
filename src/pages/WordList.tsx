import React, { useEffect, useState } from 'react';
import { IonCheckbox, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CreateWordButton from '../components/CreateWordButton';
import CreateWordModal from '../components/CreateWordModal';
import DeleteWordButton from '../components/DeleteWordButton';
import DeleteAlert from '../components/DeleteAlert';
import FarewellToast from '../components/FarewellToast'
const WordList: React.FC = () => {
  const [wordList, setWordList] = useState(JSON.parse(localStorage.getItem("wordList") || '{}'));
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [deleteList, setDeleteList] = useState(new Set<string>());
  const [showFarewellToast, setShowFarewellToast] = useState(false);
  useEffect(() => {
    setWordList(JSON.parse(localStorage.getItem("wordList") || '{}'))
  }, [showModal])

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
          <IonTitle>略し言葉一覧</IonTitle>
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
              {// TODO: 右寄せ左寄せが効かない。
              } 
              <div className="ion-text-left">{key}</div>
              <div className="ion-text-right">{wordList[key]}</div>
            </IonItem>
          );
        }
        )}
        <DeleteAlert  showAlert={showAlert} 
                      setShowAlert={setShowAlert} 
                      deleteWord={deleteWord} 
                      setDeleteList={setDeleteList} 
                      setShowFarewellToast={setShowFarewellToast}
        />
        <CreateWordModal isOpen={showModal} setShowModal={setShowModal} />
        <CreateWordButton setShowModal={setShowModal} />
        <DeleteWordButton setShowAlert={setShowAlert} disabled={deleteList.size === 0}/>
        <FarewellToast setShowFarewellToast={setShowFarewellToast} showFarewellToast={showFarewellToast}/>
      </IonContent>
    </IonPage>
  );
};

export default WordList;
