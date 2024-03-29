import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className='pa4' style={{ background: 'white' }} >
            <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
                <small className="f6 db tc">© 2023 <b className="ttu"> ALX_COHORT_7 STUDENT </b>, All Rights Reserved</small>
                <div className="tc mt3">
                    <a href="/language/" title="Language" className="f6 dib ph3 link mid-gray dim">Language</a>
                    <a href="/terms/"    title="Terms" className="f6 dib ph3 link mid-gray dim">Terms of Use</a>
                    <a href="/privacy/"  title="Privacy" className="f6 dib ph3 link mid-gray dim">Privacy</a>
                </div>  
            </footer>
        </div>
    )
}

export default Footer;