import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, Grow, Input, InputLabel, Slide, Typography} from 'material-ui';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import _ from 'lodash';

const styles = theme => ({
    root : {
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover'
    },
    intro: {
        color: '#ffffff'
    },
    card : {
        width   : '100%',
        maxWidth: 400
    }
});

class Register2Page extends Component {
    state = {
        name                 : '',
        email                : '',
        password             : '',
        passwordConfirm      : '',
        acceptTermsConditions: false
    };

    handleChange = (event) => {
        this.setState(_.set({...this.state}, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    canBeSubmitted()
    {
        const {email, password, passwordConfirm, acceptTermsConditions} = this.state;
        return (
            email.length > 0 &&
            password.length > 0 &&
            password.length > 3 &&
            password === passwordConfirm &&
            acceptTermsConditions
        );
    }

    render()
    {
        const {classes} = this.props;
        const {name, email, password, passwordConfirm, acceptTermsConditions} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0")}>

                <div
                    className={classNames(classes.intro, "flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")}>

                    <Grow in={true}>
                        <div className="w-128 mb-32">
                            <img src="assets/images/logos/fuse.svg" alt="logo"/>
                        </div>
                    </Grow>

                    <Grow in={true} timeout={300}>
                        <Typography variant="display2" color="inherit" className="font-light">
                            Welcome to the FUSE!
                        </Typography>
                    </Grow>

                    <Grow in={true} timeout={600}>
                        <Typography variant="subheading" color="inherit" className="max-w-512 mt-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit
                            facilisis facilisis.
                        </Typography>
                    </Grow>
                </div>

                <Slide in={true} direction="left">
                    <Card className={classNames(classes.card, "mx-auto m-16 md:m-0")}>

                        <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">

                            <Typography variant="title" className="md:w-full mb-32">CREATE AN ACCOUNT</Typography>

                            <form name="registerForm" noValidate className="flex flex-col justify-center w-full">

                                <FormControl className="mb-16" fullWidth required>
                                    <InputLabel>Name</InputLabel>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <FormControl className="mb-16" fullWidth required>
                                    <InputLabel>Email</InputLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <FormControl className="mb-16" fullWidth required>
                                    <InputLabel>Password</InputLabel>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>

                                <FormControl className="mb-16" fullWidth required>
                                    <InputLabel>Password (Confirm)</InputLabel>
                                    <Input
                                        type="password"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        onChange={this.handleChange}
                                    />
                                </FormControl>


                                <FormControl className="items-center">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="acceptTermsConditions"
                                                checked={acceptTermsConditions}
                                                onChange={this.handleChange}/>
                                        }
                                        label="I read and accept terms and conditions"
                                    />
                                </FormControl>


                                <Button variant="raised" color="primary" className="w-full mx-auto mt-16" aria-label="Register"
                                        disabled={!this.canBeSubmitted()}>
                                    CREATE AN ACCOUNT
                                </Button>

                            </form>

                            <div className="flex flex-col items-center justify-center pt-32 pb-24">
                                <span className="font-medium">Already have an account?</span>
                                <Link className="font-medium" to="/pages/auth/login-2">Login</Link>
                            </div>

                        </CardContent>
                    </Card>
                </Slide>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Register2Page);