import React, { Component } from 'react';

const App = () => (
  <Amount
    renderAmountOne={amount => (
      <div>
        <h1>My one Amount</h1>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
    renderAmountTwo={amount => (
      <div>
        <h1>My other Amount</h1>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  />
);

class Amount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1}));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  }

  render () {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>

        {this.props.renderAmountTwo(this.state.amount)}

        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>

        {this.props.renderAmountOne(this.state.amount)}
      </div>
    );
  }
}

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

export default App;
