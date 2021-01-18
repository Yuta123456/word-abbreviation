import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import CreateWordComponent from './CreateWordComponent';
import ResultPage from '../result/ResultPage';

const CreateWordModal: React.FC = () => {
    const [word, setWord] = useState("");
    const [result, setResult] = useState("");
    const [nowLoading, setNowLoading] = useState(false);
    const [failed, setFailed] = useState(false);
    let history = useHistory();
    const api_url = "https://waapi-y5tash35xa-an.a.run.app/abbreviation"
    function submitWord() {
        const submit_text = word
        setNowLoading(true);
        Axios.post(api_url, {
            post_text: { submit_text },
        })
            .then((response) => {
                setFailed(false);
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
        return `お前らまだ「 ${word} 」なんて使ってんのwww\n 今の時代は「 ${result} 」だろwwww`;
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
                <CreateWordComponent
                    setWord={setWord}
                    word={word}
                    init={init}
                    submitWord={submitWord}
                    nowLoading={nowLoading}
                    failed={failed} />
                :
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
