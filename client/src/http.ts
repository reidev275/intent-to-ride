import { default as axios } from "axios";

export type RideType = "Drop" | "No Drop";

export type Pace = "< 12" | "12 - 14" | "15 - 17" | "17-19" | "19+";

export type Area = "Farragut" | "Hardin Valley";

export type Ride = {
  id: number;
  miles: number;
  pace: Pace;
  rideType: RideType;
  user: string;
  location: string;
  description: string;
  area: Area;
  date: Date;
  riders: string[];
};

export const getUpcomingRides = (): Promise<Ride[]> =>
  axios.get("/api/rides").then(x => x.data);
