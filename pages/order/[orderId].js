import React from "react";
import { userRouter } from "next/router";
const trackOrder = () => {
  const router = userRouter();
  const { orderId } = router.query;

  return <div>[orderId]</div>;
};

export default trackOrder;
