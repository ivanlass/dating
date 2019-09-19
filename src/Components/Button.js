import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function Buttons(props) {
    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" size="small" color="secondary" className={classes.button} onClick={props.onClick}>
                {props.txt}
            </Button>
        </div>
    );
}