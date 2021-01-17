import { IonButton, IonContent } from "@ionic/react";
import React from "react";
import { TwitterShareButton } from "react-share";
type ResultPageProps = {
    saveWord:() => void
    init:() => void
    createTweetText:() => string
    result:string
}
const ResultPage: React.FC<ResultPageProps> = (props) => {
    return (
        <IonContent>
            {props.result}
            <IonButton color="success" onClick={() => props.saveWord()}>保存する</IonButton>
            <IonButton onClick={() => props.init()}>もう一度</IonButton>
            <IonButton>
                <TwitterShareButton
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