import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ OnAddClick, Text, ClassName }) => (
  <tr className={ClassName}>
    <td colSpan="9">
      <input type="button" className="w3-btn w3-green w3-block w3-ripple" value={`+ ${Text}`} onClick={OnAddClick} />
    </td>
  </tr>
);

Divider.propTypes = {
  OnAddClick: PropTypes.func.isRequired,
  Text: PropTypes.string.isRequired,
  ClassName: PropTypes.string,
};

Divider.defaultProps = {
  ClassName: '',
};

export default Divider;
