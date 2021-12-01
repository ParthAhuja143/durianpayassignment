import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify, faArrowLeft, faArrowRight, faBars, faBookOpen, faCaretRight, faCross, faHamburger, faHome, faStopwatch , faTimes} from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';
import GET from '../../components/get';
import POST from '../../components/post';
import axios from 'axios';

const ReferencesCreateOrderPage = () => {

    const [ordersOpen, setOrdersOpen] = useState(true);
    const [paymentsOpen, setPaymentsOpen] = useState(false);
    const [refundsOpen, setRefundsOpen] = useState(false);
    const [settlementsOpen, setSettlementsOpen] = useState(false);
    const [paymentlinksOpen, setPaymentLinksOpen] = useState(false);
    const [order_id, setOrder_id] = useState('');
    const [order_amount, setOrder_amount] = useState('');
    const [order_currency, setOrder_currency] = useState('');
    const [customer_id, setCustomer_id] = useState('');
    const [customer_email, setCustomer_email] = useState('');
    const [customer_phone, setCustomer_phone] = useState('');
    const [customer_bank_account_number, SetCustomer_bank_account_number] = useState('');
    const [customer_bank_ifsc, setCustomer_bank_ifsc] = useState('');
    const [customer_bank_code, setCustomer_bank_code] = useState('');
    const [return_url, setReturn_url] = useState('');
    const [notify_url, setNotify_url] = useState('');
    const [payment_methods, setPayment_methods] = useState('');
    const [x_client_id, setX_client_id] = useState('');
    const [x_client_secret, setX_client_secret] = useState('');
    const [x_api_version, setX_api_version] = useState('');
    const [customer_details, setCustumer_details] = useState(false);
    const [order_meta, setOrder_meta] = useState(false);
    const [data, setData] = useState(false);
    const [activeScreenIndex, setActiveScreenIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const alterState = (state, setState) => {
        const prevState = state;
        setState(!prevState);
        console.log(state)
    }

    const fetchApi = async () => {
        const options = {
            method: 'POST',
            url: 'https://api.cashfree.com/pg/orders',
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
              'x-client-id': 'abc',
              'x-client-secret': 'bc',
              'x-api-version': '2021-05-21',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'POST',
              'Sec-Fetch-Mode': 'cors',
              'Sec-Fetch-Site': 'cross-site'
            },
            data: {
              customer_details: {
                customer_id: '7112AAA812234',
                customer_email: 'john@cashfree.com',
                customer_phone: '9908734801',
                customer_bank_account_number: '1518121112',
                customer_bank_ifsc: 'CITI0000001',
                customer_bank_code: 3333
              },
              order_meta: {
                return_url: 'https://b8af79f41056.eu.ngrok.io?order_id={order_id}&order_token={order_token}',
                notify_url: 'https://b8af79f41056.eu.ngrok.io/webhook.php',
                payment_methods: 'dc'
              },
              order_id: 'ABC',
              order_amount: 10.15,
              order_currency: 'INR'
            }
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error.message);
          });
    }

    useEffect(() => {
        if(customer_email !== '' || customer_id !== '' || customer_bank_ifsc !== '' || customer_phone !== '' || customer_bank_code !== '' || customer_bank_account_number !== '')
        {
            setCustumer_details(true);
        }
        else{
            setCustumer_details(false)
        }
    }, [customer_bank_code, customer_bank_ifsc, customer_email, customer_id, customer_phone, customer_email])

    useEffect(() => {
        if(return_url !== '' || notify_url !== '' || payment_methods !== ''){
            setOrder_meta(true)
        }
        else{
            setOrder_meta(false);
        }
    }, [return_url, notify_url, payment_methods])

    useEffect(() => {
        if(customer_details || order_meta || order_id || order_amount || order_currency ){
            setData(true)
        }
        else{
            setData(false)
        }
    }, [customer_details, order_meta, order_id, order_amount, order_currency])

    return(
    <Layout>
        <Seo title = 'Create'/>
        <div className = 'api-body'>
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
                        <Link to = '/references/webhooks'><div className = 'sidebar-option'>Webhooks</div></Link>
                        <Link to = '/references/endpoints'><div className = 'sidebar-option'>Endpoints</div></Link>
                    </div>
                    <div className = 'sidebar-section'>
                        <h1 className = 'sidebar-heading'>
                            NEW PAYMENT GATEWAY APIS
                        </h1>
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(ordersOpen, setOrdersOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${ordersOpen && `rotate`}`} />Orders</div>
                        {ordersOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <Link to = '/references/createOrder'><li className = 'active'><span className = 'list-title'>Create Order</span><POST/></li></Link>
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
                            <Link to = '/references/getSettlements'><Link to = '/references/getSettlements'><li><span className = 'list-title'>Get Settlements</span><GET/></li></Link></Link>
                        </ul>}
                        <div className = 'sidebar-option-1' onClick = {() => {alterState(paymentlinksOpen, setPaymentLinksOpen)}}><FontAwesomeIcon icon = {faCaretRight} className = {`open-close-icon ${paymentlinksOpen && `rotate`}`} />Payment Links</div>
                        {paymentlinksOpen && <ul className = 'sidebar-option-1-dropdown'>
                            <li><span className = 'list-title'>Create a new Payment Link</span><POST/></li>
                            <li><span className = 'list-title'>Fetch details for a Payment Link</span><GET/></li>
                        </ul>}
                    </div>
                </div>
                <div className="api-body-code">
                <div className = 'api-content'>
                    <div className = 'api-heading'>
                       Create Order
                    </div>
                    <div className = 'api-subheading'>
                        <POST/> <span style = {{paddingLeft: '5px'}}>https://sandbox.cashfree.com/pg/orders</span>
                    </div>
                    <div className = 'api-description'>
                        Use this API to create orders with Cashfree from your backend and get the payment link
                    </div>
                    <div className = 'api-content-body'>
                        <div className = 'api-content-body-subheading'>BODY PARAMS</div>
                        <div className = 'form-outer'>
                            <div className = 'form-inner'>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>order_id</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Order identifier present in your system. Alphanumeric and only - and _ allowed.</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {order_id} onChange = {(e) => {setOrder_id(e.target.value)}} /></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>order_amount</div>
                                            <div className = 'section-title-type'>double</div>
                                            <div className = 'section-title-required'>required</div>
                                        </div>
                                        <div className = 'section-description'>Bill amount for the order. Provide upto two decimals. 10.15 means Rs 10 and 15 paisa.</div>
                                    </div>
                                    <div className = 'form-section-child required'><input type="text" value = {order_amount} onChange = {(e) => {setOrder_amount(e.target.value)}} /></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>order_currency</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'>required</div>
                                        </div>
                                        <div className = 'section-description'>Currency for the order. INR if left empty. Contact care@cashfree.com to enable new currencies.</div>
                                    </div>
                                    <div className = 'form-section-child required'><input type="text" value = {order_currency} onChange = {(e) => {setOrder_currency(e.target.value)}}/></div>
                                </div>
                            </div>
                        </div>
                        <div className = 'api-content-body-subheading'>CUSTOMER DETAILS</div>
                        <div className = 'form-outer'>
                            <div className = 'form-inner'>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>customer_id</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'>required</div>
                                        </div>
                                        <div className = 'section-description'>A unique identifier for the customer. Use alphanumeric values only.</div>
                                    </div>
                                    <div className = 'form-section-child required'><input type="text" value = {customer_id} onChange = {(e) => {setCustomer_id(e.target.value)}}/></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>customer_email</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'>required</div>
                                        </div>
                                        <div className = 'section-description'>Customer email address.</div>
                                    </div>
                                    <div className = 'form-section-child required'><input type="email" value = {customer_email} onChange = {(e) => {setCustomer_email(e.target.value)}}/></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>customer_phone</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'>required</div>
                                        </div>
                                        <div className = 'section-description'>Customer phone number.</div>
                                    </div>
                                    <div className = 'form-section-child required'><input type="mobile" value = {customer_phone} onChange = {(e) => {setCustomer_phone(e.target.value)}}/></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>customer_bank_account_number</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Customer bank account. Required if you want to do a bank account check (TPV).</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {customer_bank_account_number} onChange = {(e) => {SetCustomer_bank_account_number(e.target.value)}} /></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>customer_bank_ifsc</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Customer bank IFSC. Required if you want to do a bank account check (TPV)</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {customer_bank_ifsc} onChange = {(e) => {setCustomer_bank_ifsc(e.target.value)}}/></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>customer_bank_code</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Customer bank code. Required for net banking payments, if you want to do a bank account check (TPV)</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {customer_bank_code} onChange = {(e) => {setCustomer_bank_code(e.target.value)}}/></div>
                                </div>   
                            </div>
                        </div>
                        <div className = 'api-content-body-subheading'>order_meta</div>
                        <div className = 'form-outer'>
                            <div className = 'form-inner'>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>return_url</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>The URL to which user will be redirected to after the payment on bank OTP page. Maximum length: 250.</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {return_url} onChange = {(e) => {setReturn_url(e.target.value)}} /></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>notify_url</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Notification URL for server-server communication. Useful when userâ€™s connection drops while re-directing. NotifyUrl should be an https URL. Maximum length: 250.y</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {notify_url} onChange = {(e) => {setNotify_url(e.target.value)}}/></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>payment_methods</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Allowed payment modes for this order. Comma separated with following values - "cc", "dc", "ccc", "ppc", "nb", "upi", "paypal", "app"</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {payment_methods} onChange = {(e) => {setPayment_methods(e.target.value)}}/></div>
                                </div>
                            </div>
                        </div>
                        <div className = 'api-content-body-subheading'>HEADERS</div>
                        <div className = 'form-outer'>
                            <div className = 'form-inner'>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>x-client-id</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Client app ID</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {x_client_id} onChange = {(e) => {setX_client_id(e.target.value)}}/></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>s-client-secret</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>Client Secret key</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {x_client_secret} onChange = {(e) => {setX_client_secret(e.target.value)}} /></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>x-api-version</div>
                                            <div className = 'section-title-type'>string</div>
                                            <div className = 'section-title-required'></div>
                                        </div>
                                        <div className = 'section-description'>API version to be used</div>
                                    </div>
                                    <div className = 'form-section-child'><input type="text" value = {x_api_version} onChange = {(e) => {setX_api_version(e.target.value)}}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'api-footer'>
                        <div className = 'api-footer-time'>
                            <FontAwesomeIcon icon = {faStopwatch}/> Updated about 1 month ago
                        </div>
                        <div className = 'api-footer-next-prev'>
                            <Link to = '/references/endpoints'>
                            <span className = 'api-footer-prev'>
                                <FontAwesomeIcon icon = {faArrowLeft} /> Endpoints
                            </span>
                            </Link>
                            <Link to = '/references/getpaymentsfororder'>
                            <span className = 'api-footer-next'>
                                Get Payments for Order <FontAwesomeIcon icon = {faArrowRight} />
                            </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className = 'api-code'>
                    <div className = 'api-code-header'>Language</div>
                    <div className = 'api-code-language-picker'>
                        <div className = {`language-section ${activeScreenIndex === 0 && 'active'}`} onClick = {() => {setActiveScreenIndex(0)}}>cURL</div>
                        <div className = {`language-section ${activeScreenIndex === 1 && 'active'}`} onClick = {() => {setActiveScreenIndex(1)}}>Node</div>
                        <div className = {`language-section ${activeScreenIndex === 2 && 'active'}`} onClick = {() => {setActiveScreenIndex(2)}}>Ruby</div>
                        <div className = {`language-section ${activeScreenIndex === 3 && 'active'}`} onClick = {() => {setActiveScreenIndex(3)}}>PHP</div>
                        <div className = {`language-section ${activeScreenIndex === 4 && 'active'}`} onClick = {() => {setActiveScreenIndex(4)}}>Python</div>
                    </div>
                    <div className="codeSnippet">
                        <div className = 'codeHeader'>
                            REQUEST
                        </div>
                        {activeScreenIndex === 0 && <div className = 'codeBody'>
                            <div className = 'codeLine'><span className = 'orangeCodeLine'>curl</span> --request <span className = 'whiteCodeLine'>POST \</span></div>
                            <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--url</span> https://sandbox.cashfree.com/pg/orders <span className = 'whiteCodeLine'>\</span></div>
                            <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'Accept: application/json' <span className = 'whiteCodeLine'>\</span></div>
                            <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'Content-Type: application/json' <span className = 'whiteCodeLine'>\</span></div>
                            {x_api_version !== '' && <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'x-api-version: {x_api_version}' <span className = 'whiteCodeLine'>\</span></div>}
                            {x_client_id !== '' && <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'x-client-id: {x_client_id}' <span className = 'whiteCodeLine'>\</span> </div>}
                            {x_client_secret !== '' && <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'x-client-secret: {x_client_secret}' <span className = 'whiteCodeLine'>\</span></div>}
                            {data && (<><div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--data</span> '</div>
                            <div className = 'codeLine'>{`${'{'}`}</div>
                            {customer_details && <><div className = 'codeLine p-10'>"customer_details": {`${'{'}`}</div>
                            {customer_id !== '' && <div className = 'codeLine p-20'>"customer_id": {customer_id},</div>}
                            {customer_email !== '' && <div className = 'codeLine p-20'>"customer_email": {customer_email},</div>}
                            {customer_phone !== '' && <div className = 'codeLine p-20'>"customer_phone": {customer_phone},</div>}
                            {customer_bank_account_number !== '' && <div className = 'codeLine p-20'>"customer_bank_account_number": {customer_bank_account_number},</div>}
                            {customer_bank_ifsc !== '' && <div className = 'codeLine p-20'>"customer_bank_ifsc": {customer_bank_ifsc},</div>}
                            {customer_bank_code !== '' && <div className = 'codeLine p-20'>"customer_bank_code": {customer_bank_code},</div>}
                            <div className = 'codeLine p-10'>{`${'}'}`},</div></>}
                            {order_meta && <><div className = 'codeLine p-10'>"order_meta": {`${'{'}`}</div>
                            {return_url !== '' && <div className = 'codeLine p-20'>"return_url": {return_url},</div>}
                            {notify_url !== '' && <div className = 'codeLine p-20'>"notify_url": {notify_url},</div>}
                            {payment_methods !== '' && <div className = 'codeLine p-20'>"payment_methods": {payment_methods},</div>}
                            <div className = 'codeLine p-10'>{`${'}'}`},</div></>}
                            {order_id !== '' && <div className = 'codeLine p-10'>"order_id": {order_id}</div>}
                            {order_amount !== '' && <div className = 'codeLine p-10'>"order_amount": {order_amount}</div>}
                            {order_currency !== '' && <div className = 'codeLine p-10'>"order_currency": {order_currency}</div>}
                            <div className = 'codeLine'>{`${`}`}`}</div></>)}

                        </div>}
                        {
                            activeScreenIndex === 1 && <div className = 'codeBody'>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>const</span> <span className = 'blueCodeLine'>sdk</span> <span className = 'whiteCodeLine'> = </span> <span className = 'redCodeLine'>require</span><span className = 'whiteCodeLine'>(</span>'api'<span className = 'whiteCodeLine'>)(</span>'@cashfreedocs-new/v1#ckve37kvwftrw8'<span className = 'whiteCodeLine'>);</span> </div>
                                <div className = 'codeLine'></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>sdk</span><span className = 'whiteCodeLine'>.</span><span className = 'purpleCodeLine'>CreateOrder</span><span className = 'whiteCodeLine'>({`${`{`}`}</span></div>
                                {customer_details && <><div className = 'codeLine p-10'>customer_details: <span className = 'whiteCodeLine'>{`${`{`}`}</span></div>
                                {customer_id && <div className = 'codeLine p-20'>customer_id: {customer_id},</div>}
                                {customer_email && <div className = 'codeLine p-20'>customer_email: {customer_email},</div>}
                                {customer_phone && <div className = 'codeLine p-20'>customer_phone: {customer_phone},</div>}
                                {customer_bank_account_number && <div className = 'codeLine p-20'>customer_bank_account_number: {customer_bank_account_number},</div>}
                                {customer_bank_ifsc && <div className = 'codeLine p-20'>customer_bank_ifsc: {customer_bank_ifsc},</div>}
                                {customer_bank_code && <div className = 'codeLine p-20'>customer_bank_code: {customer_bank_code},</div>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`}`}`},</span></div></>}
                                <div className = 'codeLine'></div>
                                {order_meta && <><div className = 'codeLine p-10'>order_meta: <span className = 'whiteCodeLine'>{`${`{`}`}</span></div>
                                {return_url && <div className = 'codeLine p-20'>return_url: {return_url},</div>}
                                {notify_url && <div className = 'codeLine p-20'>notify_url: {notify_url},</div>}
                                {payment_methods && <div className = 'codeLine p-20'>payment_methods: {payment_methods},</div>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`}`}`},</span></div></>}
                                {order_amount && <div className = 'codeLine p-10'>order_amount: {`${order_amount}`}</div>}
                                {order_id && <div className = 'codeLine p-10'>order_id: {`${order_id}`}</div>}
                                {order_currency && <div className = 'codeLine p-10'>order_currency: {`${order_currency}`}</div>}
                                {(x_client_id !== '' || x_client_secret !== '' || x_api_version !== '') && <><div className = 'codeLine p-10'><div className = 'whiteCodeLine'>{`${`}, {`}`}</div></div>
                                {x_client_id && <div className = 'codeLine p-20'>'x-client-id': {`${x_client_id}`}</div>}
                                {x_client_secret && <div className = 'codeLine p-20'>'x-client-secret': {`${x_client_secret}`}</div>}
                                {x_api_version && <div className = 'codeLine p-20'>'x-api-version': {`${x_api_version}`}</div>}</>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`})`}`},</span></div>
                            </div>
                        }
                        {
                            activeScreenIndex === 2 && <div className = 'codeBody'>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>require</span> 'uri'</div>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>require</span> 'net/http'</div>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>require</span> 'openssl'</div>
                                <div className = 'codeLine'></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>url</span><span className = 'blueCodeLine'> = </span> <span className = 'redCodeLine'> URI</span><span className = 'whiteCodeLine'>(</span>"https://sandbox.cashfree.com/pg/orders"<span className = 'whiteCodeLine'>)</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>http </span><span className = 'blueCodeLine'> = </span><span className = 'orangeCodeLine'>Net::HTTP.</span><span className = 'purpleCodeLine'>new</span><span className = 'whiteCodeLine'>(</span><span className = 'redCodeLine'>url.host, url.port</span><span className = 'whiteCodeLine'>)</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>http.</span><span className = 'purpleCodeLine'>use_ssl <span className = 'blueCodeLine'>=</span> true</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'blueCodeLine'> = </span><span className = 'orangeCodeLine'>Net::HTTP::Post.</span><span className = 'purpleCodeLine'>new</span><span className = 'whiteCodeLine'>(</span><span className = 'redCodeLine'>url</span><span className = 'whiteCodeLine'>)</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"Accept"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> application/json </div>
                                {x_client_id && <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"x-client-id"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> {x_client_id} </div>}
                                {x_client_secret && <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"x-client-secret"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> {x_client_secret} </div>}
                                {x_api_version && <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"x-api-version"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> {x_api_version} </div>}
                                <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"Content-Type"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> application/json </div>
                                {data && <div className = 'codeLine'><span className = 'redCodeLine'>request.body</span><span className = 'blueCodeLine'> = </span><span className = 'whiteCodeLine'>{`${`{`}`}</span></div>}
                                {customer_details && <><div className = 'codeLine p-10'>customer_details: <span className = 'whiteCodeLine'>{`${`{`}`}</span></div>
                                {customer_id && <div className = 'codeLine p-20'>customer_id: {customer_id},</div>}
                                {customer_email && <div className = 'codeLine p-20'>customer_email: {customer_email},</div>}
                                {customer_phone && <div className = 'codeLine p-20'>customer_phone: {customer_phone},</div>}
                                {customer_bank_account_number && <div className = 'codeLine p-20'>customer_bank_account_number: {customer_bank_account_number},</div>}
                                {customer_bank_ifsc && <div className = 'codeLine p-20'>customer_bank_ifsc: {customer_bank_ifsc},</div>}
                                {customer_bank_code && <div className = 'codeLine p-20'>customer_bank_code: {customer_bank_code},</div>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`}`}`},</span></div></>}
                                <div className = 'codeLine'></div>
                                {order_meta && <><div className = 'codeLine p-10'>order_meta: <span className = 'whiteCodeLine'>{`${`{`}`}</span></div>
                                {return_url && <div className = 'codeLine p-20'>return_url: {return_url},</div>}
                                {notify_url && <div className = 'codeLine p-20'>notify_url: {notify_url},</div>}
                                {payment_methods && <div className = 'codeLine p-20'>payment_methods: {payment_methods},</div>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`}`}`},</span></div></>}
                                {order_amount && <div className = 'codeLine p-10'>order_amount: {`${order_amount}`}</div>}
                                {order_id && <div className = 'codeLine p-10'>order_id: {`${order_id}`}</div>}
                                {order_currency && <div className = 'codeLine p-10'>order_currency: {`${order_currency}`}</div>}
                                {data && <div className = 'codeLine'><span className = 'whiteCodeLine'>{`${`}`}`}</span></div>}
                                <div className = 'codeLine'><span className = 'redCodeLine'>response</span><span className = 'whiteCodeLine'> = </span><span className = 'redCodeLine'>http.</span><span className = 'purpleCodeLine'>request</span><span className="whiteCodeLine">(</span><span className="redCodeLine">request</span><span className="whiteCodeLine">)</span></div>
                                <div className="codeLine"><span className="redCodeLine">puts response.body</span></div>
                            </div>
                        }
                        {
                            activeScreenIndex === 3 && <div className="codeBody">
                                <div className="codeLine"><span className="blueCodeLine">{`${`<?`}`}</span><span className="redCodeLine">php</span></div>
                                <div className="codeLine"><span className="purpleCodeLine">require_once</span><span className="whiteCodeLine">(</span>'vendor/autoload.php'<span className="whiteCodeLine">);</span></div>
                                <div className="codeLine"></div>
                                <div className="codeLine"><span className="whiteCodeLine">$client</span><span className="blueCodeLine"> = </span><span className="purpleCodeLine">new</span><span className="redCodeLine"> \GuzzleHttp\Client</span><span className="whiteCodeLine">();</span></div>
                                <div className="codeLine"><span className="whiteCodeLine">$response</span><span className="blueCodeLine"> = </span> <span className="whiteCodeLine">$client</span><span className="blueCodeLine"> {`${`->`}`} </span><span className="redCodeLine">request</span><span className="whiteCodeLine">(</span>'POST', 'https://sandbox.cashfree.com/pg/orders, <span className="whiteCodeLine">[</span></div>
                                {data && <div className = 'codeLine'>'body'<span className = 'blueCodeLine'> {`${`=>`}`} </span><span className = 'whiteCodeLine'>{`${`{`}`}</span></div>}
                                {customer_details && <><div className = 'codeLine p-10'>customer_details: <span className = 'whiteCodeLine'>{`${`{`}`}</span></div>
                                {customer_id && <div className = 'codeLine p-20'>customer_id: {customer_id},</div>}
                                {customer_email && <div className = 'codeLine p-20'>customer_email: {customer_email},</div>}
                                {customer_phone && <div className = 'codeLine p-20'>customer_phone: {customer_phone},</div>}
                                {customer_bank_account_number && <div className = 'codeLine p-20'>customer_bank_account_number: {customer_bank_account_number},</div>}
                                {customer_bank_ifsc && <div className = 'codeLine p-20'>customer_bank_ifsc: {customer_bank_ifsc},</div>}
                                {customer_bank_code && <div className = 'codeLine p-20'>customer_bank_code: {customer_bank_code},</div>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`}`}`},</span></div></>}
                                <div className = 'codeLine'></div>
                                {order_meta && <><div className = 'codeLine p-10'>order_meta: <span className = 'whiteCodeLine'>{`${`{`}`}</span></div>
                                {return_url && <div className = 'codeLine p-20'>return_url: {return_url},</div>}
                                {notify_url && <div className = 'codeLine p-20'>notify_url: {notify_url},</div>}
                                {payment_methods && <div className = 'codeLine p-20'>payment_methods: {payment_methods},</div>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`}`}`},</span></div></>}
                                {order_amount && <div className = 'codeLine p-10'>order_amount: {`${order_amount}`}</div>}
                                {order_id && <div className = 'codeLine p-10'>order_id: {`${order_id}`}</div>}
                                {order_currency && <div className = 'codeLine p-10'>order_currency: {`${order_currency}`}</div>}
                                {data && <div className = 'codeLine'><span className = 'whiteCodeLine'>{`${`}`}`}</span></div>}
                                <div className="codeLine">'headers' <span className="blueCodeLine">{`${`=>`}`}</span> <span className="whiteCodeLine">[</span></div>
                                <div className="codeLine">'Accept' <span className="blueCodeLine">{`${`=>`}`}</span> 'application/json',</div>
                                <div className="codeLine">'Content-Type' <span className="blueCodeLine">{`${`=>`}`}</span> 'application/json',</div>
                                {x_api_version && <div className="codeLine">'x-api-version' <span className="blueCodeLine">{`${`=>`}`}</span> {x_api_version},</div>}
                                {x_client_id && <div className="codeLine">'x-client-id' <span className="blueCodeLine">{`${`=>`}`}</span> {x_client_id},</div>}
                                {x_client_secret && <div className="codeLine">'x-client-secret' <span className="blueCodeLine">{`${`=>`}`}</span> {x_client_secret},</div>}
                                <div className="codeLine"><span className="whiteCodeLine">],</span></div>
                                <div className="codeLine"><span className="whiteCodeLine">]);</span></div>
                            </div>
                        }
                        {
                            activeScreenIndex === 4 && <div className="codeBody">
                                <div className="codeLine"><span className="purpleCodeLine">import</span><span className="redCodeLine"> requests</span></div>
                                <div className="codeLine"></div>
                                <div className="codeLine"><span className="redCodeLine">url</span><span className="blueCodeLine"> = </span>"https://sandbox.cashfree.com/pg/orders"</div>
                                <div className="codeLine"><span className="redCodeLine">payload</span><span className="blueCodeLine"> = </span><span className="whiteCodeLine">{`${`{`}`}</span></div>
                                {data && (<>
                                {customer_details && <><div className = 'codeLine p-10'>"customer_details": {`${'{'}`}</div>
                                {customer_id !== '' && <div className = 'codeLine p-20'>"customer_id": {customer_id},</div>}
                                {customer_email !== '' && <div className = 'codeLine p-20'>"customer_email": {customer_email},</div>}
                                {customer_phone !== '' && <div className = 'codeLine p-20'>"customer_phone": {customer_phone},</div>}
                                {customer_bank_account_number !== '' && <div className = 'codeLine p-20'>"customer_bank_account_number": {customer_bank_account_number},</div>}
                                {customer_bank_ifsc !== '' && <div className = 'codeLine p-20'>"customer_bank_ifsc": {customer_bank_ifsc},</div>}
                                {customer_bank_code !== '' && <div className = 'codeLine p-20'>"customer_bank_code": {customer_bank_code},</div>}
                                <div className = 'codeLine p-10'>{`${'}'}`},</div></>}
                                {order_meta && <><div className = 'codeLine p-10'>"order_meta": {`${'{'}`}</div>
                                {return_url !== '' && <div className = 'codeLine p-20'>"return_url": {return_url},</div>}
                                {notify_url !== '' && <div className = 'codeLine p-20'>"notify_url": {notify_url},</div>}
                                {payment_methods !== '' && <div className = 'codeLine p-20'>"payment_methods": {payment_methods},</div>}
                                <div className = 'codeLine p-10'>{`${'}'}`},</div></>}
                                {order_id !== '' && <div className = 'codeLine p-10'>"order_id": {order_id}</div>}
                                {order_amount !== '' && <div className = 'codeLine p-10'>"order_amount": {order_amount}</div>}
                                {order_currency !== '' && <div className = 'codeLine p-10'>"order_currency": {order_currency}</div>}
                                <div className="codeLine"><span className="whiteCodeLine">{`${`}`}`}</span></div>
                                </>)}
                                <div className="codeLine"><span className="redCodeLine">headers</span><span className="blueCodeLine"> = </span><span className="whiteCodeLine">{`${`{`}`}</span></div>
                                <div className = 'codeLine p-10'> 'Accept: application/json' <span className = 'whiteCodeLine'>,</span></div>
                                <div className = 'codeLine p-10'> 'Content-Type: application/json' <span className = 'whiteCodeLine'>,</span></div>
                                {x_api_version !== '' && <div className = 'codeLine p-10'> 'x-api-version: {x_api_version}' <span className = 'whiteCodeLine'>,</span></div>}
                                {x_client_id !== '' && <div className = 'codeLine p-10'> 'x-client-id: {x_client_id}' <span className = 'whiteCodeLine'>,</span> </div>}
                                {x_client_secret !== '' && <div className = 'codeLine p-10'>'x-client-secret: {x_client_secret}' <span className = 'whiteCodeLine'>,</span></div>}
                                <div className="codeLine"><span className="whiteCodeLine">{`${`}`}`}</span></div>
                                <div className="codeLine"><span className="redCodeLine">response</span><span className="blueCodeLine"> = </span><span className="redCodeLine">requests.</span><span className="purpleCodeLine">request</span><span className="whiteCodeLine">(</span>"POST", <span className="redCodeLine">url, json=payload, headers=headers</span><span className="whiteCodeLine">)</span></div>
                                    
                            </div>
                        }
                    </div>
                    <div className = 'codeFooter'>
                        <button>Copy</button>
                        <button onClick = {() => {fetchApi()}}>Try it!</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </Layout>
)
    }

export default ReferencesCreateOrderPage;