import React, { useState, useEffect, useContext } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Button, DatePicker, InputNumber } from "antd";
import style from "./style.module.less";
import { Context } from '@/store/Index';

interface IndexProps extends RouteComponentProps {

}

export default (props: IndexProps) => {
  const [list, setList] = useState<number[]>([]);
  const { state, dispatch } = useContext<any>(Context);
  const { userName, count } = state;

  useEffect(() => {
    console.log('hello lester', props);
    setList([0, 1, 2])
  }, []);

  return (
    <div className={style.warp}>
      <DatePicker />
      <div onClick={() => {
        props.history.push('/login')
      }}>跳转</div>
      <Button type="primary" onClick={() => {
        dispatch({
          payload: {
            count: count + 1
          }
        })
      }}>hello { userName } { count }</Button>
      {
        list.map(item => (
          <InputNumber key={item} />
        ))
      }
    </div>
  )
}
