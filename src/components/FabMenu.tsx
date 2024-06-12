import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonFab, IonFabButton, IonFabList } from "@ionic/react";

interface FabMenuProps {
  takePhoto: () => Promise<void>
}

const FabMenu: React.FC<FabMenuProps> = (props) => {
	return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
      <IonFabButton>
        <FontAwesomeIcon icon="plus" size="2x" />
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton onClick={props.takePhoto}>
          <FontAwesomeIcon icon="video" />
        </IonFabButton>
        <IonFabButton>
          <FontAwesomeIcon icon="route" />
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}

export default FabMenu