import React from 'react'
import loder from '../img/loder1.png'

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

export const Loder = () => {
    return (
        
        <div>
           <div className="loader">
               <div className="loder"/>
               <img src={loder} alt="pen" width="150px" height="150px" />
               </div> 
        </div>
    )
}
