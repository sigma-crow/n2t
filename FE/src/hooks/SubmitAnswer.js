import React, {createContext, useState} from 'react';

export const SubmitContext = createContext();

const SubmitAnswer = ({children}) => {
  const [answer, setAnswer] = useState([]);
  const [isClick, setClick] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  return (
    <SubmitContext.Provider
      value={{
        answer,
        isClick,
        correctAnswer,
        setAnswer,
        setClick,
        setCorrectAnswer,
      }}
    >
      {children}
    </SubmitContext.Provider>
  );
};

export default SubmitAnswer;
