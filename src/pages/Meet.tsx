import React from 'react';
import { IonItemOption, IonAvatar, IonMenuButton, IonPage, IonContent, IonList, IonItem, IonLabel, IonHeader, IonToolbar, IonButtons, IonTitle, IonItemSliding, IonItemOptions, IonIcon} from '@ionic/react';
import {ban, createSharp, trashSharp} from "ionicons/icons";
import { useRef } from "react";

export const FRIENDS_DATA = [
  {id: 'f1', name: 'John Thor', avatar:'https://initiate.alphacoders.com/images/206/cropped-512-512-20658.jpg?6644'},
  {id: 'f2', name: 'John Ness', avatar:'https://initiate.alphacoders.com/images/572/cropped-512-512-5726.jpg?1530'},
  {id: 'f3', name: 'John Doe', avatar:'https://initiate.alphacoders.com/images/116/cropped-512-512-116827.jpg?8343'}
];

const Meet: React.FC = () => {
  const SlidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const callFriendHandler = () => {
    console.log("Calling . . .");
  }
  const blockFriendHandler = () => {
    SlidingOptionsRef.current?.closeOpened();
    console.log("Blocking . . .");
  }

  const deleteFriendHandler = () => {
    SlidingOptionsRef.current?.closeOpened();
    console.log("Deleting . . .");
  };

  const editFriendHandler = () => {
    SlidingOptionsRef.current?.closeOpened();
    console.log("Editing . . .");
  };

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Meet</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent  className="ion-padding">
      <IonList>
        {FRIENDS_DATA.map(friend => (
          <IonItemSliding key={friend.id} ref={SlidingOptionsRef}>
            <IonItemOptions side="start">
              <IonItemOption color="danger" onClick={blockFriendHandler}>
                <IonIcon slot="icon-only" icon={ban} />
              </IonItemOption>
              <IonItemOption color="warning" onClick={deleteFriendHandler}>
                <IonIcon slot="icon-only" icon={trashSharp} />
              </IonItemOption>
            </IonItemOptions>
            <IonItemOptions side="end">
              <IonItemOption color="warning" onClick={editFriendHandler}>
                <IonIcon slot="icon-only" icon={createSharp} />
              </IonItemOption>
            </IonItemOptions>
              <IonItem key={friend.id} lines="full" button onClick={callFriendHandler}>
                <IonAvatar slot="start">
                  <img src={friend.avatar} />
                </IonAvatar>
                <IonLabel>{friend.name}</IonLabel>
              </IonItem>
          </IonItemSliding>
        ))}
      </IonList>
    </IonContent>
  </IonPage>);
};

export default Meet;
