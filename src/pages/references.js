import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faAlignJustify, faArrowLeft, faArrowRight, faBars, faBookOpen, faCaretRight, faCross, faHamburger, faHome, faTimes,faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import GET from '../components/get';
import POST from '../components/post';

const ReferencesPage = () => {

    const [ordersOpen, setOrdersOpen] = useState(false);
    const [paymentsOpen, setPaymentsOpen] = useState(false);
    const [refundsOpen, setRefundsOpen] = useState(false);
    const [settlementsOpen, setSettlementsOpen] = useState(false);
    const [paymentlinksOpen, setPaymentLinksOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false)

    const alterState = (state, setState) => {
        const prevState = state;
        setState(!prevState);
        console.log(state)
    }

    return(
    <Layout>
        <Seo title = 'API Documentation'/>
        <div className = 'api_body'>
            <div className = 'header'>
                <div className = 'header-child'>
                    <StaticImage src = {'../images/cashfree.png'} alt = 'Cashfree' width = '100' />
                </div>
                <button className = 'header-child' onClick = {(e) => {e.preventDefault();alterState(menuOpen, setMenuOpen)}}>
                    {menuOpen ? <FontAwesomeIcon icon = {faTimes} /> : <FontAwesomeIcon icon = {faBars} />}
                </button>
            </div>
            <div className = 'menu'>
                <Link to = '/'>    
                    <div className = 'menu-option'>
                        <FontAwesomeIcon icon = {faHome}/>
                        Home
                    </div>
                </Link>
                <Link to = '/docs/'>
                    <div className = 'menu-option'>
                        <FontAwesomeIcon icon = {faBookOpen}/>
                        Product Demonstration
                    </div>
                </Link>
                <Link to = '/references/introductiob'>
                    <div className = 'menu-option active'>
                        <FontAwesomeIcon icon = {faAlignJustify}/>
                        API Documentation
                    </div>
                </Link>
            </div>
            <div className = 'api-main-body'>
                <div className = {`sidebar ${menuOpen ? 'transRight' : 'transLeft'}`}>
                    <div className = 'sidebar-section'>
                        <h1 className = 'sidebar-heading'>
                            PAYMENT GATEWAY APIS
                        </h1>
                        <div className = 'sidebar-option'>Introduction</div>
                        <div className = 'sidebar-option'>Webhooks</div>
                        <div className = 'sidebar-option'>Endpoints</div>
                    </div>
                    <div className = 'sidebar-section'>
                        <h1 className = 'sidebar-heading'>
                            NEW PAYMENT GATEWAY APIS
                        </h1>
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(ordersOpen, setOrdersOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${ordersOpen && `rotate`}`} />Orders</div>
                        {ordersOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <li><span className = 'list-title'>Create Order</span><POST/></li>
                            <li><span className = 'list-title'>Order Pay</span><POST/></li>
                            <Link to = '/references/getOrder'><li><span className = 'list-title'>Get Order</span><GET/></li></Link>
                        </ul>}
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(paymentsOpen, setPaymentsOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${paymentsOpen && `rotate`}`} />Payments</div>
                        {paymentsOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <Link to = '/references/getpaymentsfororder'><li><span className = 'list-title'>Get Payments for Orders</span><GET/></li></Link>
                            <Link to = '/references/getpaymentbyid'><li><span className = 'list-title'>Get Payment by ID</span><GET/></li></Link>
                        </ul>}
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(refundsOpen, setRefundsOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${refundsOpen && `rotate`}`} />Refunds</div>
                        {refundsOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <li><span className = 'list-title'>Create Refund</span><POST/></li>
                            <li><span className = 'list-title'>Get All Refunds for Order</span><POST/></li>
                            <li><span className = 'list-title'>Get Refund</span><GET/></li>
                        </ul>}
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(settlementsOpen, setSettlementsOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${settlementsOpen && `rotate`}`}/>Settlements</div>
                        {settlementsOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <Link to = '/references/getSettlements'><li><span className = 'list-title'>Get Settlements</span><GET/></li></Link>
                        </ul>}
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(paymentlinksOpen, setPaymentLinksOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${paymentlinksOpen && `rotate`}`} />Payment Links</div>
                        {paymentlinksOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <li><span className = 'list-title'>Create a new Payment Link</span><POST/></li>
                            <li><span className = 'list-title'>Fetch details for a Payment Link</span><GET/></li>
                        </ul>}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
    }

export default ReferencesPage;