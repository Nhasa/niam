import React, {
  Component,
} from 'react';

import {
  Mutation,
  Transaction as TRANSACTION,
  App as APP,
} from './Constants';

import Header from './Header';
import Transaction from './Transaction';
import Divider from './Divider';
import Payment from './Payment';
import RowGroup from './RowGroup';
import Saldo from './Saldo';

const Props = {
  Mutation: 'Mutation',
  Date: 'Date',
  Information: 'Information',
};

const Types = {
  Credit: 'Credit',
};

const GetUpdatedPayments = (updatedTransaction) => {
  let saldo = -updatedTransaction.Mutation.Credit;
  return updatedTransaction.Payments.map((payment) => {
    const updated = new Payment(payment);
    saldo += Number(updated.Mutation.Debit);
    updated.Saldo = new Saldo(saldo);
    return updated;
  });
};

const GetUpdatedTransactions = (updatedTransactions) => {
  let saldo = 0;
  return updatedTransactions.map((transaction) => {
    const updated = new Transaction(transaction);
    const lastPayment = transaction.Payments[transaction.Payments.length - 1];
    saldo += Number(lastPayment ? lastPayment.Saldo.Value : -transaction.Mutation.Credit);
    updated.Saldo = new Saldo(saldo);
    return updated;
  });
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
      ...props,
      Type: Types.Credit,
      Prop: Props.Mutation,
    });
  }

  OnDateChange(props) {
    this.OnPropChange({
      ...props,
      Prop: Props.Date,
    });
  }

  OnDebitChange(props) {
    this.OnPropChange({
      ...props,
      Prop: Types.Mutation,
      Type: Mutation.Debit,
    });
  }

  OnDeleteClick({
    Id,
    PaymentId,
  }) {
    let updateTransactions;
    if (PaymentId) {
      updateTransactions = prevState => (
        prevState.Transactions.map((transaction) => {
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

    this.setState(prevState => ({
      Transactions: GetUpdatedTransactions(updateTransactions(prevState)),
    }));
  }

  OnInformationChange(props) {
    this.OnPropChange({
      ...props,
      Prop: Props.Information,
    });
  }

  OnPropChange({
    Id,
    PaymentId,
    Value,
    Type,
    Prop,
  }) {
    let updateTransactions;
    if (PaymentId !== Id) {
      updateTransactions = prevState => (
        prevState.Transactions.map((transaction) => {
          if (transaction.Id === Id) {
            const updatedTransaction = new Transaction(transaction);
            const updatedPayment = updatedTransaction.Payments.find(
              payment => payment.Id === PaymentId,
            );

            if (Type) {
              updatedPayment[Prop][Type] = Value;
            } else {
              updatedPayment[Prop] = Value;
            }

            updatedTransaction.Payments = GetUpdatedPayments(updatedTransaction);

            return updatedTransaction;
          }

          return transaction;
        })
      );
    } else {
      updateTransactions = ({
        Transactions,
      }) => Transactions.map((transaction) => {
        if (transaction.Id === Id) {
          const updatedTransaction = new Transaction(transaction);

          if (Type) {
            updatedTransaction[Prop][Type] = Value;
          } else {
            updatedTransaction[Prop] = Value;
          }

          updatedTransaction.Payments = GetUpdatedPayments(updatedTransaction);

          return updatedTransaction;
        }

        return transaction;
      });
    }

    this.setState(prevState => ({
      Transactions: GetUpdatedTransactions(updateTransactions(prevState)),
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
      <div className="w3-responsive w3-margin w3-card-4">
        <input
          type="button"
          className="w3-btn w3-yellow w3-margin w3-ripple"
          value={APP.NewCustomer}
          onClick={this.OnNewCustomer}
        />
        <table
          className="w3-table w3-bordered w3-border w3-centered"
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
            <Divider
              OnAddClick={this.OnAddTransaction}
              Text={TRANSACTION.Transaction}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
