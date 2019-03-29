import "BtnSubmit.css";
import React from 'react';

export default ({clickEvent, text = "Submit"}) => (
    <button onClick={clickEvent}>{text}</button>
);