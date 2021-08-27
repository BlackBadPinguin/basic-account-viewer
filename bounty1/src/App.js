import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Image } from "react-bootstrap";
import albedo from "@albedo-link/intent/lib/albedo.intent";
import albedologo from "./albedo.png";

class LogInWithAlbedo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      error: null,
      isLoaded: false,
      balances: []
    };
  }

  //componentDidMount() {
  //fetch(
  // "https://horizon.stellar.org/accounts/GAYOLLLUIZE4DZMBB2ZBKGBUBZLIOYU6XFLW37GBP2VZD3ABNXCW4BVA"
  //)
  // .then((res) => res.json())
  // .then(
  //  (result) => {
  //   this.setState({
  //     isLoaded: true,
  //    balances: result.balances
  //  });
  // },
  // Note: it's important to handle errors here
  // instead of a catch() block so that we don't swallow
  // exceptions from actual bugs in components.
  //(error) => {
  //  this.setState({
  //    isLoaded: true,
  //    error
  //   });
  //   }
  // );
  //}

  Albedo() {
    albedo.publicKey({}).then((res) => {
      const { intent, pubkey, signature, signed_message } = res;
      console.log({ intent, pubkey, signature, signed_message });
      this.setState((currentState) => {
        fetch("https://horizon.stellar.org/accounts/" + pubkey)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                balances: result.balances
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          );
        return { value: pubkey };
      });
    });
  }

  render() {
    const { value, balances } = this.state;
    return (
      <div>
        <div>
          <Button
            style={{ width: "207px", height: "40px" }}
            variant="contained"
            color="default"
            onClick={this.Albedo.bind(this)}
          >
            Login With <Image style={{ width: "55px" }} src={albedologo} />
          </Button>
          <div>Public-Key: {value}</div>
        </div>
        Balances:
        <ul>
          {balances.map((item) => (
            <li key={item.asset_code}>
              {item.balance} {item.asset_code}
            </li>
          ))}
        </ul>
        When there is no currency behind the balance, its native XLM.
      </div>
    );
  }
}

export default LogInWithAlbedo;
