import React, { useState, useEffect } from "react";
import { getOrders, updateOrder } from "../services/graphcms";
import { useRouter } from "next/router";
// icons
import { FiPackage } from "react-icons/fi";
import { BsFilePostFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";
const OrderDetails = ({ orderId }) => {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState();
  const [trackingId, setTrackingId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  //   redirecting to scan page
  const redirectToScan = () => {
    router.push(`/scan`);
  };

  const getData = async (orderId) => {
    // "7cym3fra0wf13xq9q31ewh"
    const details = { orderId };
    const order = await getOrders(details);
    setOrderDetails(order);
  };
  useEffect(() => {
    getData(orderId);
  }, []);
  const submitTrackingId = async () => {
    const details = { orderId, trackingId };
    if (trackingId.length > 0) {
      updateOrder(details);
      setSubmitted(true);
      // redirecting to scan page with delay
      setTimeout(() => {
        router.push(`/scan`);
      }, 1500);
    }
  };
  const submitScreen = () => (
    <div class="w-screen h-screen fixed top-0 z-50  flex flex-col justify-center items-center  bg-white">
      <AiOutlineCheckCircle className="text-green-500 text-9xl" />
      <div class="text-green-500 text-2xl text-center w-full font-mono tracking-tighter">
        Your order has been updated.
      </div>
      <div class="w-full text-center my-5">
        Redirecting to scan page in 3 seconds...
      </div>
    </div>
  );
  return (
    <div className="px-5    w-full flex flex-col justify-center items-center">
      {submitted ? submitScreen() : null}
      <div className="w-full flex flex-col justify-center ">
        {orderDetails && (
          <>
            {/* product details */}
            <div className="my-2 shadow-md py-5 px-3 rounded-md">
              <FiPackage className="text-3xl my-1 text-orange-500" />
              <div className="flex justify-between w-full">
                <div>Order ID :</div>
                <div class="text-sm">{orderDetails.orderId}</div>
              </div>
              <div className="flex justify-between w-full">
                <div>Product Name :</div>
                <div class="text-sm">{orderDetails.productName}</div>
              </div>
              <div className=" flex justify-between w-full">
                <div>Product Desription :</div>
                <div class="text-sm">{orderDetails.productDetails}</div>
              </div>
              <div className="flex justify-between w-full">
                <div>Product Cost :</div>
                <div class="text-sm">{orderDetails.productCost}</div>
              </div>
            </div>
            {/* postage details */}
            <div class="my-2 shadow-md py-5 px-3 rounded-md">
              <BsFilePostFill className="text-3xl my-1 text-red-500" />
              <div className="flex justify-between w-full">
                <div>Postage Estimated Cost :</div>
                <div class="text-sm text-gray-500">
                  Rs. {orderDetails.postageCost}
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div>Postage Destination :</div>
                <div class="text-sm text-gray-500">
                  {orderDetails.postOfficeDestination}
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div>Postal Source PIN :</div>
                <div class="text-sm text-gray-500">
                  {orderDetails.ipsSourcePin}
                </div>
              </div>
            </div>

            <div className=" justify-between w-full border-2 border-black my-2 shadow-md py-5 px-3 rounded-md">
              <TbTruckDelivery className="text-3xl my-1 text-blue-500" />
              <div className="flex justify-between w-full">
                <div>Customer Name :</div>
                <div class="text-sm text-gray-700">{orderDetails.name}</div>
              </div>
              <div>Customer Address :</div>
              <div class="ml-10 text-gray-700 text-justify">
                {orderDetails.address}
              </div>
            </div>
            {/* tracking id submission */}
            <div class="flex flex-col my-10">
              <div className="text-center w-full">Postage Tracking ID</div>
              <input
                onChange={(e) => setTrackingId(e.target.value)}
                className="w-full border-2 border-gray-200 p-1 rounded-md"
                type="text"
                placeholder=""
              />
              <div
                onClick={() => submitTrackingId()}
                class="mt-3 cursor-pointer text-center bg-black text-white px-3 py-3 rounded-md"
              >
                Submit Tracking ID
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
