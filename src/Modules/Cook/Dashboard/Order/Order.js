import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASEURL } from "../../../../url/BaseUrl";
import "./Orders.css";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order details from the database
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${BASEURL}/orders`); 
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleDeliver = async (orderId) => {
    try {
      // Update the status of the food item to delivered
      await axios.put(`${BASEURL}/orders/${orderId}`, { status: 'delivered' }); 
      // Update the local state to reflect the change
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: 'delivered' } : order
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className='order-con'>
      {orders.map((order) => (
        <div key={order._id} className="order-card">
          <h2>Order ID: {order._id}</h2>
          <p>Table Number: {order.tableNumber}</p>
          <h3>Items:</h3>
          <ul>
            {order.items.map((item) => ( // Changed 'cartItems' to 'items'
              <li key={item._id}>
                {item.food} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <p>Total Amount: {order.totalPrice}/-</p> {/* Changed 'totalAmount' to 'totalPrice' */}
          {order.status !== 'delivered' && (
            <button onClick={() => handleDeliver(order._id)}>Mark as Delivered</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Order;
