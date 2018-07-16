import React from 'react';
import PropTypes from 'prop-types';
import Divider from './Divider';

const Row = ({
  date, No, Information, Mutation, Sign, Saldo,
}) => (
  <tbody>
    <tr>
      <td>
        {date}
      </td>
      <td>
        {No}
      </td>
      <td>
        {Information}
      </td>
      <td>
        {Mutation.Debit}
      </td>
      <td>
        {Mutation.Credit}
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
