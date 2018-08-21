import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import { Transaction, Customer } from './Constants';

const inputBorderClassName = 'w3-input w3-border';
const inputNoBorderClassName = 'w3-input w3-border-0';
const badgeClassName = `${inputNoBorderClassName} w3-yellow w3-round-large`;
const typeText = 'text';
const thousandSeparator = '.';
const decimalSeparator = ',';

const redColorStyle = {
  color: 'red',
};

const inputWidthStyle = {
  minWidth: '160px',
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
}) => {
  const inputColorStyle = Payments ? {} : redColorStyle;
  const rowClassName = Payments ? '' : 'w3-light-gray';
  const deleteText = Payments ? Transaction.Transaction : Customer.Mutation;
  const inputStyle = {
    ...inputColorStyle,
    ...inputWidthStyle,
  };

  return (
    <tr className={rowClassName}>
      <td>
        <div style={inputWidthStyle} className="datepicker-container">
          <DatePicker className={inputBorderClassName} selected={Date} onChange={Value => OnDateChange({ PaymentId, Value })} dateFormat="L" />
        </div>
      </td>
      <td>
        {
          No > 0
            ? (
              <span className={inputNoBorderClassName} style={inputColorStyle}>
                {No}
              </span>
            )
            : <nobr />
        }
      </td>
      <td>
        {
          <input
            style={inputStyle}
            className={inputBorderClassName}
            type={typeText}
            value={Information}
            onChange={e => OnInformationChange({ PaymentId, Value: e.target.value })}
          />
        }
      </td>
      <td>
        {
          !Payments
            ? (
              <CurrencyFormat
                className={inputBorderClassName}
                style={inputStyle}
                value={Mutation.Debit}
                decimalSeparator={decimalSeparator}
                thousandSeparator={thousandSeparator}
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
                className={inputBorderClassName}
                style={inputStyle}
                value={Mutation.Credit}
                decimalSeparator={decimalSeparator}
                thousandSeparator={thousandSeparator}
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
        {
          Saldo.Sign
            ? (
              <span className={badgeClassName}>
                {Saldo.Sign}
              </span>
            )
            : <nobr />
        }
      </td>
      <td>
        {
          !Payments ? (
            <CurrencyFormat
              style={inputColorStyle}
              className={inputNoBorderClassName}
              value={Saldo.AbsValue}
              decimalSeparator={decimalSeparator}
              thousandSeparator={thousandSeparator}
              displayType={typeText}
            />
          ) : <nobr />
        }
      </td>
      <td>
        {
          Payments ? (
            <CurrencyFormat
              style={redColorStyle}
              className={inputNoBorderClassName}
              value={Saldo.AbsValue}
              decimalSeparator={decimalSeparator}
              thousandSeparator={thousandSeparator}
              displayType={typeText}
            />
          ) : <nobr />
        }
      </td>
      <td>
        <input type="button" title={deleteText} className="w3-btn w3-ripple w3-hover-red" value="X" onClick={() => OnDeleteClick({ PaymentId })} />
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
};

Row.defaultProps = {
  Payments: null,
};

export default Row;
