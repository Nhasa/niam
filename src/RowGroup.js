import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import Row from './Row';
import Divider from './Divider';

const RowGroup = ({
  Date, No, Information, Mutation, Sign, Saldo, OnAddClick, Id, Payments,
}) => (
  <tbody>
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
    {Payments.map(payment => (<Row key={payment.Id} {...payment} />))}
    <Divider OnAddClick={() => OnAddClick(Id)} />
  </tbody>
);

RowGroup.propTypes = {
  Id: PropTypes.string.isRequired,
  Date: PropTypes.string.isRequired,
  No: PropTypes.number.isRequired,
  Information: PropTypes.string.isRequired,
  Mutation: PropTypes.shape({}).isRequired,
  Sign: PropTypes.string.isRequired,
  Saldo: PropTypes.shape({}).isRequired,
  OnAddClick: PropTypes.func.isRequired,
  Payments: PropTypes.arrayOf({}).isRequired,
};

export default RowGroup;
