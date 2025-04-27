import { useLocation, useNavigate } from "react-router-dom";
import Title from "../components/common/Title";
import { CartStyle } from "./Cart";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import FindAddressButton from "../components/order/FindAddressButton";
import { useState } from "react";
import { order } from "../api/order.api";
import useAlert from "../hooks/useAlert";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDataFormCart = location.state;

  const { totalPrice, totalQuantity, bookTitle, checkedValues } =
    orderDataFormCart;

  const { showConfirm } = useAlert();
  const [locationObj, setLocationObj] = useState({
    address: "",
    addressDetail: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const address = formData.get("address");
    const addressDetail = formData.get("address-detail");
    const receiver = formData.get("receiver");
    const contact = formData.get("phone-number");

    if (!address || !addressDetail || !receiver || !contact) {
      alert("배송 정보를 입력해주세요!");

      return;
    }

    const orderData = {
      ...orderDataFormCart,
      items: checkedValues,
      delivery: {
        address: `${address} ${addressDetail}`,
        receiver,
        contact,
      },
    };

    console.log("orderData", orderData);

    showConfirm("주문을 징행하시겠습니까?", () => {
      order(orderData).then(() => {
        alert("주문이 처리되었습니다.");
        navigate("/orderlist");
      });
    });
  };

  console.log("orderDataFormCart", orderDataFormCart);

  return (
    <>
      <Title size="large">주문서 작성</Title>
      <CartStyle>
        <div className="content">
          <div className="order-info">
            <Title size="medium" color="text">
              배송 정보
            </Title>

            <form className="delivery" id="order-form" onSubmit={onSubmit}>
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <Input
                    name="address"
                    readOnly
                    type="text"
                    value={locationObj.address}
                  />
                </div>
                <FindAddressButton
                  onCompleted={(address) => console.log("전달된 주소", address)}
                  setLocation={setLocationObj}
                />
              </fieldset>

              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <Input
                    name="address-detail"
                    type="text"
                    readOnly
                    value={locationObj.addressDetail}
                  />
                </div>
              </fieldset>

              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <Input name="receiver" type="text" />
                </div>
              </fieldset>

              <fieldset>
                <label>전화번호</label>
                <div className="input">
                  <Input name="phone-number" type="text" />
                </div>
              </fieldset>
            </form>
          </div>
          <div className="order-info">
            <Title size="medium" color="text">
              주문 상품
            </Title>
            <strong>
              {bookTitle} 등 총 {totalQuantity} 권
            </strong>
          </div>
        </div>
        <div className="summary">
          <CartSummary totalPrice={totalPrice} totalQuantity={totalQuantity} />
          <Button size="large" scheme="primary" form="order-form" type="submit">
            결제하기
          </Button>
        </div>
      </CartStyle>
    </>
  );
};

export default Order;
