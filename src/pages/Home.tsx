import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import giglRocket from '../assets/gigl-rocket.webp';
import meetGiGL from '../assets/meet-gigl.webp';
import giglVault from '../assets/gigl-vault.webp';
import giglCheese from '../assets/gigl-cheese.webp';
import { logoX, logoYoutube, sendSharp, warning } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Gigglin Goat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'warning'}>
        <section id="hero">
          <h1>Join the Gigglin Goat Revolution!</h1>
          <p>
            Create the next greatest meme or get some GiGL and vote for your
            favorites.
          </p>
          <br />
          <IonImg src={giglRocket} alt="GIGL the GigglinGOAT" />
          <div className="cta-buttons">
            <IonButton color="success">Get Your GiGL On!</IonButton>
          </div>
        </section>

        <section id="about">
          <IonCard>
            <h2>What is GigglinGOAT?</h2>
            <p>
              Only the best thing since sliced cheese! I know, I know now your
              wondering who cut the cheese right! Gigglin Goat is the best damn
              MEME marketplace ever! Create your next great meme coin, Compete
              for the glory with the Funniest Meme NFT or cast your vote for the
              funniest thing you have ever seen all with GIGL the official MEME
              utility token of the GigglinGOAT. Is it a MEME coin is it a
              utility coin??? Meh.. We like to think of it as a MEME coin with
              purpose!
            </p>
            <h3>Meet GIGL the GigglinGOAT</h3>
            <IonImg src={meetGiGL} alt="GIGL the GigglinGOAT" />
            <p>
              GigglinGoat.com the ultimate meme launchpad, competition,
              community.
            </p>
            <p>Join the Fun, Get Your GIGL Now!</p>
            <div className="cta-buttons">
              <IonButton color={warning}>Buy GiGL Coins</IonButton>
            </div>
          </IonCard>
        </section>

        <section id="tokenomics">
          <h2>GiGL Coin Tokenomics</h2>
          <IonImg src={giglVault} alt="GIGL the GigglinGOAT" />
          <p>
            <strong>Token Address: </strong>
            GiGLvF28sq9odDx1iMw9YRDi1KGBaW3mAEUUrgFPtGWh
          </p>
          <p>
            <strong>Total Supply: </strong>69,000,000,000
          </p>
          <ul>
            <li>Airdrop Reserve 1%</li>
            <li>Project Funding 33%</li>
            <li>Liquidity Pools 66%</li>
          </ul>
          <p>LP Tokens Burned @ txID: </p>
          <p>
            <strong>GiGL </strong>is the symbol of the coin, Laughter is it's
            universal currency.
          </p>
          <div className="countdown-timer">
            <p>
              GiGL Coin Trading Launches in : <strong>33 </strong>Days
            </p>
          </div>
        </section>
        <IonCard>
          <section id="meme-contest">
            <h2>Meme Contest</h2>
            <p>
              Post your best material or vote for your favorite meme. who will
              get the most gigl’s and claim The illustrious Meme GOAT Title and
              Prizes
            </p>
            <IonImg src={giglCheese} alt="GIGL the GigglinGOAT" />
          </section>
        </IonCard>
        <section id="roadmap">
          <h2>Project Roadmap</h2>
          <div>
            <h2>Phase 1 - Pre-Launch</h2>
            <ul>
              <li>GIGL Token created on Solana</li>
              <li>
                Token OTC widget on landing page (OTC tokens sold from Project
                funding pool)
              </li>
              <li>Twitter Promotion Begins</li>
              <li>Telegram Group Opens</li>
              <li>Airdrop campaigns begin?</li>
            </ul>

            <h2>Phase 2 - Token Exchange Launch</h2>
            <ul>
              <li>Liquidity Pool created</li>
              <li>LP tokens Burned</li>
              <li>Trading Begins</li>
              <li>Project Funding Escrow accounts</li>
            </ul>

            <h2>Phase 3 - Platform Launch</h2>
            <ul>
              <li>Token Creator Live</li>
              <li>NFT Creator Live</li>
              <li>First Meme Contest</li>
              <li>Contest Promotion Airdrop</li>
              <li>Marketplace opens</li>
            </ul>
          </div>
        </section>
        <IonCard>
          <section id="team">
            <h2>Meet the Team</h2>
            <p>Brief bios and photos of the Giggling Goat team members.</p>
          </section>
        </IonCard>

        <section id="blog">
          <h2>Latest News</h2>
          <p>Links to recent blog posts and updates about Giggling Goat.</p>
        </section>

        <IonFooter>
          <IonToolbar>
            <p>&copy; 2024 Giggling Goat. All rights reserved.</p>
            <div className="social-icons">
              <a href="#">
                <IonIcon ios={logoX} md={logoX} />
              </a>
              <a href="#">
                <IonIcon ios={logoYoutube} md={logoYoutube} />
              </a>
              <a href="#">
                <IonIcon ios={sendSharp} md={sendSharp} />
              </a>
            </div>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
