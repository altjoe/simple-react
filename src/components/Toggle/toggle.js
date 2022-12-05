import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

export default function Toggle(props) {
    const [on, setOn] = useState(props.on);

    return (
        <button onClick={props.onClick} value={props.on} className={props.style}/>
    );
}
Toggle.propTypes = {
    'class' : PropTypes.string,
}