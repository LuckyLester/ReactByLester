import React from "react";
import { HashRouter, Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import routes, { otherRoutes } from '@/pages/router';
import Context from "@/store/Index";
import BaseLayout from './Base';
import AuthRoute from './AuthRoute';

export default () => {

  return (
    <HashRouter>
      <Context>
        <Switch>
          {
            otherRoutes.map((item: RouteProps, index: number) => (
              <Route key={`ot${index}`} exact {...item} />
            ))
          }
          <BaseLayout>
            {
              routes.map((item: RouteProps, index: number) => (
                <AuthRoute key={`route${index}`} exact {...item} />
              ))
            }
          </BaseLayout>
          <Redirect from="/*" to="/index" />
        </Switch>
      </Context>
    </HashRouter>
  )
}
