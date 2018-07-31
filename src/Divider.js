import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ OnAddClick, Text }) => (
  <tr>
    <td colSpan="9">
      <input type="button" className="w3-btn w3-green w3-block w3-ripple" value={`+ ${Text}`} onClick={OnAddClick} />
    </td>
  </tr>
);

Divider.propTypes = {
  OnAddClick: PropTypes.func.isRequired,
  Text: PropTypes.string.isRequired,
};

export default Divider;
