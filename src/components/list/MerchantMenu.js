import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function MerchantMenu({ menu }) {

	return (
    <div className="container my-3">
      <div className="row g-1">
        {menu.map((row, index) => (
		<div className="col-lg-3 col-md-4 col-6" key={index}>
			<div className="card m-0">
				<img src={'https://via.placeholder.com/150'} className='card-img-top' alt={row.name}/>
				<div className="d-flex flex-column card-body">
					<p className="fw-semibold my-0">{row.name}</p>
					<div className="" style={{fontSize:'14px', minHeight:'42px'}}>{row.description.length >= 73 ? row.description.substring(0,73)+'...' : row.description}</div>
					<div className="text-warning fw-bold my-0" style={{fontSize: '11px'}}>On Progress</div>
					<div className="text-success">Rp{parseFloat(row.price).toLocaleString()}</div>
					<div className="d-flex gap-2" style={{position:'absolute', top:'15px', right:'10px'}}>
						<a href='#' className="btn btn-danger rounded-pill"><FontAwesomeIcon  icon={'trash-alt'}/> </a>
						<a href='#' className="btn btn-primary rounded-pill"><FontAwesomeIcon icon={'pencil-alt'} /></a>
					</div>
				</div>
			</div>
		</div>
		))}
			</div>
		</div>
	);
}