import uuid from 'uuid';
import Moment from 'moment';
import Saldo from './Saldo';
import Mutation from './Mutation';
import Payment from './Payment';

class Transaction {
  constructor(transaction = {}) {
    this.Id = transaction.Id || uuid();
    this.Date = transaction.Date || Moment();
    this.No = transaction.No || 0;
    this.Information = transaction.Information || '';
    this.Mutation = transaction.Mutation || new Mutation();
    this.Saldo = transaction.Saldo || new Saldo();

    this.Payments = transaction.Payments || [];
  }

  updatePayments() {
    let saldo = -this.Mutation.Credit;

    this.Payments = this.Payments.map((payment) => {
      const updated = new Payment(payment);
      saldo += Number(updated.Mutation.Debit);
      updated.Saldo = new Saldo(saldo);

      return updated;
    });
  }
}

export default Transaction;
