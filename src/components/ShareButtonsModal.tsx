import React from 'react';
import {
    IonButton, IonButtons, IonCol, IonHeader, IonIcon, IonModal, IonRow, IonTitle, IonToolbar,
} from '@ionic/react';
import { LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import './half-modal.scss'
import { close } from 'ionicons/icons';
type ShareButtonsModalProp = {
    showShareButtonsModal: boolean
    setShowShareButtonsModal: (newState: boolean) => void
    ShareText: string
}
const ShareButtonsModal: React.FC<ShareButtonsModalProp> = (props) => {
    return (
        <IonModal
            isOpen={props.showShareButtonsModal}
            onDidDismiss={() => props.setShowShareButtonsModal(false)}
            cssClass="half-modal"
        >
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {props.setShowShareButtonsModal(false)}}>
                            <IonIcon icon={close} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>
                        略語をShareする
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonRow className="ion-text-center">
                <IonCol>
                <TwitterShareButton
                    url={window.location.host}
                    title={props.ShareText}
                    hashtags={["waApp"]} >
                    <TwitterIcon round={true} />
                </TwitterShareButton><br/>
                Twitterでシェアする
                </IonCol>
                <IonCol>
                <LineShareButton
                    title={props.ShareText}
                    url={window.location.host}>
                    <LineIcon round={true} />
                </LineShareButton><br/>
                LINEでシェアする
                </IonCol>
            </IonRow>
        </IonModal>
    );
}
export default ShareButtonsModal;