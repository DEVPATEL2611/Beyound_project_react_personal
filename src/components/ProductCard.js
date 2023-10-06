import React from 'react'
import '../styles/ProductCard.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function ProductCard(props) {
  return ( <div className="product-card" style={{marginTop:"30px"}}>
		<div className="badge">Hot</div>
		<div className="product-tumb">
			<img src={props.product.displayImage} alt="" />
		</div>
		<div className="product-details">
			<h4 className='productName'>{props.product.name}</h4>
			<div className="product-bottom-details">
				<div className="product-price">${props.product.price}</div>
				<div className="product-links">
					<FavoriteBorderIcon />
					<AddShoppingCartIcon />
				</div>
			</div>
		</div>
	</div>
  )
}
