import React, { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Items.css";
import { ITEMS_URL, ORDERS_URL } from "../../../../config/config";
const Items = () => {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItems] = useState([]);
  const [isPlacing, setIsPlacing] = useState(false);
  const [orderFlag, setOrderFlag] = useState([]);
  const toggleCart = (e) => {
    e.preventDefault();

    setShowCart(!showCart);
  };
  const fetchItems = async () => {
    try {
      const _items = await axios.get(ITEMS_URL);
      const newList = [];
      _items.data.map((i) => {
        newList.push({
          ...i,
          qnty: 1,
        });
      });
      setItems(newList);
    } catch (e) {}
  };

  const removeItem = (e, item) => {
    e.preventDefault();
    const newItemList = selectedItem.filter((_item) => _item._id !== item._id);
    setSelectedItems([...newItemList]);
  };
  const addOrders = (e, order) => {
    e.preventDefault();
    setSelectedItems([...selectedItem, order]);
  };
  const getSubtotal = (items) => {
    let total = 0;
    items.map((item) => {
      let totalPrice = item.price * item.qnty;
      total += totalPrice;
    });
    return total;
  };
  const handleQuantity = (e, item) => {
    e.preventDefault();
    return;
  };

  const placeOrder = async (e, order) => {
    e.preventDefault();
    if (order.length <= 0) return;
    setIsPlacing(true);
    const payload = {
      items: [...order],
      placementStatus: false,
      supplierID: "S20",
    };
    const place = await axios.post(ORDERS_URL, payload);
    if (place) {
      setIsPlacing(false);
      setOrderFlag(orderFlag.push(order));
    }
  };
  const resetOrderCart = () => {
    setSelectedItems([]);
    setOrderFlag([]);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="items">
      <div className="item-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        addOrders(e, item);
                      }}
                      className={
                        selectedItem.includes(item)
                          ? "disable-order"
                          : "add-order"
                      }
                      disabled={selectedItem.includes(item) ? "disabled" : ""}
                    >
                      Order
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="order-cart">
        <span className="cart-title">Orders</span>
        <div className="order-counter" onClick={toggleCart}>
          <span className="order-count">{selectedItem.length}</span>
        </div>
        <div
          className="order-list"
          style={{ display: showCart ? "block" : "none" }}
        >
          <table className="cart-table">
            <thead>
              <tr>
                <th>Desc</th>
                <th>Price (Ksh)</th>
                <th>Quatity</th>
              </tr>
            </thead>
            <tbody>
              {selectedItem.length === 0 ? (
                <tr>
                  <td>No order has been added</td>
                </tr>
              ) : (
                <>
                  {selectedItem.map((item, index) => {
                    return (
                      <Fragment key={item._id}>
                        <tr>
                          <td>{item.description}</td>
                          <td>{item.price}</td>
                          <td>
                            <input
                              onChange={(e) => handleQuantity(e, item)}
                              type="number"
                              min={0}
                              value={item.qnty}
                            />
                          </td>
                          <td>
                            <button
                              onClick={(e) => {
                                removeItem(e, item);
                              }}
                              className="remove-item"
                            >
                              x
                            </button>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                  <tr className="subtotal">
                    <td></td>
                    <td>Total</td>
                    <td>{getSubtotal(selectedItem).toFixed(2)}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <div className="order-controls">
            <button
              onClick={(e) => placeOrder(e, selectedItem)}
              className="btn-order"
              disabled={orderFlag.length > 0 ? "disabled" : ""}
              style={{ display: selectedItem.length === 0 ? "none" : "block" }}
            >
              Place Order
            </button>
            <button
              style={{ display: selectedItem.length === 0 ? "none" : "block" }}
              className="btn-order cancel"
              onClick={resetOrderCart}
            >
              Cancel
            </button>
          </div>
          <h3
            style={{
              color: "green",
              fontWeight: "300",
              textAlign: "center",
              display: orderFlag.length === 0 ? "none" : "block",
            }}
          >
            {isPlacing ? "Placing Order..." : "Order Placed!"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Items;
