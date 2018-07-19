import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

const Row = ({
  Date, No, Information, Mutation, Sign, Saldo,
}) => (
  <tr>
    <td>
      <DatePicker selected={Moment(Date)} onChange={() => { }} dateFormat="L" />
    </td>
    <td>
      {No}
    </td>
    <td>
      {Information}
    </td>
    <td>
      <input type="text" value={Mutation.Debit} />
    </td>
    <td>
      <input type="text" value={Mutation.Credit} />
    </td>
    <td>
      {Sign}
    </td>
    <td>
      {Saldo.Saldo1}
    </td>
    <td>
      {Saldo.Saldo2}
    </td>
  </tr>
);

Row.propTypes = {
  Date: PropTypes.string.isRequired,
  No: PropTypes.number.isRequired,
  Information: PropTypes.string.isRequired,
  Mutation: PropTypes.shape({}).isRequired,
  Sign: PropTypes.string.isRequired,
  Saldo: PropTypes.shape({}).isRequired,
};

export default Row;
