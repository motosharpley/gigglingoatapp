import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonFooter,
  setupIonicReact,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import {
  rocketOutline,
  trophyOutline,
  cashOutline,
  peopleOutline,
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const Home2: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>GigglinGOAT</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Main Content */}
      <IonContent
        fullscreen
        className="ion-padding"
        style={{ backgroundColor: '#1a1a1a', color: '#fff' }}
      >
        {/* Hero Section */}
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <h1
            style={{
              fontSize: '2.5em',
              color: '#00ff00',
              fontFamily: 'Impact, sans-serif',
            }}
          >
            GIGL: The Meme Coin That Pays You to Laugh and Vote!
          </h1>
          <p style={{ fontSize: '1.2em', color: '#ccc' }}>
            Trade, vote, and win in the ultimate meme competition platform.
          </p>
          <img
            src="https://via.placeholder.com/300x200/00ff00/fff?text=GIGL+Mascot"
            alt="GIGL Mascot"
            style={{ margin: '20px 0', borderRadius: '10px' }}
          />
          <IonButton
            color="success"
            href="https://discord.gg/example"
            target="_blank"
          >
            Join the Meme Revolution
          </IonButton>
          <IonButton
            fill="outline"
            color="dark"
            onClick={() => document.getElementById('about')?.scrollIntoView()}
          >
            Learn How It Works
          </IonButton>
        </div>

        {/* About Section */}
        <div id="about" style={{ padding: '20px 0' }}>
          <h2
            style={{ fontSize: '2em', color: '#800080', textAlign: 'center' }}
          >
            What’s GIGL All About?
          </h2>
          <p
            style={{
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            GIGL is more than a meme coin—it’s your ticket to the wildest meme
            battles on Solana. Trade on Raydium, vote for dank memes with GIGL,
            and stake in our farm to earn rewards!
          </p>
          <IonButton
            expand="block"
            color="secondary"
            style={{ marginTop: '20px' }}
          >
            Get Ready to GIGL
          </IonButton>
        </div>

        {/* How It Works Section */}
        <div style={{ padding: '20px 0' }}>
          <h2
            style={{ fontSize: '2em', color: '#ffff00', textAlign: 'center' }}
          >
            How to GIGL Like a Pro
          </h2>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="6">
                <IonCard style={{ backgroundColor: '#333', color: '#fff' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ color: '#fff' }}>
                      <IonIcon icon={rocketOutline} /> Trade GIGL
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Buy GIGL on Raydium’s CPMM pool. liquidity is locked via
                    Burn & Earn—no rug pulls!
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" sizeMd="6">
                <IonCard style={{ backgroundColor: '#333', color: '#fff' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ color: '#fff' }}>
                      <IonIcon icon={trophyOutline} /> Vote for Memes
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Stake GIGL in prize pools to vote. The meme with the most
                    GIGL wins!
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" sizeMd="6">
                <IonCard style={{ backgroundColor: '#333', color: '#fff' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ color: '#fff' }}>
                      <IonIcon icon={cashOutline} /> Win Prizes
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Winning creators get 70% of the pool. The rest keeps the
                    party going.
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" sizeMd="6">
                <IonCard style={{ backgroundColor: '#333', color: '#fff' }}>
                  <IonCardHeader>
                    <IonCardTitle style={{ color: '#fff' }}>
                      <IonIcon icon={peopleOutline} /> Farm Rewards
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Stake GIGL or LP tokens in our farm to earn more GIGL and
                    grow the ecosystem.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* Tokenomics Section */}
        <div style={{ padding: '20px 0' }}>
          <h2
            style={{ fontSize: '2em', color: '#00ff00', textAlign: 'center' }}
          >
            GIGL Tokenomics: No BS, Just Memes
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
            <li>Total Supply: 69,000,000,000 GIGL</li>
            <li>Liquidity Pool: 10% (locked via Burn & Earn)</li>
            <li>Ecosystem Farm: 40% (rewards over 12 months)</li>
            <li>Team Reserve: 20% (vested 24 months)</li>
            <li>Airdrop: 15% | Prize Pool Seed: 10% | Marketing: 5%</li>
          </ul>
          <img
            src="https://via.placeholder.com/300x300/800080/fff?text=Tokenomics+Chart"
            alt="Tokenomics Chart"
            style={{
              display: 'block',
              margin: '20px auto',
              borderRadius: '10px',
            }}
          />
        </div>

        {/* Roadmap Section */}
        <div style={{ padding: '20px 0' }}>
          <h2
            style={{ fontSize: '2em', color: '#ffff00', textAlign: 'center' }}
          >
            GIGL’s Meme-tastic Journey
          </h2>
          <IonGrid>
            <IonRow>
              <IonCol>Q2 2025: Launch GIGL & CPMM</IonCol>
              <IonCol>Q3 2025: Farm Live + Airdrop</IonCol>
              <IonCol>Q4 2025: Meme Voting Beta</IonCol>
              <IonCol>Q1 2026: Full Launch</IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* Community Section */}
        <div
          style={{
            padding: '20px 0',
            backgroundColor: '#800080',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '2em', color: '#fff' }}>
            Join the GIGL Gang!
          </h2>
          <p style={{ color: '#fff' }}>
            150M GIGL airdrop for early users who join, vote, or meme. Follow us
            and get in on the action!
          </p>
          <IonButton
            color="success"
            href="https://discord.gg/example"
            target="_blank"
          >
            Claim Airdrop
          </IonButton>
          <IonButton
            fill="outline"
            color="light"
            href="https://twitter.com/example"
            target="_blank"
          >
            Twitter/X
          </IonButton>
        </div>
      </IonContent>

      {/* Footer */}
      <IonFooter>
        <IonToolbar color="dark">
          <p style={{ textAlign: 'center', fontSize: '0.9em' }}>
            © 2025 GIGL. All memes reserved. |{' '}
            <a href="mailto:contact@giglcoin.com" style={{ color: '#00ff00' }}>
              Contact
            </a>{' '}
            | GIGL is a meme coin for fun. DYOR.
          </p>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home2;
