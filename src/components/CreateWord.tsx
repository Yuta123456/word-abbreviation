import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import LoadingComponent from './LoadingComponent';
import { useHistory } from 'react-router-dom';
type CreateWordPageProps = {
    history: History
}

const CreateWordModal: React.FC<CreateWordPageProps> = () => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState("");
    const [nowLoading, setNowLoading] = useState(false);
    let history = useHistory();
    function sleep(msec: number) { return new Promise(resolve => setTimeout(resolve, msec)) };
    const api_url = "https://waapi-y5tash35xa-an.a.run.app/abbreviation"
    function submitWord(submit_text: string) {
        setNowLoading(true);
        Axios.post(api_url, {
            post_text: { submit_text },
        })
            .then((response) => {
                setResult(response.data.result);
                sleep(5000);
                setNowLoading(false);
            })
    }
    function init() {
        setResult("");
        setWord("");
    }
    function saveWord(word: string, result: string) {
        interface WList {
            [name: string]: string;
        }
        let wordList: WList;
        if ("wordList" in localStorage) {
            wordList = JSON.parse(localStorage.getItem("wordList") || '{}');
        } else {
            wordList = {}
        }
        wordList[word] = result;
        localStorage.setItem("wordList", JSON.stringify(wordList));
        init();
        history.push("./word-list")
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>略語を作成する</IonTitle>
                    <IonButtons>
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonInput value={word} placeholder="略したい言葉を入力" onIonChange={e => setWord(e.detail.value!)} className="ion-text-center"/>
                {nowLoading ? <LoadingComponent /> : <div style={{ textAlign: "center" }}>{result}</div>}
                {result ?
                    <section style={{ textAlign: "center" }}>
                        <IonButton color="success" onClick={() => saveWord(word, result)}>保存する</IonButton>
                        <IonButton onClick={() => { init(); history.goBack() }} color="danger">保存しない</IonButton>
                        <IonButton onClick={() => init()}>もう一度</IonButton>
                    </section>
                    : <section style={{ textAlign: "center" }}>
                        <IonButton onClick={() => submitWord(word)}>これでOK</IonButton>
                      </section>
                }
            </IonContent>
        </IonPage>
    );
};

export default CreateWordModal;
