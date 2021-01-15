import {
    IonBackButton, IonButton, IonButtons, IonContent,
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
                <h4>このアプリについて</h4>
                <p>このアプリは言葉を作者風に略す事が出来るアプリです。</p>
                <ol>
                    <li>右下のボタンをタップ</li>
                    <li>略したい言葉を入力</li>
                    <li>ボタンをタップ</li>
                    {/* TODO:ボタンの表記ゆれ */}
                    <li>出来た略語を保存</li>
                </ol>
                <h4>上手くいかない時は...</h4>
                <p>意味のある単語同士を接続詞で結んでみましょう</p>
                <p>例 : デッドマンワンダーランド</p>
                <p>デッドマンとワンダーランド</p>
            </IonContent>
        </IonPage>
    );
}
export default About;