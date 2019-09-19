import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import style from "./Avatars.module.css"


export default function Avatars(props) {
    let useStyles = makeStyles({
        avatar: {
            margin: 10,
        },
        bigAvatar: {
            margin: 10,
            width: props.visina ? props.visina : 120,
            height: props.visina ? props.visina : 120,
        },
    });
    let classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">

            <Avatar alt="girl" src={props.image} className={[classes.bigAvatar, style.forHover].join(" ")} />
        </Grid>
    );
}