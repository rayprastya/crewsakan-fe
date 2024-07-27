import React from 'react';

export default function MerchantMenu({ menu }) {

	return (
    <div className="container my-3">
      <div className="d-flex gap-1 scrollx">
        {menu.map((row, index) => (
					<div className="card mx-md-1" key={index}>
						<div className="d-flex flex-column">
							<img src={'https://via.placeholder.com/150'} style={{height: '300px', width: '300px', borderRadius: '20px'}} alt={row.name}/>
							<h5 className="fw-bold">{row.name}</h5>
							<div className="ms-2 w-100">
								<div className="">{row.description}</div>
								<div className="d-flex w-100 justify-content-between">
									<div className="text-warning fw-bold align-self-center" style={{fontSize: '11px'}}>On Progress</div>
								</div>
								<div className="text-success">Rp{parseFloat(row.price).toLocaleString()}</div>
								<div className="btn-group mx-lg-5 my-lg-2">
									<div className="btn btn-primary btn-sm">Delete product</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}