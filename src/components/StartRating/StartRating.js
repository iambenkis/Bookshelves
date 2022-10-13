import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
    return (
        <div>
            {[...Array(5)].map((s,i)=>
                <FaStar
                    className="star"
                    color={ props.star <= i + 1 ? "#777" : "#ffc107" }
                />
            )}
        </div>
    )
}

export default StarRating;