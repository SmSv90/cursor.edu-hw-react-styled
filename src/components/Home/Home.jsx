import { React } from "react";
import welcomeImage from '../../assets/welcome.png'
import './Home.css'

export const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home__image">
        <img src={welcomeImage} alt="welcome"/>
      </div>
      <div className="home__title">
        <h2>Homework #22</h2>
      </div>
    </div>
  )
}