import { IonPage, IonContent } from "@ionic/react";
import { ClimbData } from "./Climbs";

const ClimbDetail: React.FC<ClimbData> = ({name}: ClimbData) =>  {
  return (
    <IonPage>
      <IonContent fullscreen>
        name: {name}
        </IonContent>
    </IonPage>
  );
}
export default ClimbDetail