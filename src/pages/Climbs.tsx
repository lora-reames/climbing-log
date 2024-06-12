import { IonContent, IonPage } from "@ionic/react";
import "./Climbs.css";
import ClimbCard from "../components/ClimbCard";

const chatGPTClimbs = [
  {
    grade: "5.11b",
    name: "Dragon's Tail",
    location: "Red River Gorge, KY",
    description:
      "This technical face climb offers a mix of small crimps and delicate footwork, culminating in a thrilling overhang crux near the top. Perfect for climbers looking to test their precision and endurance.",
    tags: ["technical", "face climb", "overhang"],
  },
  {
    grade: "5.9",
    name: "Serpent's Spine",
    location: "Joshua Tree, CA",
    description:
      "Follow the natural line of the ridge with steady, moderate climbing and excellent holds throughout. Ideal for beginners wanting to experience an exposed but manageable route.",
    tags: ["beginner", "ridge", "exposed"],
  },
  {
    grade: "5.12a",
    name: "Eagle's Nest",
    location: "Yosemite Valley, CA",
    description:
      "Begin with a steep, sustained crack that demands strong jamming technique before transitioning to a slabby finish. The route rewards climbers with a breathtaking view from the summit ledge.",
    tags: ["crack", "slab", "view"],
  },
  {
    grade: "5.7",
    name: "Whispering Pines",
    location: "Smith Rock, OR",
    description:
      "A gentle, beginner-friendly climb weaving through pine trees and featuring a mix of slab and low-angle face moves. Great for a relaxing day out or introducing new climbers to the sport.",
    tags: ["beginner", "slab", "low-angle"],
  },
  {
    grade: "5.10d",
    name: "Midnight Thunder",
    location: "Squamish, BC",
    description:
      "A powerful route with dynamic moves and a pumpy roof section that will challenge even seasoned climbers. Best attempted in cooler weather to avoid the midday sun on the black rock face.",
    tags: ["dynamic", "roof", "pumpy"],
  },
];


export interface ClimbData {
  grade: string;
  name: string;
  location: string;
  tags?: string[];
  description?: string;
};

const climbData: ClimbData[] = [
  {
    grade: "5.9",
    name: "Little Feet",
    location: "Climb Tulsa - Tulsa, OK",
  },
  {
    grade: "5.9",
    name: "Big Steppies",
    location: "Climb Tulsa - Tulsa, OK",
  },
  {
    grade: "5.13",
    name: "Your Moms favorite Salsa",
    location: "Climb Tulsa - Tulsa, OK",
	tags: ["crimps", "sidepulls"],
  },
  {
    grade: "V5",
    name: "V-NOTHIN",
    location: "Climb Tulsa - Tulsa, OK",
  },
  {
    grade: "5.15",
    name: "THIS NAME IS TOO FUCKING LONG BECAUSE WE WANTED TO TEST HOW THAT WOULD FIT IN THE CARD",
    location: "Climb Tulsa - Tulsa, OK",
	tags: ["broken", "tags", "everywhere", "why", "so", "many", "oh", "god", "it", "scrolls"]
  },
].concat(chatGPTClimbs);

const Climbs: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {climbData.map(
          (climb, index) => {
            return (
              <ClimbCard
                key={index}
                climb={climb}
              />
            );
          },
        )}
      </IonContent>
    </IonPage>
  );
};

export default Climbs;
