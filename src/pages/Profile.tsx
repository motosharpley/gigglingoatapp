import {
  IonPage,
  IonContent,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonTextarea,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import {
  imageOutline,
  heartOutline,
  newspaperOutline,
  personCircleOutline,
} from 'ionicons/icons';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './Profile.css';

const CreationsTab: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>My Creations</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Your created memes will appear here.</p>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

const FavoritesTab: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>My Favorites</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Your favorite memes will appear here.</p>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

const ProfileTab: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonCard>
        <IonCardContent>
          <div className="profile-header">
            <IonAvatar className="profile-avatar">
              <img
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
                alt="user avatar"
              />
            </IonAvatar>
            <div className="profile-info">
              <h2>User Name</h2>
              <p>
                User bio goes here. It can be a short description about the
                user.
              </p>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

const FeedTab: React.FC = () => (
  <IonPage>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Create a Post</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonTextarea placeholder="What's on your mind?"></IonTextarea>
          </IonItem>
          <IonButton expand="block" style={{ marginTop: '10px' }}>
            Post
          </IonButton>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>News Feed</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Your news feed will appear here.</p>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

const Profile: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          path="/profile/creations"
          component={CreationsTab}
          exact={true}
        />
        <Route
          path="/profile/favorites"
          component={FavoritesTab}
          exact={true}
        />
        <Route path="/profile/feed" component={FeedTab} exact={true} />
        <Route path="/profile/profile" component={ProfileTab} exact={true} />
        <Route exact path="/profile">
          <Redirect to="/profile/profile" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="profile" href="/profile/profile">
          <IonIcon icon={personCircleOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="creations" href="/profile/creations">
          <IonIcon icon={imageOutline} />
          <IonLabel>Creations</IonLabel>
        </IonTabButton>
        <IonTabButton tab="favorites" href="/profile/favorites">
          <IonIcon icon={heartOutline} />
          <IonLabel>Favorites</IonLabel>
        </IonTabButton>
        <IonTabButton tab="feed" href="/profile/feed">
          <IonIcon icon={newspaperOutline} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Profile;
