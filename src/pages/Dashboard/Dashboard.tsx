import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLoading, IonList, IonItem
} from '@ionic/react';
import '../Home.css';
import {GetStreams} from "../../services/Twitch";
import React, {useEffect, useState} from "react";
import GameListItem from '../../components/Stream/GameListItem/GameListItem';

const Dashboard: React.FC = () => {

    const [streams, setStreams] = useState([]);
    const [error, setError] = useState(false);

    const GetStreamsData = async () => {
        try {
            let streams = await GetStreams();
            let topStreams = await streams.streams;
            return topStreams;
        } catch (error) {
            setError(true);
            //console.log(error);
            return [];
        }
    };

    const renderView = () => {
        return GetStreamsData().then(r => {
                console.log(r);
                setStreams(r);
            }
        ).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        renderView();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Streams</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {
                    streams.length > 0 ?
                        <>
                            <IonList>
                                {
                                    streams.map((item: any) => (
                                        <IonItem key={item._id}>
                                            <GameListItem data={item}/>
                                        </IonItem>
                                    ))
                                }
                            </IonList>
                        </>
                        :
                        <IonLoading
                            cssClass='my-custom-class'
                            isOpen={streams.length <= 0}
                            message={'Please wait...'}
                            duration={1000}
                        />
                }
            </IonContent>
        </IonPage>
    );
};

export default Dashboard;
