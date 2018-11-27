import React from "react";
import SettingsIcon from "mdi-react/SettingsIcon";
// import AppleKeyboardCommandIcon from "mdi-react/AppleKeyboardCommandIcon";
import { StarIcon, FlashIcon } from "mdi-react";
import { Route, Switch } from "react-router-dom";
import General from "./modules/General";
// import Commands from "./modules/Commands";
// import Button from "../../components/Button";
import Moderation from "./modules/Moderation";
import SpecialFeatures from "./modules/Special Features";

// const Test = () => (
//   <div>
//     <section>
//       <br />
//       <br />
//       <Button simple onClick={bA => bA.success()}>
//         Button Simple
//       </Button>
//       <br />
//       <br />
//       <Button onClick={bA => bA.success()}>Button Normal</Button>
//       <br />
//       <br />
//       <Button active onClick={bA => bA.success()}>
//         Button Active
//       </Button>
//       <br />
//       <br />
//       <Button onClick={bA => bA.success()}>Button hover </Button>
//       <br />
//       <br />
//       <Button big>Button big</Button>
//       <br />
//       <br />
//       <Button small>Button small</Button>
//       <br />
//       <br />
//       <Button rounded small>
//         Button Small & Rounded
//       </Button>
//       <br />
//       <br />
//       <Button disabled>Button Disabled</Button>
//       <br />
//       <br />
//       <Button loading>Button Loading</Button>
//       <br />
//       <br />
//       <Button error>Button Error</Button>
//       <br />
//       <br />
//       <Button success>Button Success</Button>
//       <br />
//       <br />
//     </section>
//   </div>
// );

export const router = [
  {
    name: "General",
    path: "",
    exact: true,
    icon: SettingsIcon,
    component: General,
  },
  // {
  //   name: "Commands",
  //   path: "commands",
  //   icon: AppleKeyboardCommandIcon,
  //   component: Commands,
  // },
  {
    name: "Special Features",
    path: "features",
    icon: StarIcon,
    component: SpecialFeatures,
  },
  {
    name: "Moderation",
    path: "moderation",
    icon: FlashIcon,
    component: Moderation,
  },
];

export default () => (
  <Switch>
    {router.map(route => (
      <Route
        key={route.path}
        path={`/g/:guildId/${route.path}`}
        component={route.component}
        exact={route.exact}
      />
    ))}
  </Switch>
);
