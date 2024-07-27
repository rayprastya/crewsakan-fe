import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Sidebar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import MerchantMenu from "@/components/list/MerchantMenu";
import menu from "@/data/merchantmenu";
import Link from 'next/link'

export default function MerchantMenuView() {
	return (
		<main>
			<Sidebar/>
			<Topbar/>
			<div className="content d-flex flex-row">
				<div className="col-lg-12 h-100 card">
					<div className="d-flex justify-content-between mt-3 px-3">
						<div>
							<h5>Merchant Menu</h5>
							<h6 className="w-100 d-block">Product that's sold on your merchant profile</h6>
						</div>
						<Link href="/merchant/add" className="text-decoration-none align-self-center">Add new product</Link>
					</div>
					<hr/>
					<MerchantMenu menu={menu}/>
				</div>
			</div>
		</main>
	);
}
