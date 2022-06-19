import React, { useState } from "react";
import { useRouter } from "next/router";
import OrderDetails from "../../components/OrderDetails";
function trackOrder() {
  const router = useRouter();
  const { orderId } = router.query;
  return (
    <div className="w-full h-screen py-16">
      <div class="py-3 w-full text-xl bg-black text-white text-center fixed top-0">
        Order Details
      </div>
      {orderId && <OrderDetails orderId={orderId} />}
    </div>
  );
}

export default trackOrder;
