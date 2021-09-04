import React from 'react'
import { Facebook } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Youtube } from 'react-bootstrap-icons';

export const Footer = () => {
    return (
        <div>
            <div className="footer">


                <center>
                    <a href="/"className="icon"><Facebook size={30} /></a>
                    <a href="/"className="icon"><Linkedin color="#2564b3" size={30} /></a>
                    <a href="/"className="icon"><Twitter size={30} /></a>
                    <a href="/"className="icon"><Youtube color="red" size={30} /></a>
                </center>

            </div>
        </div>
    )
}
