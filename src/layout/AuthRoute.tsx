import React from "react";
import { Route, RouteProps, Redirect } from 'react-router-dom';

const Index: React.FC<RouteProps> = (props) => {
  const isLogin = true; // 鉴权

  return isLogin ? <Route {...props} /> : <Redirect to="/login" />

};

export default Index;
