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
    this.OnMutationChange = this.OnPropChange.bind(this);
    this.OnDateChange = this.OnDateChange.bind(this);
    this.OnInformationChange = this.OnInformationChange.bind(this);
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

  OnCreditChange(props) {
    this.OnPropChange({
      ...props, Type: 'Credit', Prop: 'Mutation',
    });
  }

  OnDateChange(props) {
    this.OnPropChange({
      ...props, Prop: 'Date',
    });
  }

  OnDebitChange(props) {
    this.OnPropChange({
      ...props, Prop: 'Mutation', Type: Mutation.Debit,
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

  OnInformationChange(props) {
    this.OnPropChange({
      ...props, Prop: 'Information',
    });
  }

  OnPropChange({
    Id, PaymentId, Value, Type, Prop,
  }) {
    let updateTransactions;
    if (PaymentId !== Id) {
      updateTransactions = prevState => (prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedPayment = transaction.Payments.find(payment => payment.Id === PaymentId);

          if (Type) {
            updatedPayment[Prop][Type] = Value;
          } else {
            updatedPayment[Prop] = Value;
          }
        }

        return transaction;
      })
      );
    } else {
      updateTransactions = prevState => (prevState.Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedTransaction = new Transaction(transaction);

          if (Type) {
            updatedTransaction[Prop][Type] = Value;
          } else {
            updatedTransaction[Prop] = Value;
          }

          return updatedTransaction;
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
            Transactions.map((transaction, index) => (
              <RowGroup
                key={transaction.Id}
                {...transaction}
                No={index + 1}
                OnAddClick={this.OnAddPayment}
                OnDeleteClick={this.OnDeleteClick}
                OnDebitChange={this.OnDebitChange}
                OnCreditChange={this.OnCreditChange}
                OnDateChange={this.OnDateChange}
                OnInformationChange={this.OnInformationChange}
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
