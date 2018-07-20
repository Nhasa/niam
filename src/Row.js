import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

const Row = ({
  Date, Id,
  No, Information, Mutation, Saldo, OnDateChange, OnDebitChange, OnCreditChange, OnDeleteClick,
}) => {
  const selectedValue = Date ? Moment(Date) : null;

  return (
    <tr>
      <td>
        <DatePicker selected={selectedValue} onChange={OnDateChange} dateFormat="L" />
      </td>
      <td>
        {No}
      </td>
      <td>
        {Information}
      </td>
      <td>
        <input type="text" value={Mutation.Debit} onChange={OnDebitChange} />
      </td>
      <td>
        <input type="text" value={Mutation.Credit} onChange={OnCreditChange} />
      </td>
      <td>
        {Saldo.Sign}
      </td>
      <td>
        {Saldo.Saldo1}
      </td>
      <td>
        {Saldo.Saldo2}
      </td>
      <td>
        <input type="button" value="X" onClick={() => OnDeleteClick({ PaymentId: Id })} />
      </td>
    </tr>
  );
};

Row.propTypes = {
  Id: PropTypes.string.isRequired,
  Date: PropTypes.instanceOf(Moment).isRequired,
  No: PropTypes.number.isRequired,
  Information: PropTypes.string.isRequired,
  Mutation: PropTypes.shape({}).isRequired,
  Saldo: PropTypes.shape({}).isRequired,
  OnDateChange: PropTypes.func.isRequired,
  OnCreditChange: PropTypes.func.isRequired,
  OnDebitChange: PropTypes.func.isRequired,
  OnDeleteClick: PropTypes.func.isRequired,
};

export default Row;
