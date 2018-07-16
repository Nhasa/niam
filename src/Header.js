import React from 'react';
import { Customer, Mutation, Saldo } from './Constants';

const Header = () => (
  <thead>
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
        {Customer.Mutation}
      </th>
      <th rowSpan="2">
        {Customer.Sign}
      </th>
      <th colSpan="2">
        {Customer.Saldo}
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

export default Header;
