import React from 'react';
import Divider from './Divider';

const Row = ({ date, No, Information, Mutation, Sign, Saldo }) => (
  <tbody>
    <tr>
      <td>{date}</td>
      <td>{No}</td>
      <td>{Information}</td>
      <td>{Mutation.Debit}</td>
      <td>{Mutation.Credit}</td>
      <td>{Sign}</td>
      <td>{Saldo.Saldo1}</td>
      <td>{Saldo.Saldo2}</td>
    </tr>
    <Divider />
  </tbody>
);

export default Row;