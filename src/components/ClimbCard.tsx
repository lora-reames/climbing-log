import React from "react";
import "./ClimbCard.css";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
} from "@ionic/react";
import GradeIcon from "./GradeIcon";
import { ClimbData } from "../pages/Climbs";

interface ClimbCardProps {
  climb: ClimbData;
}

const ClimbCard: React.FC<ClimbCardProps> = ({climb: {
  grade,
  name,
  location,
  tags,
  description
}}) => {
  return (
    <IonCard className="card" routerLink="/climb/1">
      <IonCardHeader class="grid">
        <GradeIcon grade={grade} />
        <div className="titleContainer">
          <IonCardTitle class="title">{name}</IonCardTitle>
          <IonCardSubtitle class="subtitle">{location}</IonCardSubtitle>
        </div>
      </IonCardHeader>
      <IonCardContent>
        <p className="description">
          {description || "what if there was a description here?"}
        </p>
        {tags?.map((tag, index) => (
          <IonChip className="tag" key={index}>
            {tag}
          </IonChip>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default ClimbCard;
