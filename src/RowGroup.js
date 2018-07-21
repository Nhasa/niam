import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Divider from './Divider';
import Payment from './Payment';
import { Customer } from './Constants';

const RowGroup = (props) => {
  const {
    OnAddClick, Id, Payments, OnDeleteClick, OnCreditChange, OnDebitChange, OnDateChange,
  } = props;

  return (
    <tbody>
      <Row
        {...props}
        OnDeleteClick={() => OnDeleteClick({ Id })}
        OnCreditChange={({ Value }) => OnCreditChange({ Id, Value })}
        OnDebitChange={({ Value }) => OnDebitChange({ Id, Value })}
        OnDateChange={({ date }) => OnDateChange({ Id, date })}
      />
      {
        Payments.map((payment, index) => (
          <Row
            key={payment.Id}
            {...payment}
            No={index + 1}
            OnDeleteClick={({ PaymentId }) => OnDeleteClick({ Id, PaymentId })}
            OnCreditChange={({ PaymentId, Value }) => OnCreditChange({ Id, PaymentId, Value })}
            OnDebitChange={({ PaymentId, Value }) => OnDebitChange({ Id, PaymentId, Value })}
            OnDateChange={({ PaymentId, date }) => OnDateChange({ Id, PaymentId, date })}
          />
        ))
      }
      <Divider OnAddClick={() => OnAddClick(Id)} Text={Customer.Mutation} />
    </tbody>
  );
};

RowGroup.propTypes = {
  Id: PropTypes.string.isRequired,
  OnAddClick: PropTypes.func.isRequired,
  Payments: PropTypes.arrayOf(PropTypes.instanceOf(Payment)),
  OnDeleteClick: PropTypes.func.isRequired,
  OnDebitChange: PropTypes.func.isRequired,
  OnCreditChange: PropTypes.func.isRequired,
  OnDateChange: PropTypes.func.isRequired,
};

RowGroup.defaultProps = {
  Payments: [],
};

export default RowGroup;
