import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Sidebar = ({ foods }) => {
  return (<>
  
  <div className="sidebar h6 shadow-sm bg-primary-subtle" id="sidebar">
        <a href="#" className="d-none d-md-block  bg-primary-subtle mb-4"><img src="https://angelhack.com/wp-content/uploads/hackjakarta_logo_white.png" alt="logo" width={"100%"} /></a>
        <Link href="/"><FontAwesomeIcon icon={'home'} /><span className="ms-3 d-none d-sm-block">Main</span></Link>
        <Link href="/plan"><FontAwesomeIcon icon={'lightbulb'} /><span className="ms-3 d-none d-sm-block">Cooking plan</span></Link>
        <a href="/merchant/menu"><FontAwesomeIcon icon={'store-alt'} /><span className="ms-3 d-none d-sm-block">Merchant Menu</span></a>
    </div>
  </>
  );
};

export default Sidebar;
