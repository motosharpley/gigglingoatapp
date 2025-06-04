import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonCard,
} from '@ionic/react';
import React from 'react';

const Create: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>GigglinGOAT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'warning'}>
        <IonCard>
          <form style={{ padding: 16 }}>
            <h2>Create Token</h2>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="symbol">Symbol</label>
              <input
                id="symbol"
                name="symbol"
                type="text"
                required
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="mint">Token Mint Address</label>
              <input
                id="mint"
                name="mint"
                type="text"
                required
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows={3}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                name="image"
                type="url"
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="supply">Supply</label>
              <input
                id="supply"
                name="supply"
                type="number"
                min="0"
                required
                style={{ width: '100%' }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: 8,
                background: '#ffcc00',
                border: 'none',
                borderRadius: 4,
              }}
            >
              Create
            </button>
          </form>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Create;
