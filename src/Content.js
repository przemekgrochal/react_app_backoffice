import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import appInfo from "./app-info";
import routes from "./routes/app-routes";
import { SideNavOuterToolbar as SideNavBarLayout } from "./layouts";
import { Footer } from "./components";

import ZmiennikKoloru from './components/ZmiennikKoloru/ZmiennikKoloru';

export default function ({ toggleTheme }) {
  return (
    <SideNavBarLayout title={appInfo.title}>
      <ZmiennikKoloru toggleTheme={toggleTheme} />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}
        <Redirect to={"/home"} />
      </Switch>
      <Footer>
        Copyright © 2011-2019 Developer Express Inc.
        <br />
        All trademarks or registered trademarks are property of their respective
        owners.
      </Footer>
    </SideNavBarLayout>
  );
}
