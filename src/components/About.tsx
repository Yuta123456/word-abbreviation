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
                    <IonTitle>How To Use</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>How To Use</p>
                <p>このアプリは言葉を作者風に略す事が出来るアプリです。</p>
                <p></p>
            </IonContent>
        </IonPage>
    );
}
export default About;