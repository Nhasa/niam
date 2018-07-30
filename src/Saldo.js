import { Sign } from './Constants';

class Saldo {
  constructor(saldo = 0) {
    const number = Number(saldo);
    this.Sign = number >= 0 ? null : Sign.Minus;
    this.AbsValue = Math.abs(number);
    this.Value = number;
  }
}

export default Saldo;
