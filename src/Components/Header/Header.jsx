import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

function Header(){
    return(
        <div className="outerheader">
            <div className="innerheader">
            <img style={{display:"none"}} src={process.env.PUBLIC_URL + "/Images/icon.png"} height="75px" alt="Football" />
                
               <div>
                <NavLink to="/" exact  style={{textDecoration:"none",color:"antiquewhite",fontSize:"25px"}}>
                    
                        Login
                    
                    </NavLink>
                </div>
               <div>
               <NavLink to="/Register" style={{textDecoration:"none",color:"antiquewhite",fontSize:"25px"}}>
             
                    Register
                   
               </NavLink>
               </div>
               <div>
               <NavLink to="/Posts" style={{textDecoration:"none",color:"antiquewhite",fontSize:"25px"}}>
              
                    Posts
                  
               </NavLink>
               </div>
               <div>
               <NavLink to="/Comments" style={{textDecoration:"none",color:"antiquewhite",fontSize:"25px"}}>
       
                    Comments
                
               </NavLink>
               </div>
            </div>
        </div>
    )
}
export default Header;