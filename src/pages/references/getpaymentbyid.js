import * as React from 'react';
import {Link} from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify, faArrowLeft, faArrowRight,faTimes, faBookOpen, faBars, faCaretRight, faHome, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from 'react';
import GET from '../../components/get';
import POST from '../../components/post';
import axios from 'axios';

const ReferencesGetPaymentByIdPage = () => {

    const [ordersOpen, setOrdersOpen] = useState(false);
    const [paymentsOpen, setPaymentsOpen] = useState(true);
    const [refundsOpen, setRefundsOpen] = useState(false);
    const [settlementsOpen, setSettlementsOpen] = useState(false);
    const [paymentlinksOpen, setPaymentLinksOpen] = useState(false);
    const [order_id, setOrder_id] = useState('');   
    const [cf_payment_id, setCf_payment_id] = useState('');   
    const [x_client_id, setX_client_id] = useState('');
    const [x_client_secret, setX_client_secret] = useState('');
    const [x_api_version, setX_api_version] = useState('');
    const [data, setData] = useState(false);
    const [activeScreenIndex, setActiveScreenIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const alterState = (state, setState) => {
        const prevState = state;
        setState(!prevState);
    }

    const fetchApi = async () => {
        
    }


    useEffect(() => {
        if( order_id){
            setData(true)
        }
        else{
            setData(false)
        }
    }, [ order_id])

    return(
    <Layout>
        <Seo title = 'Get Payment by ID'/>
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
                            <li className = 'active'><span className = 'list-title'>Get Payment by ID</span><GET/></li>
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
                <div className="api-body-code">
                <div className = 'api-content'>
                    <div className = 'api-heading'>
                       Get Payment by ID
                    </div>
                    <div className = 'api-subheading'>
                        <GET/> <span style = {{paddingLeft: '5px'}}>https://sandbox.cashfree.com/pg/orders/{`${`{order_id}`}`}/payments/{`${`{cf_payement_id}`}`}</span>
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
                                            <div className = 'section-title-required'>required</div>
                                        </div>
                                        <div className = 'section-description'>Order identifier present in your system. Alphanumeric and only - and _ allowed.</div>
                                    </div>
                                    <div className = 'form-section-child required'><input type="text" value = {order_id} onChange = {(e) => {setOrder_id(e.target.value)}} /></div>
                                </div>
                                <div className = 'form-section'>
                                    <div className = 'form-section-child'>
                                        <div className = 'section-header'>
                                            <div className = 'section-title'>cf_payment_id</div>
                                            <div className = 'section-title-type'>integer</div>
                                            <div className = 'section-title-required'>required</div>
                                        </div>
                                        <div className = 'section-description'>Cashfree payment ID to view the payment details of an order.</div>
                                    </div>
                                    <div className = 'form-section-child required'><input type="text" value = {cf_payment_id} onChange = {(e) => {setCf_payment_id(e.target.value)}} /></div>
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
                            <Link to = '/references/getpaymentsfororder'>
                            <span className = 'api-footer-prev'>
                                <FontAwesomeIcon icon = {faArrowLeft} /> Get Payments for Order
                            </span>
                            </Link>
                            <Link to = '/references/getSettlements'>
                            <span className = 'api-footer-next'>
                                Get Settlements <FontAwesomeIcon icon = {faArrowRight} />
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
                            <div className = 'codeLine'><span className = 'orangeCodeLine'>curl</span> --request <span className = 'whiteCodeLine'>GET \</span></div>
                            <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--url</span> https://sandbox.cashfree.com/pg/orders/{`${order_id !== '' ? order_id : 'order_id'}`}/payments/{`${cf_payment_id !== '' ? cf_payment_id: 'cf_payment_id'}`} <span className = 'whiteCodeLine'>\</span></div>
                            <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'Accept: application/json' <span className = 'whiteCodeLine'>\</span></div>
                            <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'Content-Type: application/json' <span className = 'whiteCodeLine'>\</span></div>
                            {x_api_version !== '' && <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'x-api-version: {x_api_version}' <span className = 'whiteCodeLine'>\</span></div>}
                            {x_client_id !== '' && <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'x-client-id: {x_client_id}' <span className = 'whiteCodeLine'>\</span> </div>}
                            {x_client_secret !== '' && <div className = 'codeLine p-10'><span className = 'purpleCodeLine'>--header</span> 'x-client-secret: {x_client_secret}' <span className = 'whiteCodeLine'>\</span></div>}
                        </div>}
                        {
                            activeScreenIndex === 1 && <div className = 'codeBody'>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>const</span> <span className = 'blueCodeLine'>sdk</span> <span className = 'whiteCodeLine'> = </span> <span className = 'redCodeLine'>require</span><span className = 'whiteCodeLine'>(</span>'api'<span className = 'whiteCodeLine'>)(</span>'@cashfreedocs-new/v1#ckve37kvwftrw8'<span className = 'whiteCodeLine'>);</span> </div>
                                <div className = 'codeLine'></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>sdk</span><span className = 'whiteCodeLine'>.</span><span className = 'purpleCodeLine'>GetPaymentByID</span><span className = 'whiteCodeLine'>({`${`{`}`}</span></div>
                                <div className = 'codeLine'></div>
                                {order_id && <div className = 'codeLine p-20'>order_id: {`${order_id}`}</div>}           
                                {x_client_id && <div className = 'codeLine p-20'>'x-client-id': {`${x_client_id}`}</div>}
                                {x_client_secret && <div className = 'codeLine p-20'>'x-client-secret': {`${x_client_secret}`}</div>}
                                {x_api_version && <div className = 'codeLine p-20'>'x-api-version': {`${x_api_version}`}</div>}
                                <div className = 'codeLine'><span className = 'whiteCodeLine p-10'>{`${`})`}`},</span></div>
                            </div>
                        }
                        {
                            activeScreenIndex === 2 && <div className = 'codeBody'>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>require</span> 'uri'</div>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>require</span> 'net/http'</div>
                                <div className = 'codeLine'><span className = 'purpleCodeLine'>require</span> 'openssl'</div>
                                <div className = 'codeLine'></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>url</span><span className = 'blueCodeLine'> = </span> <span className = 'redCodeLine'> URI</span><span className = 'whiteCodeLine'>(</span>"https://sandbox.cashfree.com/pg/orders/{`${order_id !== '' ? order_id : 'order_id'}`}/payments/{`${cf_payment_id !== '' ? cf_payment_id: 'cf_payment_id'}`}"<span className = 'whiteCodeLine'>)</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>http </span><span className = 'blueCodeLine'> = </span><span className = 'orangeCodeLine'>Net::HTTP.</span><span className = 'purpleCodeLine'>new</span><span className = 'whiteCodeLine'>(</span><span className = 'redCodeLine'>url.host, url.port</span><span className = 'whiteCodeLine'>)</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>http.</span><span className = 'purpleCodeLine'>use_ssl <span className = 'blueCodeLine'>=</span> true</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'blueCodeLine'> = </span><span className = 'orangeCodeLine'>Net::HTTP::Get.</span><span className = 'purpleCodeLine'>new</span><span className = 'whiteCodeLine'>(</span><span className = 'redCodeLine'>url</span><span className = 'whiteCodeLine'>)</span></div>
                                <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"Accept"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> application/json </div>
                                {x_client_id && <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"x-client-id"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> {x_client_id} </div>}
                                {x_client_secret && <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"x-client-secret"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> {x_client_secret} </div>}
                                {x_api_version && <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"x-api-version"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> {x_api_version} </div>}
                                <div className = 'codeLine'><span className = 'redCodeLine'>request</span><span className = 'whiteCodeLine'>[</span>"Content-Type"<span className = 'whiteCodeLine'>]</span><span className = 'blueCodeLine'> = </span> application/json </div>
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
                                <div className="codeLine"><span className="whiteCodeLine">$response</span><span className="blueCodeLine"> = </span> <span className="whiteCodeLine">$client</span><span className="blueCodeLine"> {`${`->`}`} </span><span className="redCodeLine">request</span><span className="whiteCodeLine">(</span>'GET', 'https://sandbox.cashfree.com/pg/orders/{`${order_id !== '' ? order_id : 'order_id'}`}/payments/{`${cf_payment_id !== '' ? cf_payment_id: 'cf_payment_id'}`}', <span className="whiteCodeLine">[</span></div>
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
                                <div className="codeLine"><span className="redCodeLine">url</span><span className="blueCodeLine"> = </span>"https://sandbox.cashfree.com/pg/orders/{`${order_id !== '' ? order_id : 'order_id'}`}/payments/{`${cf_payment_id !== '' ? cf_payment_id: 'cf_payment_id'}`}"</div>
                                <div className="codeLine"><span className="redCodeLine">headers</span><span className="blueCodeLine"> = </span><span className="whiteCodeLine">{`${`{`}`}</span></div>
                                <div className = 'codeLine p-10'> 'Accept: application/json' <span className = 'whiteCodeLine'>,</span></div>
                                <div className = 'codeLine p-10'> 'Content-Type: application/json' <span className = 'whiteCodeLine'>,</span></div>
                                {x_api_version !== '' && <div className = 'codeLine p-10'> 'x-api-version: {x_api_version}' <span className = 'whiteCodeLine'>,</span></div>}
                                {x_client_id !== '' && <div className = 'codeLine p-10'> 'x-client-id: {x_client_id}' <span className = 'whiteCodeLine'>,</span> </div>}
                                {x_client_secret !== '' && <div className = 'codeLine p-10'>'x-client-secret: {x_client_secret}' <span className = 'whiteCodeLine'>,</span></div>}
                                <div className="codeLine"><span className="whiteCodeLine">{`${`}`}`}</span></div>
                                <div className="codeLine"><span className="redCodeLine">response</span><span className="blueCodeLine"> = </span><span className="redCodeLine">requests.</span><span className="purpleCodeLine">request</span><span className="whiteCodeLine">(</span>"GET", <span className="redCodeLine">url, json=payload, headers=headers</span><span className="whiteCodeLine">)</span></div>
                                    
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

export default ReferencesGetPaymentByIdPage;