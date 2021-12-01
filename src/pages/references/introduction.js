import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify, faArrowLeft, faArrowRight, faBars,faTimes, faBookOpen, faCaretRight, faCross, faHamburger, faHome, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import GET from '../../components/get';
import POST from '../../components/post';

const ReferencesIntroductionPage = () => {

    const [ordersOpen, setOrdersOpen] = useState(false);
    const [paymentsOpen, setPaymentsOpen] = useState(false);
    const [refundsOpen, setRefundsOpen] = useState(false);
    const [settlementsOpen, setSettlementsOpen] = useState(false);
    const [paymentlinksOpen, setPaymentLinksOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const alterState = (state, setState) => {
        const prevState = state;
        setState(!prevState);
        console.log(state)
    }

    return(
    <Layout>
        <Seo title = 'Introduction'/>
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
                <Link to = '/references/introduction'>
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
                        <Link to = '/references/introduction'><div className = 'sidebar-option active'>Introduction</div></Link>
                        <Link to = '/references/webhooks'><div className = 'sidebar-option'>Webhooks</div></Link>
                        <Link to = '/references/endpoints'><div className = 'sidebar-option'>Endpoints</div></Link>
                    </div>
                    <div className = 'sidebar-section'>
                        <h1 className = 'sidebar-heading'>
                            NEW PAYMENT GATEWAY APIS
                        </h1>
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(ordersOpen, setOrdersOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${ordersOpen && `rotate`}`} />Orders</div>
                        {ordersOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <Link to = '/references/createOrder'><li><span className = 'list-title'>Create Order</span><POST/></li></Link>
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
                <div className = 'api-content'>
                    <div className = 'api-heading'>
                        Introduction
                    </div>
                    <div className = 'api-content-body'>
                        <p>We have released a new set of Payment Gateway APIs which will make integrations much easier and seamless for you. If you have any feedback, please write to techsupport@cashfree.com.</p>
                        <p>The new Cashfree APIs are organised around REST. This means that every API has a predictable resource oriented URL. Every URL accepts JSON request body and returns JSON-encoded responses.</p>
                        <p>We also use standard HTTP response codes to denote success or failure for every API call. Only 200 OK responses should be treated as success. Any non 200 HTTP response code should be treated as failure.</p>
                        <p>We have also added few more features to enable tracking and make debugging easy for merchants.</p>
                        <ol>
                            <li>x-request-id - If you send this header in your API call, Cashfree will tag this request-id for the entire lifecycle of the request. If you face issues with any API call, you can send us the x-request-id for us to debug it faster</li>
                            <li>ratelimiting - We have added custom headers for rate-limiting. If you ever get a 429 response code from the API. You can refer to these headers to find your current limits and the remaining limits. X-Ratelimit-Limit, X-Ratelimit-Remaining, X-Ratelimit-Retry, X-Ratelimit-Type.</li>
                        </ol>
                    </div>
                    <div className = 'api-footer'>
                        <div className = 'api-footer-time'>
                            <FontAwesomeIcon icon = {faStopwatch}/> Updated 16 days ago
                        </div>
                        <div className = 'api-footer-next-prev'>
                            <span className = 'api-footer-prev' style = {{opacity: '0'}}>
                                <FontAwesomeIcon icon = {faArrowLeft} /> Anything
                            </span>
                            <Link to = '/references/webhooks'>
                            <span className = 'api-footer-next'>
                                Webhooks <FontAwesomeIcon icon = {faArrowRight} />
                            </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
    }

export default ReferencesIntroductionPage;