import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "../Button"
import style from "../Modals/SimpleModal.module.css"
import Avatar from "../Avatar/Avatars"



const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Button onClick={handleOpen} txt="Öppna" />
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 200,
                }}
            >
                <Fade in={open}>
                    <div className={style.modal} style={{ textAlign: "center" }}>
                        <div style={{ textAlign: "right" }}>
                            <h2>
                                <a style={{ color: "white" }} href="#" onClick={handleClose}>&times;</a>
                            </h2>
                        </div>
                        <h1 style={{ textTransform: "uppercase" }}>{props.domain}</h1>
                        <div >
                            <a target="_blank" href={props.link}>
                                <Avatar visina={200} style={{ display: "inline-block" }} image={props.image} />
                            </a>
                        </div>
                        <div>
                            <h4 style={{ display: "inline-block", maxWidth: "400px", fontFamily: "Roboto", fontSize: "16px" }}>{props.desc}</h4>
                        </div>
                        {props.isAvatar ?
                            <div>
                                <p>{props.name}  {props.age}</p>
                                <a target="_blank" href={props.link}>
                                    <Button txt="Besök !" />
                                </a>
                            </div>
                            : null}
                        {!props.isAvatar ?
                            <div>
                                <a target="_blank" href={props.link}>
                                    <Button txt="Öppna sidan" />
                                </a>
                                <div className={style.pop}>
                                    <h2>Vi valgte dig</h2>
                                    <a target="_blank" href={props.link}>
                                        <Avatar image={props.girlPhoto} />
                                    </a>
                                    <p>{props.girlName} {props.age}</p>
                                    <a target="_blank" href={props.link}>
                                        <Button txt="Smsa mig" />
                                    </a>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}