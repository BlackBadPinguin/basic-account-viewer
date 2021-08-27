import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Image } from "react-bootstrap";
import albedo from "@albedo-link/intent/lib/albedo.intent";
import albedologo from "./albedo.png";

class LogInWithAlbedo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  Albedo() {
    albedo.publicKey({}).then((res) => {
      const { intent, pubkey, signature, signed_message } = res;
      console.log({ intent, pubkey, signature, signed_message });
      this.setState((currentState) => {
        return { value: pubkey };
      });
    });
  }
  render() {
    const { value } = this.state;
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
          <h2>It is {value}.</h2>
        </div>
      </div>
    );
  }
}

export default LogInWithAlbedo;
