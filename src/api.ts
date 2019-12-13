import { Config } from "./config";
import * as R from "./ride";
import * as express from "express";
import * as moment from "moment";

let rides: R.Ride[] = [
  {
    id: 0,
    area: "Farragut",
    location: "Anchor Park",
    miles: 25,
    pace: "17-19",
    rideType: "No Drop",
    user: "Reid Evans",
    description: "Casual 25 mile loop with some gentle hills.",
    riders: ["Marty Cash"],
    date: moment()
      .add(1, "days")
      .hours(10)
      .toDate()
  },
  {
    id: 1,
    area: "Farragut",
    location: "West Bikes",
    miles: 32,
    pace: "19+",
    rideType: "Drop",
    user: "Evan Schlank",
    description:
      "Thursday Shop Ride - Race Pace and Race Training!  Come prepared to ride hard, learn advanced group riding and racing skills and strategy.",
    riders: ["Fares Schlank", "Jim Pearce"],
    date: moment()
      .add(1, "days")
      .hours(11)
      .toDate()
  }
];

export const createApi = (config: Config, app: express.Application) => {
  app.get("/api/rides", (req, res) => res.json(rides));
  app.get("/api/rides/:id", (req, res) => {
    const ride = rides.filter(x => x.id === +req.params.id);
    if (ride.length === 1) {
      res.json(ride[0]);
    } else {
      res.sendStatus(404);
    }
  });
  app.post("/api/rides", (req, res) => {
    const ride: R.Ride = { id: rides.length, ...req.body };
    rides = [ride, ...rides];
    return ride;
  });
};
