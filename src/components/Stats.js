import React from "react";

const Stats = (props) => {
    return (
        <div><section><span>Current Score: </span><span>{props.count}</span></section><section><span>High Score: </span><span>{props.highScore}</span></section></div>
    );
};

export default Stats;