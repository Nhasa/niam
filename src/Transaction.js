import uuid from 'uuid';
import { Sign } from './Constants';
import Saldo from './Saldo';
import Mutation from './Mutation';

class Transaction {
  constructor(transaction = {}) {
    this.Id = uuid();
    this.Date = transaction.date || new Date();
    this.No = transaction.No || 0;
    this.Information = transaction.Information || null;
    this.Mutation = transaction.Mutation || new Mutation();
    this.Sign = transaction.Sign || Sign.Plus;
    this.Saldo = transaction.Saldo || new Saldo();

    this.Payments = transaction.Payments || [];
  }
}

export default Transaction;
