import styled from "styled-components";
import Title from "../components/common/Title";
import useOrders from "../hooks/useOrders";
import { formatDate, formatNumber } from "../utils/format";
import Button from "../components/common/Button";
import type { OrderDetailType } from "../models/order.model";
import React from "react";

const OrderList = () => {
  const { orders, selectedItemId, selectOrderItem } = useOrders();

  return (
    <>
      <Title size="large">주문 내역</Title>
      <OrderListStyle>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>주문 일자</th>
              <th>주소</th>
              <th>수령인</th>
              <th>전화번호</th>
              <th>대표상품명</th>
              <th>수량</th>
              <th>금액</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>{formatDate(order.createdAt, "YYYY-MM-DD")}</td>
                  <td>{order.address}</td>
                  <td>{order.receiver}</td>
                  <td>{order.contact}</td>
                  <td>{order.book_title}</td>
                  <td>{order.total_quantity} 권</td>
                  <td>{formatNumber(order.total_price)} 원</td>
                  <td>
                    <Button
                      type="button"
                      size="small"
                      scheme="normal"
                      onClick={() => selectOrderItem(order.id)}
                    >
                      자세히
                    </Button>
                  </td>
                </tr>
                {selectedItemId == order.id && (
                  <tr>
                    <td></td>
                    <td colSpan={8}>
                      <ul className="detail">
                        {order?.detail &&
                          order.detail.map((item: OrderDetailType) => (
                            <li key={item.book_id}>
                              <div>{item.book_id}</div>
                              <div>{item.author}</div>
                              <div>{formatNumber(item.price)} 원</div>
                              <div>{item.quantity} 권</div>
                            </li>
                          ))}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </OrderListStyle>
    </>
  );
};

export default OrderList;

const OrderListStyle = styled.div`
  padding: 24px 0 0 0;

  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid ${({ theme }) => theme.color.border};
    border-top: 1px solid ${({ theme }) => theme.color.border};
    font-size: 13px;

    th,
    td {
      padding: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.color.border};
      text-align: center;
    }

    .detail {
      margin: 0;
      text-align: center;

      li {
        display: flex;
        list-style: square;

        div {
          display: flex;
          padding: 8px 12px;
          gap: 8px;
        }
      }
    }
  }
`;
