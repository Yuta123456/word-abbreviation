import {
    IonBackButton, IonButtons, IonContent,
    IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/react';
import React from 'react';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>使い方</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="ion-padding">
                    <h4 className="ion-text-center">このアプリについて</h4>


                    <p>このアプリは言葉を作者風に略す事が出来るアプリです。</p>
                    <ol>
                        <li>右下のボタンをタップ</li>
                        <li>略したい言葉を入力</li>
                        <li>ボタンをタップ</li>
                        <li>出来た略語を保存 or Tweet</li>
                    </ol>
                    <h4 className="ion-text-center">略を上手くするコツ</h4>
                    <p>意味のある単語同士を接続詞で結んでみましょう</p>
                    <p>例 : デッドマンワンダーランド</p>
                    <p>デッドマンとワンダーランド</p>
                </div>
            </IonContent>
        </IonPage>
    );
}
export default About;