import React from "react";
import Html5QrcodePlugin from "../services/QrcodePlugin";
// import Result from "./Result";
class Scanner extends React.Component {
  state = {
    qrCode: true,
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
      <div className=" flex flex-col items-center justify-center ">
        <Html5QrcodePlugin
          className="flex justify-center"
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={this.onNewScanResult}
        />

        <div class=" text-xl mt-5">{this.state.qrCode}</div>
        {this.state.qrCode && (
          <a
            href={`/order/${this.state.qrCode}`}
            class="my-2 bg-black text-white text-center px-3 py-2 rounded-md"
          >
            Confirm
          </a>
        )}
        {/* <Result QrResult={this.state.qrCode} /> */}
      </div>
    );
  }
}

export default Scanner;
