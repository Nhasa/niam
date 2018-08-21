import uuid from 'uuid';

import Transaction from './Transaction';
import Saldo from './Saldo';

class Customer {
  constructor(customer = {}) {
    this.Id = customer.Id || uuid();

    this.Transactions = customer.Transactions || [];
  }

  static GetUpdatedTransactions(updatedTransactions) {
    let saldo = 0;

    return updatedTransactions.map((transaction) => {
      const updated = new Transaction(transaction);
      const lastPayment = transaction.Payments[transaction.Payments.length - 1];
      saldo += Number(lastPayment ? lastPayment.Saldo.Value : -transaction.Mutation.Credit);
      updated.Saldo = new Saldo(saldo);
      
      return updated;
    });
  };
}

export default Customer;