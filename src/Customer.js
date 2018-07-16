import {
  Sign
} from './Constants';
import Mutation from './Mutation';
import Saldo from './Saldo';

class Customer {
  constructor(customer = {}) {
    this.Date = customer.date || new Date();
    this.No = customer.No || 0;
    this.Information = customer.Information || null;
    this.Mutation = customer.Mutation || new Mutation();
    this.Sign = customer.Sign || Sign.Plus;
    this.Saldo = customer.Saldo || new Saldo();
  }
}

export default Customer;