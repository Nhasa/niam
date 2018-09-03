import React from 'react';
import {
  Customer, Mutation, Saldo, Header as HEADER,
} from './Constants';

const Header = () => {
  const mutationHeader = `${Customer.Mutation} (Rp)`;
  const saldoHeader = `${Customer.Saldo} (Rp)`
  return (
    <thead className="w3-blue">
      <tr>
        <th rowSpan="2">
          {Customer.Date}
        </th>
        <th rowSpan="2">
          {Customer.No}
        </th>
        <th rowSpan="2">
          {Customer.Information}
        </th>
        <th colSpan="2">
          {mutationHeader}
        </th>
        <th rowSpan="2">
          {Customer.Sign}
        </th>
        <th colSpan="2">
          {saldoHeader}
        </th>
        <th rowSpan="2">
          {HEADER.Delete}
        </th>
      </tr>
      <tr>
        <th>
          {Mutation.Debit}
        </th>
        <th>
          {Mutation.Credit}
        </th>
        <th>
          {Saldo.Saldo1}
        </th>
        <th>
          {Saldo.Saldo2}
        </th>
      </tr>
    </thead>
  );
}

export default Header;
