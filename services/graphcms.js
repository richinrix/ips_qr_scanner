import { request, gql } from "graphql-request";
const graphqlAPI =
  "https://api-ap-south-1.graphcms.com/v2/cl4f58kw91c6t01z47w0d26fk/master";

export const getOrders = async (details) => {
  const query = gql`
    query MyQuery($orderId: String!) {
      order(where: { orderId: $orderId }) {
        id
        ipsSourcePin
        name
        orderId
        postOfficeDestination
        postageCost
        productDetails
        productCost
        productName
        address
      }
    }
  `;
  console.log({ details });
  if (details.orderId) {
    const response = await request(graphqlAPI, query, details);
    return response.order;
  }
};

export const updateOrder = async (details) => {
  console.log(details);
  const query = gql`
    mutation MyMutation($orderId: String!, $trackingId: String!) {
      updateOrder(
        data: { trackingId: $trackingId }
        where: { orderId: $orderId }
      ) {
        id
      }
    }
  `;

  const response = await request(graphqlAPI, query, details);
  return response.order;
};
