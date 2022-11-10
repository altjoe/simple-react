import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

export default function Table(props) {
    return (
        <div className={props.class}>Test</div>
    );
}
Table.propTypes = {
    'class' : PropTypes.string,
}