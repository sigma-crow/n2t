import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0, 3),
    },
  },
}));

const FolderBtn = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button size='small' variant='contained' disableElevation>
        add folder
      </Button>
    </div>
  );
};

export default FolderBtn;
