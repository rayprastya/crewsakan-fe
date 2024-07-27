import React, {useState} from "react";


export default function MerchantMenuAddComponent() {
	const [formData, setFormData] = useState({
		name: '',
		merchant_id: "0",
		description: "",
		price: 0,
	});

	function handleEdit(e){
		e.preventDefault();
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	}

	return (
		<div>
			<form className="p-3">
				<div className="mb-3">
					<label htmlFor="name">Name</label>
					<input onChange={handleEdit} className="form-control" type="text" id="name" name="name"/>
				</div>
				<div className="mb-3">
					<label htmlFor="description">Description</label>
					<input onChange={handleEdit} className="form-control" type="text" id="description" name="description"/>
				</div>
				<div className="mb-3">
					<label htmlFor="price">Price</label>
					<input onChange={handleEdit} className="form-control" type="number" min={3000} id="price" name="price"/>
				</div>
				<button type="submit" className="btn btn-primary">Submit new Product</button>
			</form>
		</div>
	)
}