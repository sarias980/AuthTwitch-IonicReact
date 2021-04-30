import React from 'react';
import StreamItem from "../../../models/SteamItem";
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonAvatar,
    IonLabel
} from '@ionic/react';

interface ContainerProps {
    data: StreamItem
}

const GameListItem: React.FC<ContainerProps> = props => {

    if (props.data !== null) {
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>{props.data.stream_type}</IonCardSubtitle>
                    <IonCardTitle>{props.data.game}</IonCardTitle>
                </IonCardHeader>
                <IonItem>
                    <img src={props.data.preview.medium}/>
                </IonItem>
                <IonCardContent>
                </IonCardContent>
            </IonCard>
        );
    } else {
        return (<></>);
    }
};

export default GameListItem;