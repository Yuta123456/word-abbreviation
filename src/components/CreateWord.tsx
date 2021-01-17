import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import LoadingComponent from './LoadingComponent';
import { useHistory } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, TwitterShareButton } from "react-share";
import CreateWordComponent from './CreateWordComponent';
import ResultPage from './ResultPage';

const CreateWordModal: React.FC = () => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState("");
    const [nowLoading, setNowLoading] = useState(false);
    const [failed, setFailed] = useState(false);
    let history = useHistory();
    function sleep(msec: number) { return new Promise(resolve => setTimeout(resolve, msec)) };
    const api_url = "https://waapi-y5tash35xa-an.a.run.app/abbreviation"
    function submitWord() {
        const submit_text = word
        setNowLoading(true);
        Axios.post(api_url, {
            post_text: { submit_text },
        })
            .then((response) => {
                console.log(response);
                setResult(response.data.result);
                setNowLoading(false);
            }).catch((ex) => {
                setFailed(true);
            }).then(() => {
                setNowLoading(false);
            })
    }
    function init() {
        setResult("");
        setWord("");
    }
    function saveWord() {
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
    function createTweetText() {
        return "お前らまだ「" + word + "」なんて使ってんのwww\n" + "今の時代は「" + result + "」だろwwww";
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
            {(result === "") ?
                // word, buttonDisabled, init, submitWord
                <CreateWordComponent
                    setWord={setWord}
                    word={word}
                    init={init}
                    submitWord={submitWord}
                    nowLoading={nowLoading} 
                    failed={failed}/>
                :
                // saveWord, init, createTweetText
                <ResultPage
                    saveWord={saveWord}
                    init={init}
                    createTweetText={createTweetText}
                    result={result}
                />
                    
            }
        </IonPage>
    );
};

export default CreateWordModal;
