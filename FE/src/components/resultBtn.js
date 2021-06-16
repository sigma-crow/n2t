import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  result: {
    'margin': theme.spacing(3, 0, 2, 25),
    'background': '#AA856A',
    'color': 'white',
    'width': '200px',
    'height': '50px',
    'fontSize': '20px',
    'fontWeight': 'bold',
    '&:hover': {
      backgroundColor: '#8f7667',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
}));

const ResultBtn = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant='contained' className={classes.result}>
        채점하러 가기
      </Button>
    </>
  );
};
export default ResultBtn;
