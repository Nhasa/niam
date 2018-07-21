import { Sign } from './Constants';

class Saldo {
  constructor(saldo = 0) {
    this.Saldo1 = 0;
    this.Saldo2 = 0;
    if (saldo >= 0) {
      this.Sign = null;
      this.Saldo2 = saldo;
    } else {
      this.Sign = Sign.Minus;
      this.Saldo1 = saldo;
    }
  }
}

export default Saldo;
