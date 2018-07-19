import uuid from 'uuid';
import { Sign } from './Constants';
import Mutation from './Mutation';
import Saldo from './Saldo';

class Payment {
  constructor(payment = {}) {
    this.Id = uuid();
    this.Date = payment.date || new Date();
    this.No = payment.No || 0;
    this.Information = payment.Information || null;
    this.Mutation = payment.Mutation || new Mutation();
    this.Sign = payment.Sign || Sign.Plus;
    this.Saldo = payment.Saldo || new Saldo();
  }
}

export default Payment;
