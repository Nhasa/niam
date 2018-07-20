import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Divider from './Divider';
import Payment from './Payment';

const RowGroup = (props) => {
  const {
    OnAddClick, Id, Payments, OnDeleteClick,
  } = props;

  return (
    <tbody>
      <Row {...props} OnDeleteClick={() => OnDeleteClick({ Id })} />
      {Payments.map((payment, index) => (<Row key={payment.Id} {...payment} No={index + 1} OnDeleteClick={({ PaymentId }) => OnDeleteClick({ Id, PaymentId })} />))}
      <Divider OnAddClick={() => OnAddClick(Id)} Text="Mutasi" />
    </tbody>
  );
};

RowGroup.propTypes = {
  Id: PropTypes.string.isRequired,
  OnAddClick: PropTypes.func.isRequired,
  Payments: PropTypes.arrayOf(PropTypes.instanceOf(Payment)),
  OnDeleteClick: PropTypes.func.isRequired,
};

RowGroup.defaultProps = {
  Payments: [],
};

export default RowGroup;
