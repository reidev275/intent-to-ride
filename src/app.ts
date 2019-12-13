import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

//import typed config
import { qa, prod } from "./config";

const app = express();
app.set("port", process.env.PORT || 3002);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve("./", "client", "build")));

const env = app.get("env");
const config = env === "production" ? prod : qa;

import * as Api from "./api";

Api.createApi(config, app);

//serve react app
//Must be the last route
app.get("*", (req, res) => {
  res.sendFile(path.resolve("./", "client", "build", "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    env
  );
  console.log("  Press CTRL-C to stop\n");
});
