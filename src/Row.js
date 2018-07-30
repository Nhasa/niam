import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import CurrencyFormat from 'react-currency-format';

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
  DeleteText,
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
            ? (
              <CurrencyFormat
                value={Mutation.Debit}
                decimalSeparator=","
                thousandSeparator="."
                onValueChange={(values) => {
                  const { value } = values;
                  OnDebitChange({ PaymentId, Value: value });
                }}
              />
            )
            : <div />
        }
      </td>
      <td>
        {
          Payments
            ? (
              <CurrencyFormat
                value={Mutation.Credit}
                decimalSeparator=","
                thousandSeparator="."
                onValueChange={(values) => {
                  const { value } = values;
                  OnCreditChange({ PaymentId, Value: value });
                }}
              />
            )
            : <div />
        }
      </td>
      <td>
        {Saldo.Sign}
      </td>
      <td>
        {
          !Payments ? Saldo.AbsValue : null
        }
      </td>
      <td>
        {
          Payments ? Saldo.AbsValue : null
        }
      </td>
      <td>
        <input type="button" value={`x ${DeleteText}`} onClick={() => OnDeleteClick({ PaymentId })} />
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
  DeleteText: PropTypes.string.isRequired,
};

Row.defaultProps = {
  Payments: null,
};

export default Row;
