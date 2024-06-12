import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow } from "@ionic/react";
import { UserPhoto } from "../hooks/useMediaGallary";


interface MediaProps {
  photos: UserPhoto[];
};

const Media: React.FC<MediaProps> = ({ photos }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {photos.map((photo) => (
              <IonCol size="6" key={photo.filepath}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Media;
