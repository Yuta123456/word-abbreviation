import React from 'react';
import {
    IonActionSheet,
} from '@ionic/react';
import { share } from 'ionicons/icons';
import { trash } from 'ionicons/icons';
type ActionSheetProp = {
    showActionSheet: boolean,
    setShowActionSheet: (newState: boolean) => void,
    setShowShareButtonsModal: (newState: boolean) => void
    setShowAlert: (newState: boolean) => void
}
const ActionSheet: React.FC<ActionSheetProp> = (props) => {
    return (
        <IonActionSheet
            isOpen={props.showActionSheet}
            onDidDismiss={() => props.setShowActionSheet(false)}
            cssClass='my-custom-class'
            buttons={[{
                text: '削除',
                role: 'destructive',
                icon: trash,
                handler: () => {
                    props.setShowAlert(true);
                }
            }, {
                text: '共有',
                icon: share,
                handler: () => {
                    props.setShowShareButtonsModal(true);
                }
            },{
                text: 'キャンセル',
                role: 'cancel',
                handler: () => {
                }
            }]}
        >
        </IonActionSheet>
    );
}

export default ActionSheet;