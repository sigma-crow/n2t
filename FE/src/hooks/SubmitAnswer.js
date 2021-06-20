import React, {createContext, useState} from 'react';

export const SubmitContext = createContext();

const SubmitAnswer = ({children}) => {
  const [isClick, setClick] = useState(false);
  return (
    <SubmitContext.Provider
      value={{
        isClick,
        setClick,
      }}
    >
      {children}
    </SubmitContext.Provider>
  );
};

export default SubmitAnswer;
