import React from "react";

const Card = (props) => {
    const imageURL = props.imageURL;
    const altText = props.altText;
    const id = props.id;
    const updateCardState = props.updateCardState;
    // if (!imageURL || !altText || !arrayIndex) {
    //     console.log("Missing a prop for Card react component");
    //     return <h4>something missing in card</h4>;
    // } else {
        return <img src={imageURL} alt={altText} id={id} onClick={() => updateCardState(id)} height="200px" width="200px" />;
    // }
};

export default Card;