import { React, useState } from "react";
import classNames from "classnames";
import "./SignForm.css"
import { hidden, signUp, signIn,  } from "./SignForm.module.css";
import logoImage from '../../assets/padlock.png'
import { Link } from "react-router-dom";

export const SignForm = (props) => {
  const {children, variant} = props;

  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [rememberMe, setRememberMe] = useState(props.rememberMe);
  const [promotion, setPromotion] = useState(props.promotion);

  const notSignIn = {
    [hidden]: variant === "signIn",
    [signUp]: variant === "signUp"
  };
  const notSignUp = {
    [signIn]: variant === "signIn",
    [hidden]: variant === "signUp"
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value)
        break;
      case "lastName":
        setLastName(event.target.value)
        break;
      case "email":
        setEmail(event.target.value)
        break;
      case "password":
        setPassword(event.target.value)
        break;
      case "rememberMe":
        setRememberMe(event.target.value)
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("first Name", firstName)
    localStorage.setItem("last Name", lastName)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    localStorage.setItem("remember Me", rememberMe)
}


  return (
    <div className="signForm">
      <figure className="signForm__logo">
        <div className="signForm__image">
          <img src={logoImage} alt="padlock"/>  
        </div>
        <figcaption>{children}</figcaption>
      </figure>
      <form onSubmit={handleSubmit}>
        <div className={classNames("signForm__name", notSignIn)}>
          <input className="signForm__firstName" type="text" name="firstName" placeholder="First Name *" value={firstName} onChange={handleChange} />
          <input className="signForm__lastName" type="text" name="lastName" placeholder="Last Name *" value={lastName} onChange={handleChange} />
        </div>
        <div className="signForm_validation">
          <input type="text" name="email" placeholder="Email Address *" value={email} onChange={handleChange} />
          <input type="text" name="password" placeholder="Password *" value={password} onChange={handleChange} />
        </div>
        <div className={classNames("signForm__rememberMe", notSignUp)}>
          <input type="checkbox" name="rememberMe" value={rememberMe} onChange={handleChange} />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <div className={classNames("signForm__promotion", notSignIn)}>
          <input type="checkbox" name="promotion" value={promotion} onChange={handleChange} />
          <label htmlFor="promotion">I want to receive inspiration, marketing promotions and updates via email</label>
        </div>
        <button className="signForm__submit" type="submit" value="Submit">{children}</button>  
        <div className={classNames("signForm__links", notSignUp)}>
          <Link to='/cursor.edu-hw-react-styled/sign-up'>Forgot password?</Link>
          <Link to='/cursor.edu-hw-react-styled/sign-up'>Don't have an account? Sign Up</Link>
        </div>
        <div className={classNames("signForm__links", notSignIn)}>
          <Link to='/cursor.edu-hw-react-styled/sign-in'>Already have an account? Sign In</Link>
        </div>
      </form>
      <div className="signForm__copyright">Copyright <span>&#169;</span> Your Website. 2021</div>
    </div>
  )
}