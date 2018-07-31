class Mutation {
  constructor(mutation = {}) {
    this.Debit = mutation.Debit || 0;
    this.Credit = mutation.Credit || 0;
  }
}

export default Mutation;
