import * as React from 'react';
import Layout from '../components/layout.js';
import SEO from '../components/seo.js';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAlignJustify, faBookOpen, faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'gatsby';

const DocsPage = () => {
    return (
        <Layout>
            <SEO title = 'Product Documentation'/>
            <div className = 'api_body'>
            <div className = 'header'>
                <div className = 'header-child'>
                    <StaticImage src = {'../images/cashfree.png'} alt = 'Cashfree' width = '100' />
                </div>
                <button className = 'header-child'>
                    Create Account
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
                    <div className = 'menu-option  active'>
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
        </div>
        </Layout>
    )
}

export default DocsPage;