import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify, faBookOpen, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className = 'header'>
      <div className = 'header-child'>
        <StaticImage src = {'../images/cashfree.png'} alt = 'Cashfree' width = '100' />
      </div>
      <button className = 'header-child'>
        Create Account
      </button>
    </div>
    <div className = 'main-body'>
      <div className = 'main-body-header'>
        <h1>Cashfree Payments Documentaion</h1>
        <p>Welcome to the Cashfree Payments developer documentation. You will find help about Cashfree Payments products and APIs that will help you start using our products quickly.</p>
        <button className = 'search'>
          <FontAwesomeIcon icon = {faSearch} />
          Search
        </button>
      </div>
      <div className = 'menu'>
        <div className = 'menu-option active'>
          <FontAwesomeIcon icon = {faHome}/>
          Home
        </div>
        <Link to = '/docs/'>
          <div className = 'menu-option'>
            <FontAwesomeIcon icon = {faBookOpen}/>
            Product Demonstration
          </div>
        </Link>
        <Link to = '/references/introduction'>
          <div className = 'menu-option'>
            <FontAwesomeIcon icon = {faAlignJustify}/>
            API Documentation
          </div>
        </Link>
      </div>
      <div className = 'content'>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Getting started</div>
          <ul>
            <li>Create account</li>
            <li>Activate Account</li>
          </ul>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Payment Gateway</div>
          <ul>
            <li>Introduction</li>
            <li>Integrations</li>
            <li>Web Integrationd</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Payment Links</div>
          <ul>
            <li>Introduction</li>
            <li>Create Payment Links</li>
            <li>Create UPI Payment Links</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Payment Forms</div>
          <ul>
            <li>Introduction</li>
            <li>Create Payment Forms</li>
            <li>Orders</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Easy Split</div>
          <ul>
            <li>Introduction</li>
            <li>Add Vendors</li>
            <li>Create a Payment Split</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Payouts</div>
          <ul>
            <li>Introduction</li>
            <li>Payouts Dashboard</li>
            <li>Payouts Account Types</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Global Payouts</div>
          <ul>
            <li>Introduction</li>
            <li>Global Payouts Dashboard</li>
          </ul>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Cashgram</div>
          <ul>
            <li>Introduction</li>
            <li>Create Cashgram</li>
            <li>Create Bulk Cashgram</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Beneficiary Name Verification</div>
          <ul>
            <li>Introduction</li>
            <li>Verify Bank Account Details</li>
            <li>Verify UPI</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Subscription</div>
          <ul>
            <li>Introduction</li>
            <li>Create Plan</li>
            <li>Create and Manage Subscription</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Auto Collect</div>
          <ul>
            <li>Introduction</li>
            <li>Auto Collect Dashboard</li>
            <li>Integration</li>
          </ul>
          <div className = 'content-footer'>View more...</div>
        </div>
        <div className = 'content-box'>
          <div className = 'content-box-heading'>Marketplace Settlement</div>
          <ul>
            <li>Marketplace Settlement</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
