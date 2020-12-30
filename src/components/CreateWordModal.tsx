import React, { useState } from 'react';
import { IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonInput, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import LoadingComponent from './LoadingComponent';
type ModalProps = {
    isOpen: boolean
    setShowModal: (newState: boolean) => void
}
interface dict {
    word: string;
    result: string;
  }
const CreateWordModal: React.FC<ModalProps> = (props) => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState("");
    const [nowLoading, setNowLoading] = useState(false);
    const api_url = "https://waapi-y5tash35xa-an.a.run.app/abbreviation"
    function submitWord(submit_text:string) {
        console.log(word);
        setNowLoading(true);
        Axios.post(api_url,{
            post_text:{submit_text},
        })
        .then((response) => {setResult(response.data.result);
                             setNowLoading(false);
                            })
        //非同期に終わるから、ゲットした後はsaveしなきゃいけない？
        // 結果が返ってきて、そのあと、結果を表示する。
        // 結果を保存するのかしないのかを選択させた後、モーダルを閉じる。

    }
    function saveWord(word:string, result:string){
        let wordList;
        if ( "wordList" in localStorage) {
            wordList = localStorage.getItem("wordList");
        }else{
            wordList = {};
        }

    }

    return (
        <IonModal isOpen={props.isOpen}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CreateWord</IonTitle>
                    <IonButton
                        onClick={() => props.setShowModal(false)}
                        slot="end"
                    >
                        close
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonInput value={word} placeholder="Enter Input" onIonChange={e => setWord(e.detail.value!)} clearInput></IonInput>
            {nowLoading ? <LoadingComponent/> : <div>{result}</div>}
            <IonButton
                onClick={()=>submitWord(word)}>submit
            </IonButton>
        </IonModal>
    );
};

export default CreateWordModal;
