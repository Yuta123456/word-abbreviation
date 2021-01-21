import React from 'react';
import {
    IonButton, IonButtons, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar,
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
            <div className="ion-text-center">
                <TwitterShareButton
                    url={window.location.host}
                    title={props.ShareText}
                    hashtags={["waApp"]} >
                    <TwitterIcon round={true} />
                </TwitterShareButton>
                <LineShareButton
                    title={props.ShareText}
                    url={window.location.host}>
                    <LineIcon round={true} />
                </LineShareButton>
            </div>
        </IonModal>
    );
}
export default ShareButtonsModal;