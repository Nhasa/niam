import uuid from 'uuid';
import Moment from 'moment';
import Saldo from './Saldo';
import Mutation from './Mutation';

class Transaction {
  constructor(transaction = {}) {
    this.Id = uuid();
    this.Date = transaction.Date || Moment();
    this.No = transaction.No || 0;
    this.Information = transaction.Information || '';
    this.Mutation = transaction.Mutation || new Mutation();
    this.Saldo = transaction.Saldo || new Saldo();

    this.Payments = transaction.Payments || [];
  }
}

export default Transaction;
