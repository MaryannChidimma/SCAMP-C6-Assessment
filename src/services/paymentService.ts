import constant from "../config/constants";
const { PAYSTACK_TEST_SECRET_KEY} = constant
import axios from "axios";

class PaymentServices {
  initializeTransaction = async (data: { email: string; amount: number }) => {
    try {
      const url = `https://api.paystack.co/transaction/initialize`;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PAYSTACK_TEST_SECRET_KEY}`,
        },
      };

      const response: any = await axios.post(url, data, options);
      console.log(response);
      //console.log(response.data.authorization_url);

      return response.data.data;
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };

  VerifyTransaction = async (token: string) => {
    try {
      const url = `https://api.paystack.co/transaction/verify/${token}`;
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PAYSTACK_TEST_SECRET_KEY}`,
        },
      };

      const response: any = await axios.get(url, options);
      // const response: any = await response.json();
      //console.log(response);
      console.log({
        id: response.data.data.id,
        amount: response.data.data.amount,
        status: response.data.data.status,
        payment_channel: response.data.data.channel,
        created_at: response.data.data.created_at,
        reference_id: response.data.data.reference,
      });

      return {
        id: response.data.data.id,
        amount: response.data.data.amount,
        status: response.data.data.status,
        payment_channel: response.data.data.channel,
        created_at: response.data.data.created_at,
        reference_id: response.data.data.reference,
      };
    } catch (error: any) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  };
}
export default new PaymentServices();
