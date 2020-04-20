import React, { useEffect, useContext } from "react";
import { Context } from '@/store/Index';

export default () => {
  const { state } = useContext<any>(Context);
  const { userName, count } = state;

  useEffect(() => {

  }, []);

  return (
    <div >
      登录
      {userName + count}
    </div>
  )
}
