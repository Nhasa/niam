import React, {
  Component,
} from 'react';

import { Mutation, Transaction as TRANSACTION } from './Constants';
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
    this.OnDeleteClick = this.OnDeleteClick.bind(this);
    this.OnDebitChange = this.OnDebitChange.bind(this);
    this.OnCreditChange = this.OnCreditChange.bind(this);
    this.OnMutationChange = this.OnMutationChange.bind(this);
    this.OnDateChange = this.OnDateChange.bind(this);
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

  OnAddTransaction() {
    this.setState(prevState => ({
      Transactions: [...prevState.Transactions, new Transaction()],
    }));
  }

  OnCreditChange({ Id, PaymentId, Value }) {
    this.OnMutationChange({
      Id, PaymentId, Value, Type: 'Credit',
    });
  }

  OnDateChange({ Id, PaymentId, date }) {
    let updateTransactions;
    if (PaymentId) {
      updateTransactions = prevState => (prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedPayment = transaction.Payments.find(payment => payment.Id === PaymentId);
          updatedPayment.Date = date;
        }

        return transaction;
      })
      );
    } else {
      updateTransactions = prevState => (prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedTransaction = new Transaction(transaction);
          updatedTransaction.Date = date;
        }

        return transaction;
      }));
    }

    this.setState(prevState => ({ Transactions: updateTransactions(prevState) }));
  }

  OnDebitChange({ Id, PaymentId, Value }) {
    this.OnMutationChange({
      Id, PaymentId, Value, Type: Mutation.Debit,
    });
  }

  OnDeleteClick({ Id, PaymentId }) {
    let updateTransactions;
    if (PaymentId) {
      updateTransactions = prevState => (prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedTransaction = new Transaction(transaction);
          updatedTransaction.Payments = transaction.Payments.filter(
            payment => payment.Id !== PaymentId,
          );

          return updatedTransaction;
        }

        return transaction;
      })
      );
    } else {
      updateTransactions = prevState =>
        prevState.Transactions.filter(transaction => transaction.Id !== Id);
    }

    this.setState(prevState => ({ Transactions: updateTransactions(prevState) }));
  }

  OnMutationChange({
    Id, PaymentId, Value, Type,
  }) {
    let updateTransactions;
    if (PaymentId) {
      updateTransactions = prevState => (prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedPayment = transaction.Payments.find(payment => payment.Id === PaymentId);
          updatedPayment.Mutation[Type] = Value;
        }

        return transaction;
      })
      );
    } else {
      updateTransactions = prevState => (prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedTransaction = new Transaction(transaction);
          updatedTransaction.Mutation[Type] = Value;
        }

        return transaction;
      }));
    }

    this.setState(prevState => ({ Transactions: updateTransactions(prevState) }));
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
                OnDeleteClick={this.OnDeleteClick}
                OnDebitChange={this.OnDebitChange}
                OnCreditChange={this.OnCreditChange}
                OnDateChange={this.OnDateChange}
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
