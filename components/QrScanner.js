import React from "react";
import Html5QrcodePlugin from "../services/QrcodePlugin";
// import Result from "./Result";
class Scanner extends React.Component {
  state = {
    qrCode: "...waiting for scan",
  };

  constructor(props) {
    super(props);
    const { updateResult } = this.props;
    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }
  onNewScanResult(decodedText, decodedResult) {
    // Handle the result here.
    console.log(decodedText);
    this.setState({ qrCode: decodedText });
  }

  render() {
    return (
      <div className=" flex flex-col items-center justify-center text-white">
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={this.onNewScanResult}
        />
        <div class="text-white text-xl mt-5">{this.state.qrCode}</div>
        {/* <Result QrResult={this.state.qrCode} /> */}
      </div>
    );
  }
}

export default Scanner;
