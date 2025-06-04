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
import React, { useState } from 'react';

const Create: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    symbol: '',
    mint: '',
    description: '',
    image: '',
    supply: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

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
          <form style={{ padding: 16 }} onSubmit={handleSubmit}>
            <h2>Create Token</h2>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                style={{ width: '100%' }}
                value={form.name}
                onChange={handleChange}
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
                value={form.symbol}
                onChange={handleChange}
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
                value={form.mint}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows={3}
                style={{ width: '100%' }}
                value={form.description}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                name="image"
                type="url"
                style={{ width: '100%' }}
                value={form.image}
                onChange={handleChange}
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
                value={form.supply}
                onChange={handleChange}
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
