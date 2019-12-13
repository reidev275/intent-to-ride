import * as React from "react";
import "./App.css";
import { getUpcomingRides, Ride } from "./http";
import { Rides } from "./Ride";

const RideForm: React.FC = () => <form />;

const NoRides: React.FC = () => (
  <div>
    <h1>Oh no! There are no upcoming rides scheduled.</h1>
    <RideForm />
  </div>
);

const App: React.FC = () => {
  const [rides, setRides] = React.useState<Ride[]>([]);
  React.useEffect(() => {
    getUpcomingRides().then(x => setRides(x));
  }, []);

  return (
    <div className="App">
      <div className="Nav">
        <h1>Intent to Ride</h1>
        <p>
          Riding is safer and more fun in a group. By posting your intent to
          ride you can let others know when and where you plan to ride.
        </p>
        <p>
          Brought to you by{" "}
          <a href="resultstack.com" target="blank">
            ResultStack
          </a>
          . A local Knoxville software consulting company impacting millions of
          consumers daily with their work.
        </p>
      </div>
      {rides.length > 0 ? <Rides rides={rides} /> : <NoRides />}
    </div>
  );
};

export default App;
