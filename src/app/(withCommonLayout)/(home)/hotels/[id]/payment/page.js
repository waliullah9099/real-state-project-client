import PaymentForm from "@/components/payment/PaymentForm";
import { getHotelByID, getUserByEmail } from "@/database/queries";
import { getDayDifference } from "@/utils/data-utils";
import { redirect } from "next/navigation";
import { auth } from "../../../../../../../auth";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);
  const hotelInfo = await getHotelByID(id, checkin, checkout);

  const hasCheckinCheckout = checkin && checkout;
  let cost = (hotelInfo?.hignRate + hotelInfo?.lowRate) / 2;

  if (hasCheckinCheckout) {
    const days = await getDayDifference(checkin, checkout);
    cost = cost * days;
  }

  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo?.name}</b> and total price is{" "}
          <b>${cost}</b>{" "}
          {hasCheckinCheckout && `${getDayDifference(checkin, checkout)}`} days
        </p>
        <PaymentForm checkin={checkin} checkout={checkout} />
      </div>
    </section>
  );
};

export default PaymentPage;
