/* eslint-disable react/prop-types */
import "./PropertyComponent.css"

export default function PropertyComponent ({name,price,rating,}) {
    

    return (
        <div className="PropertyComponent">
        <h2>{name}</h2>
        <h3>${price} a night</h3>
        <h4>{rating} Star</h4>
        </div>
    )

}