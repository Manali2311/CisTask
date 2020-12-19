import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import DialpadIcon from '@material-ui/icons/Dialpad';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


class Registration extends React.Component{
constructor(){
    super();

    this.state={
        name:"",
        number:"",
        email:"",
        password:"",
        nameerror: false,
        namehelper: "",
        numerror: false,
        numhelper:"",
        emailerror: false,
        emailhelper:"",
        passerror: false,
        passhelper:""
    }
}

Changename = (event) => {
    this.setState({
        name: event.target.value
    }, () => {
        this.nameValidation()
    })
};

nameValidation = () => {
    if (this.state.name === "") {

        this.setState({
            nameerror: true,
            namehelper: "*Enter valid first name"
        })

        return false;
    }

    else if (this.state.name.length < 3) {
        this.setState({
            nameerror: true,
            namehelper: "*Name must be greater than 3 char"
        })
        return false;
    }

    else if (!this.state.name.match("^[a-zA-Z]+$")) {
        this.setState({
            nameerror: true,
            namehelper: "*First Name must be a string value"
        })
        return false;
    }

    else {
        this.setState({
            nameerror: false,
            namehelper: ""
        })
        return true;
    }
}

Changenumber = (event) => {
    this.setState({
        number: event.target.value
    }, () => {
         this.numValidation()
    })
};

numValidation = () => {
    if (this.state.number === "") {
console.log("inside if")
        this.setState({
            numerror: true ,
            numhelper: "*Enter valid Number"
        })
        return false;
    }
    else if (this.state.number.match("^[a-zA-Z]+$")) {
        this.setState({
            numerror: true,
            numhelper: "*String not allowed"
        })
        return false;
    }
    else if (this.state.number.length !==10 ) {
        this.setState({
            numerror: true,
            numhelper: "*10 digit mobile number please"
        })
        return false;
    }
    else{
        console.log("number")
        this.setState({
            numerror: false,
            numhelper: ""
        })
        return true;
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
            emailhelper:"Email is required"
        })
        return false;
    }
    else if (!this.state.email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]+$")) {
        this.setState({
            emailerror: true,
            emailhelper:"Please enter valid email"
        })
        return false;
    }
    else{
        console.log("number")
        this.setState({
            emailerror: false,
            emailhelper:""
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
else{
    this.setState({
        passerror: false,
        passhelper: ""
    })
    return true;
}
}

valid=()=>{
    
    if (this.state.name === "" && this.state.number === "" && this.state.email === "" && this.state.password === "") {
        this.setState({
            nameerror: true,
            namehelper: "*Name is required",

            numerror: true,
            numhelper: "*Number is required",

            emailerror: true,
            emailhelper:"*Email is required",

            passerror: true,
            passhelper: "*Password is required",
        })

        return false;
    }
    else if(this.state.name === ""){
        this.setState({
            nameerror: true,
            namehelper: "*Name is required",
        })
        return false;
    }
    else if(this.state.number === ""){
        this.setState({
            nameerror: true,
            namehelper: "*Number is required",
        })
        return false;
    }
    else if(this.state.email === ""){
        this.setState({
            nameerror: true,
            namehelper: "*Email is required",
        })
        return false;
    }
    else if(this.state.password === ""){
        this.setState({
            nameerror: true,
            namehelper: "*Password is required",
        })
        return false;
    }
    else{
        return true;
    }
}

submit=(e)=>{
    e.preventDefault();
    if(this.valid()){
    console.log(this.state)
    }
}


    render(){
        return(
            <div>
                <br/>
                <br/>
               <form style={{textAlign:"center"}}>
                        <FormControl variant="outlined">
                            <TextField id="input-with-icon-textfield" label="Name" variant="outlined" type="text" name="name" value={this.state.name} onChange={this.Changename} error={this.state.nameerror} helperText={this.state.namehelper}
                                style={{width:"100%"}}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <PermIdentityTwoToneIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                 labelwidth={78}
                            />
                        </FormControl>
                       
                        <br/>
                        <br/>

                        <FormControl variant="outlined">
                            <TextField id="input-with-icon-textfield1" label="Number" variant="outlined" type="text"  name="number" value={this.state.number} onChange={this.Changenumber} error={this.state.numerror}  helperText={this.state.numhelper}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <DialpadIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                labelwidth={88}
                            />
                        </FormControl>

                        <br/>
                        <br/>

                        <FormControl variant="outlined">
                            <TextField id="input-with-icon-textfield2" label="Email" variant="outlined" type="email" name="email" value={this.state.email} onChange={this.Changeemail} error={this.state.emailerror}  helperText={this.state.emailhelper}
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

                        <br/>
                        <br/>

                        <FormControl variant="outlined">
                            <TextField id="input-with-icon-textfield3" label="Password" variant="outlined" type="text" name="password" value={this.state.password} onChange={this.Changepassword} error={this.state.passerror}  helperText={this.state.passhelper}
                               style={{width:"100%"}}
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
                        <br/>
                        <br/>
                        <Button
                            type="submit"
                            onClick={this.submit}
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon />}
                            style={{ fontFamily: "'Playfair Display', serif", background: "black" }}
                        >
                            Register
                        </Button>

               </form>
            </div>
        )
    }
}
export default Registration;