
import LoadingComponent from './LoadingComponent';
import React from 'react';
import { IonButton, IonContent, IonInput } from '@ionic/react';
type CreateWordComponentProps = {
    setWord: (newWord: string) => void
    word: string
    init: () => void
    submitWord: () => void
    nowLoading: boolean
    failed: boolean

}
const CreateWordComponent: React.FC<CreateWordComponentProps> = (props) => {
    return (
        <IonContent>
            <IonInput value={props.word} placeholder="略したい言葉を20文字以下でここに入力"
                onIonChange={e => props.setWord(e.detail.value!)}
                className="ion-text-center"
                maxlength={20}
            />
            {props.nowLoading && <LoadingComponent />}
            {props.failed && <div className="ion-text-center">この言葉は略せない...</div>}
            <section style={{ textAlign: "center" }}>
                <IonButton onClick={() => props.submitWord()}>これでOK</IonButton>
            </section>
        </IonContent>
    );
}
export default CreateWordComponent;