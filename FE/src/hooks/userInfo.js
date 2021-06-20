import React, {createContext, useState} from 'react';

export const UserInfoContext = createContext();

const UserInfo = ({children}) => {
  const info = {
    name: '',
    email: '',
    userIdx: '',
  };
  const [user, setUser] = useState(info);
  return (
    <UserInfoContext.Provider value={{user, setUser}}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfo;
