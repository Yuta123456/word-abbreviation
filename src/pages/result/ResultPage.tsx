import { IonButton, IonContent } from "@ionic/react";
import React from "react";
import { TwitterShareButton } from "react-share";
type ResultPageProps = {
    saveWord: () => void
    init: () => void
    createTweetText: () => string
    result: string
    word: string
}
const ResultPage: React.FC<ResultPageProps> = (props) => {
    return (
        <IonContent className="ion-text-center">
            <svg width="100%" height="70%">
                <rect x="15%" y="20%" rx="20" ry="20"
                    width="70%" height="50%" fill="#3880ff">
                </rect>
                <rect x="17%" y="30%" rx="0" ry="0"
                    width="66%" height="38%" fill="#FFF">
                </rect>
                <text x="50%" y="27%" fill="#FFF" textAnchor="middle" fontSize="20">【結果】</text>
                <text x="50%" y="35%" fill="#000" textAnchor="middle" fontSize="20">{props.word}は</text>
                <text x="50%" y="50%" fill="#000" textAnchor="middle" fontSize="30">{props.result}</text>
                <text x="50%" y="65%" fill="#000" textAnchor="middle" fontSize="20">に生まれ変わった！</text>
            </svg>
            <IonButton color="success" onClick={() => props.saveWord()}>保存する</IonButton>
            <IonButton onClick={() => props.init()}>もう一度</IonButton>
            <IonButton>
                <TwitterShareButton
                    // :TODO URLを変数で取得
                    url={"https://6002c2e372793e0007898f10--blissful-benz-cd10aa.netlify.app/"}
                    title={props.createTweetText()}
                    hashtags={["waApp"]}>
                    <i className="fab fa-twitter" />
                                　Tweetする
                </TwitterShareButton>
            </IonButton>
        </IonContent>
    );
}
export default ResultPage;