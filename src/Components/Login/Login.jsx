import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor() {
        super();

        this.state = {

            email: "",
            password: "",

            emailerror: false,
            emailhelper: "",
            passerror: false,
            passhelper: ""
        }
    }

    Changeemail = (event) => {
        this.setState({
            email: event.target.value
        }, () => {
            this.emailValidation()
        })
    };


    emailValidation = () => {
        if (this.state.email === "") {
            console.log("inside if")
            this.setState({
                emailerror: true,
                emailhelper: "Email is required"
            })
            return false;
        }
        else if (!this.state.email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$")) {
            this.setState({
                emailerror: true,
                emailhelper: "Please enter valid email"
            })
            return false;
        }
        else {
            console.log("number")
            this.setState({
                emailerror: false,
                emailhelper: ""
            })
            return true;
        }
    }

    Changepassword = (event) => {
        this.setState({
            password: event.target.value
        }, () => {
            this.passwordvalidation()
        })
    };

    passwordvalidation = () => {

        if (this.state.password === "") {
            this.setState({
                passerror: true,
                passhelper: "*Password is required",
            })
            return false;
        }

        else if (this.state.password.length < 3) {
            this.setState({
                passerror: true,
                passhelper: "*It must be greater than 3 char",
            })
            return false;
        }
        else {
            this.setState({
                passerror: false,
                passhelper: ""
            })
            return true;
        }
    }

    valid = () => {

        if (this.state.email === "" && this.state.password === "") {
            this.setState({

                emailerror: true,
                emailhelper: "*Email is required",

                passerror: true,
                passhelper: "*Password is required",
            })

            return false;
        }
        else if (this.state.email === "") {
            this.setState({
                nameerror: true,
                namehelper: "*Email is required",
            })
            return false;
        }
        else if (this.state.password === "") {
            this.setState({
                nameerror: true,
                namehelper: "*Password is required",
            })
            return false;
        }
        else {
            return true;
        }
    }

    submit = (e) => {
        e.preventDefault();
        if (this.valid()) {
            console.log(this.state)
        }
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <form style={{ textAlign: "center" }}>
                    <FormControl variant="outlined">
                        <TextField id="input-with-icon-textfield2" label="Email" variant="outlined" type="email" name="email" value={this.state.email} onChange={this.Changeemail} error={this.state.emailerror} helperText={this.state.emailhelper}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            labelwidth={88}
                        />
                    </FormControl>

                    <br />
                    <br />

                    <FormControl variant="outlined">
                        <TextField id="input-with-icon-textfield3" label="Password" variant="outlined" type="text" name="password" value={this.state.password} onChange={this.Changepassword} error={this.state.passerror} helperText={this.state.passhelper}
                            style={{ width: "100%" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <VpnKeyIcon />
                                    </InputAdornment>
                                ),
                            }}
                            labelwidth={88}
                        />
                    </FormControl>
                    <br />
                    <br />
                    <Button
                        type="submit"
                        onClick={this.submit}
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        style={{ fontFamily: "'Playfair Display', serif", background: "black" }}
                    >
                        Login
                        </Button>
                        <br/>
                        <br/>
                    <Link to="/Register" style={{marginLeft:"10%" , textDecoration:"none"}}>New Here ?</Link> | &nbsp;
                    <Link to="/Posts" style={{textDecoration:"none"}}>Show All Post... </Link>
                </form>
            </div>
        )
    }
}
export default Login;