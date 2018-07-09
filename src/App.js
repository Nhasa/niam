import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table border="1" style={{ width: '100%' }}>
          <tbody>
            <tr>
              <th rowspan="2">Tanggal</th>
              <th rowspan="2">No</th>
              <th rowspan="2">Keterangan</th>
              <th colspan="2">Mutasi</th>
              <th rowspan="2">+/-</th>
              <th rowspan="2">Saldo</th>
            </tr>
            <tr>
              <th>Debit</th>
              <th>Kredit</th>
            </tr>
            <tr>
              <td>1.9</td>
              <td>0.003</td>
              <td>40%</td>
              <td>1.7</td>
              <td>0.002</td>
              <td>43%</td>
              <td>TODO</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
