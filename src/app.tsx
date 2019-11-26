import * as React from 'react';

interface Props {
  name: string;
}

interface State {
  isValidEmail: boolean,
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isValidEmail: false,
    };
  }

  validateEmail(e: React.ChangeEvent<HTMLInputElement>) {
    const email: string = e.target.value;
    const regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid: boolean = regex.test(email);

    if(isValid !== this.state.isValidEmail) {
      this.setState({isValidEmail: isValid});
    }

    return regex.test(email);
  }

  render() {
    const { isValidEmail } = this.state;

    return (
      <label data-id="email-input-wrapper">
        <h4>Enter email please here...</h4>
        <input data-id="email-input" className={isValidEmail ? 'valid' : 'invalid'} onChange={this.validateEmail.bind(this)} type="email" />
      </label>
    );
  }
}

export default App;
