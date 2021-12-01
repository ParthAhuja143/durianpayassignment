import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faAlignJustify, faArrowLeft, faArrowRight,faTimes, faBars, faBookOpen, faCaretRight, faCross, faHamburger, faHome, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import GET from '../../components/get';
import POST from '../../components/post';

const ReferencesWebhooksPage = () => {

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
        <Seo title = 'Webhooks'/>
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
                        <Link to = '/references/introduction'><div className = 'sidebar-option'>Introduction</div></Link>
                        <Link to = '/references/webhooks'><div className = 'sidebar-option active'>Webhooks</div></Link>
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
                        Webhooks
                    </div>
                    <div className = 'api-content-body'>
                        <p>Webhooks are server callbacks to your server from Cashfree. Webhooks are event-based and are sent when specific events related to the transaction happen.</p>
                        <p>Cashfree sends the following webhooks for Payment Gateway:</p>
                        <ol>
                            <li>Payment Success</li>
                            <li>Incident Services</li>
                        </ol>
                        <div className = 'api-content-body-heading'>Incident Services</div>
                        <p>Cashfree will notify you whenever we create an incident at our end. An incident implies that the issuing bank is facing high failure rates or has scheduled a maintenance activity during that time. The former could be due to many reasons and until the failure rates go down, we would recommend customers to use alternative payment instruments.</p>
                        <p>There are two channels through which we notify. You can subscribe to either of the channels by adding your email address and webhook endpoint in the merchant dashboard.
                        Email - Cashfree sends an email alert when an issuer is facing downtime or a scheduled incident.
                        Webhooks - Cashfree will invoke a server to server call whenever an incident is created. You can use this webhook and update your payment page accordingly.</p>
                        <div className = 'api-content-body-heading'>Webhook Schema</div>
                        <div className = 'api-content-body-subheading'>Sample payload for creating of Incident</div>
                        <pre>
                        <code className = 'pink-code'>
{`{
    "data": {
        "incident": {
            "end_time": null,
            "id": "INCIDENT_MEDIUM_KarurVysyaBank_a7259c79-25a8-4b86-bcab-71562a85c386",
            "impact": "MEDIUM",
            "message": "We are facing issues with KVB bank UPI payments. ",
            "start_time": "2021-04-16T14:00:00+05:30",
            "status": "OPEN",
            "type": "UNSCHEDULED"
        },
        "instruments": {
            "upi": {
                "issuers": [
                "Karur Vysya Bank"
                ]
            }
        }
    },
    "event_time": "2021-04-16T14:10:36+05:30",
    "type": "HEALTH_ALERT",
    "version": 1
}`}
                        </code>
                        </pre>
                        <div className = 'api-content-body-subheading'>Sample Payload when Incident is Resolved</div>
                        <pre>
                            <code className = 'pink-code'>
                                {`{
  "data": {
    "incident": {
      "end_time": "2021-04-16T18:20:24+05:30",
      "id": "INCIDENT_MEDIUM_KarurVysyaBank_a7259c79-25a8-4b86-bcab-71562a85c386",
      "impact": "MEDIUM",
      "message": "Payment mode up",
      "start_time": "2021-04-16T14:00:00+05:30",
      "status": "RESOLVED",
      "type": "UNSCHEDULED"
    },
    "instruments": {
      "upi": {
        "issuers": [
          "Karur Vysya Bank"
        ]
      }
    }
  },
  "event_time": "2021-04-16T18:20:24+05:30",
  "type": "HEALTH_ALERT",
  "version": 1
}`}
                            </code>
                        </pre>
                        <div className = 'api-content-body-subheading'>Payload</div>
                        <div className = 'content-table'>
                            <div className = 'content-table-inner'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Field</th>
                                            <th>Description</th>
                                            <th>Example</th>
                                            <th>Mandatory</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>end_time</td>
                                            <td>Null when an incident is created. Or end time when incident is resolved</td>
                                            <td>2021-04-16T15:10:36+05:30</td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>start_time</td>
                                            <td>Time since we have seen this incident</td>
                                            <td>2021-04-16T14:10:36+05:30</td>
                                            <td>Y</td>
                                        </tr>
                                        <tr>
                                            <td>id</td>
                                            <td>Incident id</td>
                                            <td>Alphanumeric with special characters - _,-,</td>
                                            <td>Y</td>
                                        </tr>
                                        <tr>
                                            <td>impact</td>
                                            <td>Impact of the downtime</td>
                                            <td>HIGH, MEDIUM, LOW</td>
                                            <td>Y</td>
                                        </tr>
                                        <tr>
                                            <td>message</td>
                                            <td>Human readable message</td>
                                            <td></td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>status</td>
                                            <td>Status of the incident. OPEN when the incident is created. RESOLVED once the incident is resolved. UPDATE once we update the incident with any more details.</td>
                                            <td>OPEN, UPDATE, RESOLVED</td>
                                            <td>Y</td>
                                        </tr>
                                        <tr>
                                            <td>type</td>
                                            <td>Is this a scheduled or an unscheduled downtime?</td>
                                            <td>SCHEDULED, UNSCHEDULED</td>
                                            <td>Y</td>
                                        </tr>
                                        <tr>
                                            <td>instruments</td>
                                            <td>Refers to the payment mode. This will contain a nested object. One of the following - upi, net_banking, card, wallet</td>
                                            <td></td>
                                            <td>Y</td>
                                        </tr>
                                        <tr>
                                            <td>upi.issuers</td>
                                            <td>Issuers which are impacted</td>
                                            <td>Array</td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>net_banking.issuers</td>
                                            <td>Net banking banks which are impacted</td>
                                            <td>Array</td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>wallet.issuers</td>
                                            <td>Wallets which are impacted</td>
                                            <td>Array</td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>card.type</td>
                                            <td>Card types which are impacted</td>
                                            <td>CREDIT_CARD, DEBIT_CARD, ALL</td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>card.scheme</td>
                                            <td>Card schemes which are impacted</td>
                                            <td>MASTER, VISA, RUPAY, MAESTRO, AMEX, ALL</td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>card.issuers</td>
                                            <td>Banks which are impacted</td>
                                            <td>Array</td>
                                            <td>N</td>
                                        </tr>
                                        <tr>
                                            <td>event_time</td>
                                            <td>Time when this webhook was created</td>
                                            <td></td>
                                            <td>Y</td>
                                        </tr>   
                                        <tr>
                                            <td>type</td>
                                            <td>Type of webhook</td>
                                            <td>HEALTH_ALTER</td>
                                            <td>Y</td>
                                        </tr>
                                        <tr>
                                            <td>version</td>
                                            <td>Version of webhook</td>
                                            <td>You should build your parsing logic wrt to this version.</td>
                                            <td>Y</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className = 'content-table'>
                            <div className = 'content-table-inner'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Children</th>
                                            <th>Optional</th>
                                            <th>Type</th>
                                            <th>Possible Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>wallet</td>
                                            <td>Y*</td>
                                            <td>Child Attributes</td>
                                            <td>Available Below</td>
                                        </tr>
                                        <tr>
                                            <td>net_banking</td>
                                            <td>Y*</td>
                                            <td>Child Attributes</td>
                                            <td>Available Below</td>
                                        </tr>
                                        <tr>
                                            <td>upi</td>
                                            <td>Y*</td>
                                            <td>Child Attributes</td>
                                            <td>Available Below</td>
                                        </tr>
                                        <tr>
                                            <td>card</td>
                                            <td>Y*</td>
                                            <td>Child Attributes</td>
                                            <td>Available Below</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <ul>
                            <p>At least one of the children needs to be present</p>
                        </ul>
                        <div className = 'api-content-body-subheading'>Wallet</div>
                        <div className = 'content-table'>
                            <div className = 'content-table-inner'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Children</th>
                                            <th>Optional</th>
                                            <th>Type</th>
                                            <th>Possible Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>issuers</td>
                                            <td>N</td>
                                            <td>Text</td>
                                            <td>See list of wallet issuers below.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className = 'api-content-body-subheading'>Net Banking</div>
                        <div className = 'content-table'>
                            <div className = 'content-table-inner'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Children</th>
                                            <th>Optional</th>
                                            <th>Type</th>
                                            <th>Possible Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>issuers</td>
                                            <td>N</td>
                                            <td>Array</td>
                                            <td>See list issuers below.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className = 'api-content-body-subheading'>UPI</div>
                        <div className = 'content-table'>
                            <div className = 'content-table-inner'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Children</th>
                                            <th>Optional</th>
                                            <th>Type</th>
                                            <th>Possible Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>issuers</td>
                                            <td>N</td>
                                            <td>Array</td>
                                            <td>See list of issuers below.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className = 'api-content-body-subheading'>Card</div>
                        <div className = 'content-table'>
                            <div className = 'content-table-inner'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Children</th>
                                            <th>Optional</th>
                                            <th>Type</th>
                                            <th>Possible Values</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>type</td>
                                            <td>N</td>
                                            <td>Text</td>
                                            <td>CREDIT_CARD, DEBIT_CARD, ALL</td>
                                        </tr>
                                        <tr>
                                            <td>schema</td>
                                            <td>N</td>
                                            <td>Text</td>
                                            <td>MASTER, VISA, RUPAY, MAESTRO, AMEX, ALL</td>
                                        </tr>
                                        <tr>
                                            <td>issuers</td>
                                            <td>N</td>
                                            <td>Array</td>
                                            <td>See list of issuers below.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className = 'api-content-body-heading'>Bank Names</div>
                        <ul style = {{paddingLeft: '20px'}}>
                            <li>Bank Name</li>
                            <li>Axis Bank</li>
                            <li>Bank of Baroda - Retail Banking</li>
                            <li>Bank of India</li>
                            <li>Bank of Maharashtra</li>
                            <li>Canara Bank</li>
                            <li>Catholic Syrian Bank</li>
                            <li>Central Bank of India</li>
                            <li>City Union Bank</li>
                            <li>Deutsche Bank</li>
                            <li>DBS Bank Ltd</li>
                            <li>DCB Bank - Personal</li>
                            <li>Dhanlakshmi Bank</li>
                            <li>Federal Bank</li>
                            <li>HDFC Bank</li>
                            <li>ICICI Bank</li>
                            <li>IDBI Bank</li>
                            <li>IDFC Bank</li>
                            <li>Indian Bank</li>
                            <li>Indian Overseas Bank</li>
                            <li>IndusInd Bank</li>
                            <li>Jammu and Kashmir Bank</li>
                            <li>Karnataka Bank Ltd</li>
                            <li>Karur Vysya Bank</li>
                            <li>Kotak Mahindra Bank</li>
                            <li>Laxmi Vilas Bank - Retail Net Banking</li>
                            <li>Punjab &amp; Sind Bank</li>
                            <li>Punjab National Bank - Retail Net Banking</li>
                            <li>RBL Bank</li>
                            <li>Saraswat Bank</li>
                            <li>South Indian Bank</li>
                            <li>Standard Chartered Bank</li>
                            <li>State Bank Of India</li>
                            <li>Tamilnad Mercantile Bank Ltd</li>
                            <li>UCO Bank</li>
                            <li>Union Bank of India</li>
                            <li>Yes Bank Ltd</li>
                            <li>Bank of Baroda - Corporate</li>
                            <li>Bank of India - Corporate</li>
                            <li>DCB Bank - Corporate</li>
                            <li>Lakshmi Vilas Bank - Corporate</li>
                            <li>Punjab National Bank - Corporate</li>
                            <li>State Bank of India - Corporate</li>
                            <li>Union Bank of India - Corporate</li>
                            <li>Axis Bank Corporate</li>
                            <li>Dhanlaxmi Bank Corporate</li>
                            <li>ICICI Corporate Netbanking</li>
                            <li>Ratnakar Corporate Banking</li>
                            <li>Shamrao Vithal Bank Corporate</li>
                            <li>Equitas Small Finance Bank</li>
                            <li>Yes Bank Corporate</li>
                            <li>Bandhan Bank- Corporate banking</li>
                            <li>Barclays Corporate- Corporate Banking - Corporate</li>
                            <li>Indian Overseas Bank Corporate</li>
                            <li>City Union Bank of Corporate</li>
                            <li>HDFC Corporate</li>
                            <li>Shivalik Bank</li>
                            <li>AU Small Finance</li>
                            <li>Bandhan Bank - Retail Net Banking</li>
                            <li>Shamrao Vitthal Co-operative Bank</li>
                            <li>Tamil Nadu State Co-operative Bank</li>
                        </ul>
                        <div style = {{marginTop: '30px'}} className = 'api-content-body-heading'>Wallet Names</div>
                        <ul style = {{paddingLeft: '20px'}}>
                            <li>Name of the wallet</li>
                            <li>FreeCharge</li>
                            <li>MobiKwik</li>
                            <li>Ola Money</li>
                            <li>Reliance Jio Money</li>
                            <li>Airtel Money</li>
                            <li>Paytm</li>
                            <li>Amazon Pay</li>
                            <li>PhonePe</li>
                        </ul>
                    </div>
                    <div className = 'api-footer'>
                        <div className = 'api-footer-time'>
                            <FontAwesomeIcon icon = {faStopwatch}/> Updated 3 months ago
                        </div>
                        <div className = 'api-footer-next-prev'>
                            <Link to = '/references/introduction'>
                            <span className = 'api-footer-prev'>
                                <FontAwesomeIcon icon = {faArrowLeft} /> Introduction
                            </span>
                            </Link>
                            <Link to = '/references/endpoints'>
                            <span className = 'api-footer-next'>
                                Endpoints <FontAwesomeIcon icon = {faArrowRight} />
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

export default ReferencesWebhooksPage;