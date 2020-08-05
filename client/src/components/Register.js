import React, { Component } from 'react'
import lolLogo from '../images/lol-logo.png'
import riotLogo from '../images/riot-games-logo.png'

 class Register extends Component {
    render() {
        return (
            <div>
                <div className="register__brand-logo"><img src={riotLogo} alt="riot-logo"/></div>
            <div className="register"> 
            
            
              <form method="get" className="register__form">

                  <p> <legend>Create Account:</legend>
                    <img src={lolLogo} alt="lol-logo"/></p>
                   
                    
                    <input name="username" className="register__input" placeholder="Username" type="text"/>
                 
                    <input name="email" className="register__input" placeholder="Email" type="text"/>
               
                    <input name="password" className="register__input" placeholder="Password" type="password"/>
          
                    <input name="confirm-password" className="register__input" placeholder="Confirm Password" type="password"/>

                    <p><input name="subscribe" className="register__checkbox" type="checkbox" value="subscribe" /><label className="register__label" htmlFor="subscribe">Subscribe for newsletter</label></p>
                    

                    <button type="submit" className="register__submit"><i className="fas fa-arrow-right"></i></button>
              </form>
            </div>
            </div>
        )
    }
}

export default Register
