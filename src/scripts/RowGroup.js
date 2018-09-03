import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Divider from './Divider';
import Payment from './Payment';
import { Customer } from './Constants';

const RowGroup = (props) => {
  const {
    OnAddClick,
    Id,
    Payments,
    OnDeleteClick,
    OnCreditChange,
    OnDebitChange,
    OnDateChange,
    OnInformationChange,
  } = props;

  const payments = Payments.map(payment => (
    <Row
      key={payment.Id}
      {...payment}
      OnDeleteClick={args => OnDeleteClick({ ...args, Id })}
      OnCreditChange={args => OnCreditChange({ ...args, Id })}
      OnDebitChange={args => OnDebitChange({ ...args, Id })}
      OnDateChange={args => OnDateChange({ ...args, Id })}
      OnInformationChange={args => OnInformationChange({ ...args, Id })}
    />
  ))

  return (
    <tbody>
      <Row
        {...props}
        OnDeleteClick={() => OnDeleteClick({ Id })}
        OnCreditChange={args => OnCreditChange({ ...args, Id })}
        OnDebitChange={args => OnDebitChange({ ...args, Id })}
        OnDateChange={args => OnDateChange({ ...args, Id })}
        OnInformationChange={args => OnInformationChange({ ...args, Id })}
      />
      {payments}
      <Divider ClassName="w3-light-gray" OnAddClick={() => OnAddClick(Id)} Text={Customer.Mutation} />
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
  OnInformationChange: PropTypes.func.isRequired,
};

RowGroup.defaultProps = {
  Payments: [],
};

export default RowGroup;
