import React from "react";
import Html5QrcodePlugin from "../services/QrcodePlugin";
// import Result from "./Result";
class Scanner extends React.Component {
  state = {
    qrCode: false,
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

        {this.state.qrCode && (
          <div className="w-full h-full shadow-md px-4 py-3 flex flex-col my-5 items-center justify-center">
            <div class="flex items-center justify-between w-full my-5">
              <div>Order ID</div>
              <div class="text-sm">{this.state.qrCode}</div>
            </div>
            <a
              href={`/order/${this.state.qrCode}`}
              class="my-2 bg-black text-white text-center px-3 py-2 rounded-md"
            >
              Confirm
            </a>
          </div>
        )}
        {/* <Result QrResult={this.state.qrCode} /> */}
      </div>
    );
  }
}

export default Scanner;
