import React from "react";
import { HashRouter, Switch, Route, RouteProps } from 'react-router-dom';
import routes from '@/pages/router';
import Context from "@/store/Index";

export default () => {

  return (
    <HashRouter>
      <Context>
        <Switch>
          {
            routes.map((item: RouteProps, index: number) => (
              <Route key={`route${index}`} exact {...item} />
            ))
          }
        </Switch>
      </Context>
    </HashRouter>
  )
}
