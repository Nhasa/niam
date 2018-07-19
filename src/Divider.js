import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ OnAddClick }) => (
  <tr>
    <td>
      <input type="button" value="+" onClick={OnAddClick} />
    </td>
  </tr>
);

Divider.propTypes = {
  OnAddClick: PropTypes.func.isRequired,
};

export default Divider;
