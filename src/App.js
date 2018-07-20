import React, {
  Component,
} from 'react';

import { Transaction as TRANSACTION } from './Constants';
import Header from './Header';
import Transaction from './Transaction';
import Divider from './Divider';
import Payment from './Payment';
import RowGroup from './RowGroup';

const tableStyle = {
  width: '100%',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Transactions: [],
    };

    this.OnAddTransaction = this.OnAddTransaction.bind(this);
    this.OnAddPayment = this.OnAddPayment.bind(this);
    this.OnNewCustomer = this.OnNewCustomer.bind(this);
  }

  OnAddTransaction() {
    this.setState(prevState => ({
      Transactions: [...prevState.Transactions, new Transaction()],
    }));
  }

  OnAddPayment(Id) {
    this.setState(prevState => ({
      Transactions: prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          transaction.Payments.push(new Payment());
        }

        return transaction;
      }),
    }));
  }

  OnNewCustomer() {
    this.setState({
      Transactions: [],
    });
  }

  render() {
    const {
      Transactions,
    } = this.state;

    return (
      <div>
        <input type="button" value="Kustomer Baru" onClick={this.OnNewCustomer} />
        <table
          border="1"
          style={
            tableStyle
          }
        >
          <Header />
          {
            Transactions.map(transaction => (
              <RowGroup
                key={transaction.Id}
                {...transaction}
                OnAddClick={this.OnAddPayment}
              />
            ))
          }
          <tbody>
            <Divider OnAddClick={this.OnAddTransaction} Text={TRANSACTION.Transaction} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
