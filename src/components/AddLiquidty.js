import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
}));

export default function AddLiquidty() {
    const classes = useStyles();
    const [spinner, setSpinner] = useState(true);


    useEffect(() => {
        // setTimeout(() => setSpinner(false), 500)
    }, []);

    return <div item className={classes.root}>

      <h2>AddLiquidty</h2>

    </div>;
}
