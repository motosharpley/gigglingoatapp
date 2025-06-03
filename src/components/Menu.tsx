import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  heartOutline,
  heartSharp,
  trashOutline,
  trashSharp,
  createOutline,
  createSharp,
  homeOutline,
  homeSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Home2',
    url: '/home2',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Create',
    url: '/folder/create',
    iosIcon: createOutline,
    mdIcon: createSharp,
  },
  {
    title: 'Favorites',
    url: '/folder/favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'Trash',
    url: '/folder/trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>GiGL Says Hi!</IonListHeader>
          <div
            style={{
              marginBottom: '1rem',
              marginTop: '1rem',
            }}
          >
            <appkit-button></appkit-button>
          </div>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
