import React, {
  Component,
} from 'react';

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

  render() {
    const {
      Transactions,
    } = this.state;
    return (
      <div>
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
          <Divider OnAddClick={this.OnAddTransaction} />
        </table>
      </div>
    );
  }
}

export default App;
