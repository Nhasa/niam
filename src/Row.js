import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';

const Row = ({
  Date,
  Id: PaymentId,
  No,
  Information,
  Mutation,
  Saldo,
  OnDateChange,
  OnDebitChange,
  OnCreditChange,
  OnDeleteClick,
  Payments,
  OnInformationChange,
}) =>
  (
    <tr>
      <td>
        <DatePicker selected={Date} onChange={Value => OnDateChange({ PaymentId, Value })} dateFormat="L" />
      </td>
      <td>
        {
          No > 0
            ? No
            : null
        }
      </td>
      <td>
        {<input type="text" value={Information} onChange={e => OnInformationChange({ PaymentId, Value: e.target.value })} />}
      </td>
      <td>
        {
          !Payments
            ? <input type="text" value={Mutation.Debit} onChange={e => OnDebitChange({ PaymentId, Value: e.target.value })} />
            : <div />
        }
      </td>
      <td>
        {
          Payments
            ? <input type="text" value={Mutation.Credit} onChange={e => OnCreditChange({ PaymentId, Value: e.target.value })} />
            : <div />
        }
      </td>
      <td>
        {Saldo.Sign}
      </td>
      <td>
        {
          Saldo.Sign ? Saldo.Saldo1 : null
        }
      </td>
      <td>
        {
          !Saldo.Sign ? Saldo.Saldo2 : null
        }
      </td>
      <td>
        <input type="button" value="X" onClick={() => OnDeleteClick({ PaymentId })} />
      </td>
    </tr>
  );

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
  Payments: PropTypes.arrayOf(PropTypes.shape({})),
  OnInformationChange: PropTypes.func.isRequired,
};

Row.defaultProps = {
  Payments: null,
};

export default Row;
