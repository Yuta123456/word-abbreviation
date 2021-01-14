import React from 'react';
import { IonToast } from '@ionic/react';
type FarewellToatsProps = { 
    setShowFarewellToast: (newState:boolean) => void
    showFarewellToast:boolean
}
const FarewellToast: React.FC<FarewellToatsProps> = (props) => {
    return (
        <IonToast
        isOpen={props.showFarewellToast}
        onDidDismiss={() => props.setShowFarewellToast(false)}
        message="いままで略してくれてありがとうね…"
        duration={2000}
        />
    );
    
}

export default FarewellToast;