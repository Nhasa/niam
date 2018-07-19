import React, {
  Component,
} from 'react';
import Customer from './Customer';
import Header from './Header';
import Row from './Row';

const tableStyle = {
  width: '100%',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Customers: [
        new Customer(),
        new Customer(),
        new Customer(),
      ],
    };
  }

  render() {
    const {
      Customers,
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
          Customers.map((customer, index) => (
            <Row
              key={
              index
            }
              {...customer
            }
            />
          ))}
        </table>
      </div>
    );
  }
}

export default App;
