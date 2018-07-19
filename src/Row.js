import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import Divider from './Divider';

const Row = ({
  date, No, Information, Mutation, Sign, Saldo,
}) => (
  <tbody>
    <tr>
      <td>
        <DatePicker selected={Moment(date)} onChange={() => {}} dateFormat="L" />
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
    <Divider />
  </tbody>
);

Row.propTypes = {
  date: PropTypes.string.isRequired,
  No: PropTypes.number.isRequired,
  Information: PropTypes.string.isRequired,
  Mutation: PropTypes.shape({}).isRequired,
  Sign: PropTypes.string.isRequired,
  Saldo: PropTypes.shape({}).isRequired,
};

export default Row;
