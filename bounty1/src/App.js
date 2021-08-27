import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Image } from "react-bootstrap";
import albedo from "@albedo-link/intent/lib/albedo.intent";
import albedologo from "./albedo.png";
import "./bootstrap.min.css";
import "./default.css";

class LogInWithAlbedo extends Component {
  //helping constructor, so that react won't forget the values
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      error: null,
      isLoaded: false,
      isLoaded2: false,
      balances: [],
      account: [],
    };
  }

  Albedo() {
    //Albedo Button with API Call to get the Public-Key
    albedo.publicKey({}).then((res) => {
      const { intent, pubkey, signature, signed_message } = res;
      //console.log({ intent, pubkey, signature, signed_message }); --> for debugging
      //API Call to get the balances
      this.setState((currentState) => {
        fetch("https://horizon.stellar.org/accounts/" + pubkey)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                balances: result.balances,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
          //another API Call to get the creating transaction
        fetch(
          "https://horizon.stellar.org/accounts/" +
            pubkey +
            "/payments?cursor=&limit=1&order=asc"
        )
          .then((res2) => res2.json())
          .then(
            (result2) => {
              //console.log(result2); --> for debugging
              this.setState({
                isLoaded2: true,
                account: result2._embedded.records,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded2: true,
                error,
              });
            }
          );
          //return the Public-Key to show it to the User
        return { value: pubkey };
      });
    });
  }

  render() {
    const { value, balances, account } = this.state;
    return (
      //the actual html of the site
      <div class="text-center">
        <div class="form-signin">
          <Button
            style={{ width: "207px", height: "40px" }}
            variant="contained"
            color="default"
            //the API Calls get executed on click
            onClick={this.Albedo.bind(this)}
          >
            Login With <Image style={{ width: "55px" }} src={albedologo} />
          </Button>
        </div>
        <div class="form-signin">
          <p>Public-Key: {value}</p>
        </div>
        <div class="form-signin">
          <ul>
            <p>Balances:</p>
            {balances.map((item) => (
              <li key={item.asset_code}>
                {item.balance} {item.asset_code}
              </li>
            ))}
            <p>When there is no currency behind the balance, its native XLM.</p>
          </ul>
        </div>
        <div class="form-signin">
          <ul>
            <p>Account was created at:</p>
            {account.map((item) => (
              <li key={item.created_at}>{item.created_at}</li>
            ))}
          </ul>
        </div>
        <div class="form-signin">
          <ul>
            <p>Account was created by:</p>
            {account.map((item) => (
              <li key={item.source_account}>{item.source_account}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default LogInWithAlbedo;
