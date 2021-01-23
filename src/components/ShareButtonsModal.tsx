import React from 'react';
import {
    IonButton, IonButtons, IonCol,
    IonHeader, IonIcon, IonModal,
    IonRow, IonTitle, IonToolbar,
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
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {props.setShowShareButtonsModal(false)}} aria-label="閉じる">
                            <IonIcon icon={close} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>
                        <h4 className="ion-text-center">略語を共有</h4>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonRow className="ion-text-center ion-padding-bottom">
                <IonCol>
                <TwitterShareButton
                    url={window.location.host}
                    title={props.ShareText}
                    hashtags={["waApp"]} 
                    aria-label="Twitterでシェア">
                    <TwitterIcon round={true} size={40}/>
                </TwitterShareButton><br/>
                Twitter
                </IonCol>
                <IonCol>
                <LineShareButton
                // TODO:上手くいってないので修正
                // TODO:タグを上手く修正
                    title={props.ShareText}
                    url={window.location.host}
                    aria-label="LINEでシェア">
                    <LineIcon round={true} size={40}/>
                </LineShareButton><br/>
                LINE
                </IonCol>
            </IonRow>
        </IonModal>
    );
}
export default ShareButtonsModal;