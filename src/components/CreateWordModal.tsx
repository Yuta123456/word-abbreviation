import React, { useState } from 'react';
import { IonButton, IonHeader, IonInput, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import LoadingComponent from './LoadingComponent';
type ModalProps = {
    isOpen: boolean
    setShowModal: (newState: boolean) => void
}
const CreateWordModal: React.FC<ModalProps> = (props) => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState("");
    const [nowLoading, setNowLoading] = useState(false);
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
            //ここ適当にポチポチしたら治ったけどやばい気がする。
            wordList = JSON.parse(localStorage.getItem("wordList") || '{}');
        } else {
            wordList = {}
        }
        wordList[word] = result;
        localStorage.setItem("wordList", JSON.stringify(wordList));
        init();
        props.setShowModal(false);
    }
    return (
        <IonModal isOpen={props.isOpen} onDidDismiss={() => props.setShowModal(false)}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CreateWord</IonTitle>
                    <IonButton
                        onClick={() => props.setShowModal(false)}
                        slot="end"
                    >close
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonInput value={word} placeholder="Enter Input" onIonChange={e => setWord(e.detail.value!)} className="ion-text-center ion-padding" clearInput></IonInput>
            {nowLoading ? <LoadingComponent /> : <div style={{ textAlign: "center" }}>{result}</div>}
            {result ?
                <section style={{ textAlign: "center" }}>
                    <IonButton color="success" onClick={() => saveWord(word, result)}>save</IonButton>
                    <IonButton onClick={() => { init(); props.setShowModal(false) }} color="danger">discord</IonButton>
                    <IonButton onClick={() => init()}>retry</IonButton>
                </section>
                : <IonButton onClick={() => submitWord(word)}>submit</IonButton>
            }
        </IonModal>
    );
};

export default CreateWordModal;
