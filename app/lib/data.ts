import { TrackerList } from "./definitions";

export function fetchTrackers() {
  const trackers : TrackerList[] = [
    {
      "id": "83ea5e8e-faa1-40af-b970-fe5797112ea9",
      "name": "Exercise Days",
      "value": 5
    },
    {
      "id": "d8aab06e-b744-44df-b741-46e7928c464f",
      "name": "Winning Streak",
      "value": 3
    }
  ];
  return trackers;
    
}