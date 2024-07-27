import React from 'react';

export default function CookingPlan({clickState}) {
	return (
		<div className={`w-100 card p-2 custom-hover-bg`}>
			{clickState && <>
				<h5>{clickState.name}</h5>
				<div className=" card">
					<div className="btn-group mx-lg-5 my-lg-2">
						<div className="btn btn-primary btn-sm mx-sm-2">Add to Menu</div>
						<div className="btn btn-outline-primary btn-sm mx-sm-2">Remove from Plan</div>
					</div>
				</div>
				<div className="d-flex">
					<img src={clickState.image} style={{height: '100px', width: '100px', borderRadius: '20px'}}
							 alt={clickState.name}/>
					<div className="ms-2 w-100">
						<div className="fw-bold">{clickState.recipes}</div>
						<div className="">{clickState.steps.split('|').map(value => (
							<span className="d-block">{value}</span>
						))}</div>
						<div className="d-flex w-100 justify-content-between">
							<div className="text-warning fw-bold align-self-center" style={{fontSize: '11px'}}>On Progress</div>
						</div>
						<div className="text-success">Rp. 20.000</div>
					</div>
				</div>
			</>
			}
		</div>
	)
}