import uuid from 'uuid';

class Customer {
  constructor(customer = {}) {
    this.Id = uuid();
    this.Transactions = customer.Transactions || [];
  }
}

export default Customer;
