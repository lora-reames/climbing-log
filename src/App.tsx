import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonFab,
  IonFabList,
  IonFabButton,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';

setupIonicReact();

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRoute, faMountain, faVideo, faChartLine, faPlus, faTag, faLocationPin, faCamera } from '@fortawesome/free-solid-svg-icons'
import Climbs from './pages/Climbs';
import Media from './pages/Media';
import Stats from './pages/Stats';
import ClimbDetail from './pages/ClimbDetail';
import FabMenu from './components/FabMenu';
import { usePhotoGallery } from './hooks/useMediaGallary';

library.add(
  faRoute,
  faMountain,
  faVideo,
  faChartLine,
  faPlus,
  faTag,
  faCamera,
  faLocationPin,
);

const App: React.FC = () => {
  const {takePhoto, photos} = usePhotoGallery();
  return (
    <IonApp>
      <FabMenu takePhoto={takePhoto}/>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/climbs">
              <Climbs />
            </Route>
            {/* <Route path="/climb/:id">
              <ClimbDetail />
            </Route> */}
            <Route exact path="/media">
              <Media photos={photos} />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route exact path="/">
              <Redirect to="/climbs" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="climbs" href="/climbs">
              <FontAwesomeIcon icon="route" size="2x" />
              <IonLabel>Climbs</IonLabel>
            </IonTabButton>
            <IonTabButton tab="media" href="/media">
              <FontAwesomeIcon icon="video" size="2x" />
              <IonLabel>Media</IonLabel>
            </IonTabButton>
            <IonTabButton tab="stats" href="/stats">
              <FontAwesomeIcon icon="chart-line" size="2x" />
              <IonLabel>Stats</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
