import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Modal, Paper, Tab, Tabs, TextField } from '@material-ui/core';
import { login } from './login.action'
import { register } from './registration.action'

const useStyles = makeStyles({
    wrapper: {
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        backgroundImage: 'url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10660726.jpg)',
        backgroundSize: 'cover'
    },
    loginRegistrationContainer: {
        paddingTop: '20vh',
        height: '80vh',
        backgroundColor: 'rgba(255, 255, 255, 0.85)'
    },
    loginRegistrationForm: {
        flexGrow: 1,
        maxWidth: '700px',
        width: '90%',
        margin: '0 auto',
        zIndex: 100
    },
    tab: {
        padding: '4vh 0 2vh 0',
        fontSize: '20px',
        flex: 1,
        backgroundColor: '#ecf4fb',
        color: '#c9cde0',
        maxWidth: '100%',
        '&.Mui-selected': {
            backgroundColor: 'white',
            color: '#3f51b5'
        },
    },
    '@media (max-width: 700px)': {
        tab: {
            fontSize: '16px'
        }
    },
    formContainer: {
        padding: '5vh 2vw'
    },
    textField: {
        width: '80%',
        padding: '1vh 0',
        fontSize: '18px',
        internalAutofillSelected: 'background-color: white !important',
        "&:-webkit-autofill": {
            webkitBoxShadow: "0 0 0 1000px white inset !important",
            webkitTextFillColor: 'white',
            border: '5px solid red'
        }
    },
    button: {
        display: 'block',
        width: '200px',
        margin: '5vh 10% 1vh auto'
    },
    modal: {
        maxWidth: '700px',
        margin: '20vh auto 0 auto',
        backgroundColor: 'whitesmoke',
        borderRadius: '3px',
        padding: '2vh 2vw'
    }
})

export default function Login() {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = React.useState(0);
    const [loginFormState, setLoginFormState] = React.useState({
        email: '',
        password: ''
    })
    const [registrationFormState, setRegistrationFormState] = React.useState({
        email: '',
        password: '',
        retypePassword: ''
    })
    const [modalOptions, setModalOptions] = React.useState({
        open: false,
        text: ''
    });

    const validateEmail = (email) => {
        let regex = /\S+@\S+\.\S+/;

        return regex.test(email)
    }

    const handleChange = (e, newValue) => {
        setCurrentTab(newValue);
    };

    const handleLogin = async (e) => {
        const loginData = await login(loginFormState);

        if (loginData.Code === 0) {
            window.location = '/';
        } else {
            setModalOptions({
                open: true,
                text: 'login failed'
            })
        }
    };

    const handleRegistration = async (e) => {
        const registrationData = await register(registrationFormState);

        if (registrationData.Code === 0) {
            setModalOptions({
                open: true,
                text: 'activation link has been sent to your mail, please check inbox/spam folder'
            })
        } else {
            setModalOptions({
                open: true,
                text: 'registration has failed, please contact support'
            })
        }
    };

    const LoginForm = (
        <div className={classes.formContainer}>
            <TextField
                error={!validateEmail(loginFormState.email) ? true : false}
                className={classes.textField}
                value={loginFormState.email}
                type="email"
                label="Email"
                onChange={(e) => {
                    setLoginFormState({
                        ...loginFormState,
                        email: e.target.value
                    })
                }}
            />
            <TextField
                error={loginFormState.password.length < 8 ? true : false}
                className={classes.textField}
                value={loginFormState.password}
                type="password"
                label="Password"
                onChange={(e) => {
                    setLoginFormState({
                        ...loginFormState,
                        password: e.target.value
                    })
                }}
            />
            <Button className={classes.button} variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </div>
    )

    const RegistrationForm = (
        <div className={classes.formContainer}>
            <TextField
                error={!validateEmail(registrationFormState.email) ? true : false}
                className={classes.textField}
                value={registrationFormState.email}
                type="email"
                label="Email"
                onChange={(e) => {
                    setRegistrationFormState({
                        ...registrationFormState,
                        email: e.target.value
                    })
                }}
            />
            <TextField
                error={registrationFormState.password.length < 8 ? true : false}
                className={classes.textField}
                value={registrationFormState.password}
                type="password"
                label="Password"
                onChange={(e) => {
                    setRegistrationFormState({
                        ...registrationFormState,
                        password: e.target.value
                    })
                }}
            />
            <TextField
                error={registrationFormState.password !== registrationFormState.retypePassword ? true : false}
                className={classes.textField}
                value={registrationFormState.retypePassword}
                type="password"
                label="Retype Password"
                onChange={(e) => {
                    setRegistrationFormState({
                        ...registrationFormState,
                        retypePassword: e.target.value
                    })
                }}
            />
            <Button className={classes.button} variant="contained" color="primary" onClick={handleRegistration}>
                Register
            </Button>
        </div>
    )

    return (
        <div className={classes.wrapper}>
            <Modal
                open={modalOptions.open}
                onClose={() => {
                    setModalOptions({
                        ...modalOptions,
                        open: false
                    })
                }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.modal}>
                    {modalOptions.text}
                </div>
            </Modal>
            <div className={classes.loginRegistrationContainer}>
                <Paper className={classes.loginRegistrationForm}>
                    <Tabs
                        value={currentTab}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab
                            className={classes.tab}
                            label="Login"
                        />
                        <Tab
                            className={classes.tab}
                            label="Registration"
                        />
                    </Tabs>

                    {
                        currentTab ? RegistrationForm : LoginForm
                    }
                </Paper>
            </div>
        </div>
    )
}