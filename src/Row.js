import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import CurrencyFormat from 'react-currency-format';

const redColorStyle = {
  color: 'red',
};

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
}) => {
  const style = Payments ? {} : redColorStyle;

  return (
    <tr>
      <td>
        <DatePicker className="w3-input w3-border " selected={Date} onChange={Value => OnDateChange({ PaymentId, Value })} dateFormat="L" />
      </td>
      <td>
        {
          No > 0
            ? (
              <span className="w3-input w3-border-0" style={style}>
                {No}
              </span>
            )
            : <nobr />
        }
      </td>
      <td>
        {
          <input style={style} className="w3-input w3-border" type="text" value={Information} onChange={e => OnInformationChange({ PaymentId, Value: e.target.value })} />
        }
      </td>
      <td>
        {
          !Payments
            ? (
              <CurrencyFormat
                className="w3-input w3-border"
                style={style}
                value={Mutation.Debit}
                decimalSeparator=","
                thousandSeparator="."
                onValueChange={(values) => {
                  const { value } = values;
                  OnDebitChange({ PaymentId, Value: value });
                }}
              />
            )
            : <nobr />
        }
      </td>
      <td>
        {
          Payments
            ? (
              <CurrencyFormat
                className="w3-input w3-border"
                style={style}
                value={Mutation.Credit}
                decimalSeparator=","
                thousandSeparator="."
                onValueChange={(values) => {
                  const { value } = values;
                  OnCreditChange({ PaymentId, Value: value });
                }}
              />
            )
            : <nobr />
        }
      </td>
      <td>
        <span className="w3-input w3-border-0" style={style}>
          {Saldo.Sign}
        </span>
      </td>
      <td>
        {
          !Payments ? (
            <CurrencyFormat
              style={style}
              className="w3-input w3-border-0"
              value={Saldo.AbsValue}
              decimalSeparator=","
              thousandSeparator="."
              displayType="text"
            />
          ) : <nobr />
        }
      </td>
      <td>
        {
          Payments ? (
            <CurrencyFormat
              style={redColorStyle}
              className="w3-input w3-border-0"
              value={Saldo.AbsValue}
              decimalSeparator=","
              thousandSeparator="."
              displayType="text"
            />
          ) : <nobr />
        }
      </td>
      <td>
        <input type="button" className="w3-btn w3-red w3-block w3-ripple" value={`x ${DeleteText}`} onClick={() => OnDeleteClick({ PaymentId })} />
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
  Payments: PropTypes.arrayOf(PropTypes.shape({})),
  OnInformationChange: PropTypes.func.isRequired,
  DeleteText: PropTypes.string.isRequired,
};

Row.defaultProps = {
  Payments: null,
};

export default Row;
