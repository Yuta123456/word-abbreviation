import React from 'react';
import {
    IonButton, IonModal, IonTitle,
} from '@ionic/react';
import { LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

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
        >
            <IonTitle>
                略語をShareする
            </IonTitle>
            <TwitterShareButton
                url={window.location.host}
                title={props.ShareText}
                hashtags={["waApp"]}>
                <TwitterIcon round={true} />
            </TwitterShareButton>
            <LineShareButton
                title={props.ShareText}
                url={window.location.host}>
                <LineIcon round={true} />
            </LineShareButton>
            <IonButton onClick={() => { props.setShowShareButtonsModal(false) }}>
                閉じる
            </IonButton>
        </IonModal>
    );
}
export default ShareButtonsModal;