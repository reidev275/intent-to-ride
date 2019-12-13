import * as React from "react";
import { Ride as T } from "./http";
import "./Ride.css";
import moment from "moment";

type IconProps = { icon: string; text: string };

const Icon = (props: IconProps) => (
  <div className="icon">
    <i className={"fas " + props.icon} />
    <span>{props.text}</span>
  </div>
);

const Ride = (ride: T) => (
  <div className="ride">
    <article>
      <div>
        <div className="date">
          {moment(ride.date).format("D")}
          <div className="month">{moment(ride.date).format("MMM")}</div>
        </div>
        <div className="time">{moment(ride.date).format("hh:mm a")}</div>
      </div>
      <div className="text">
        <h3>{ride.user}</h3>
        <p className="riders">{ride.location}</p>
        <p>{ride.description}</p>
        <p className="riders">{ride.riders.reduce((p, c) => `${p}, ${c}`)}</p>
      </div>
      <div>
        <button>I'm in!</button>
      </div>
    </article>
    <footer>
      <Icon icon="fa-bullseye" text={ride.area} />
      <Icon icon="fa-road" text={`${ride.miles} miles`} />
      <Icon icon="fa-tachometer-alt" text={`${ride.pace} mph`} />
      <Icon icon="fas fa-hands-helping" text={ride.rideType} />
      <Icon icon="fa-users" text={`${ride.riders.length + 1}`} />
    </footer>
  </div>
);

type RidesProps = {
  rides: T[];
};

export const Rides = (props: RidesProps) => (
  <div className="rides">
    {props.rides.map((x, i) => (
      <Ride {...x} key={i} />
    ))}
  </div>
);
