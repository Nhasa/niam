import uuid from 'uuid';
import Moment from 'moment';
import Mutation from './Mutation';
import Saldo from './Saldo';

class Payment {
  constructor(payment = {}) {
    this.Id = uuid();
    this.Date = payment.Date || Moment();
    this.No = payment.No || 0;
    this.Information = payment.Information || '';
    this.Mutation = payment.Mutation || new Mutation();
    this.Saldo = payment.Saldo || new Saldo();
  }
}

export default Payment;
