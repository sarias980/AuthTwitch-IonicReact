import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonList, IonItem
} from '@ionic/react';
import '../Home.css';
import {GetStreams} from "../../services/Twitch";
import React from "react";

const Dashboard: React.FC = () => {

    const state = {
        streams: [],
        error: false
    };

    const GetStreamsData = async () => {
        try {
            let streams = await GetStreams();
            let topStreams = await streams.streams;
            return topStreams;
        } catch (error) {
            state.error = true;
            console.log(error);
            return [];
        }
    };

    const renderView = () => {
        return GetStreamsData().then(r => {
                console.log(r);
                state.streams = r;
            }
        ).catch( e => {
            state.streams = [];
        });
    }

    renderView();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Dashboard</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={state.streams.length <= 0}
                    message={'Please wait...'}
                    duration={1000}
                />
                {
                    state.streams.length > 0 && <>
                        <IonList>
                            {state.streams.map((item: any) => (
                                <IonItem key={item._id}>{item.game}</IonItem>
                            ))}
                        </IonList>
                    </>
                }
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
