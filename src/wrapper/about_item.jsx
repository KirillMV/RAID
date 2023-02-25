import React from "react";



function AboutaItem(props){

    return(
        <div>
            <p>{`${props.country}→${props.city}`}</p>
            <p>{`$ ${props.price}/month`}</p>
            <p>{`${props.description}`}</p>
            <img src={props.picture_url} alt="" />
<div>
    {props.features_on.map(el=><p key={el}>✓{el}</p>)}
    {props.features_off.map(el=><p key={el}>×{el}</p>)}
</div>


        </div>
    )

}
export default AboutaItem;