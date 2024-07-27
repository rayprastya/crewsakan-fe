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
			<form className="d-flex flex-column">
				<label htmlFor="name">Name</label>
				<input onChange={handleEdit} type="text" id="name" name="name"/>
				<label htmlFor="description">Description</label>
				<input onChange={handleEdit} type="text" id="description" name="description"/>
				<label htmlFor="price">Price</label>
				<input onChange={handleEdit} type="number" id="price" name="price"/>
				<button type="submit" className="btn btn-primary">Submit new Product</button>
			</form>
		</div>
	)
}