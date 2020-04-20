import React, { useReducer, createContext } from 'react';

interface IndexProps {

}

export interface UserInfo {
  userId: string;
  userName: string;
  count: number;
}

const initialState: UserInfo = {
  userId: '123456',
  userName: 'lester',
  count: 1
};

const reducer = (state: UserInfo, action: any) => {
  console.log(action)
  return {
    ...state,
    ...action.payload
  }
};

export const Context = createContext({});

const Index: React.FC<IndexProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

   return (
     <>
       <Context.Provider value={{ state, dispatch }}>
         {children}
       </Context.Provider>
     </>
   )
};

export default Index
