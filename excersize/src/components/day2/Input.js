    
    import React, { useState } from 'react';

    function Input({ onAddItem }) {
      const [name, setName] = useState('');
      const [price, setPrice] = useState('');
      const [quantity, setQuantity] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (name && price && quantity) {
          onAddItem({ name, price: parseFloat(price), quantity: parseInt(quantity) });
          setName('');
          setPrice('');
          setQuantity('');
        }
      };

      return (
        <>
        <table>
            <tr>
                <td>Item</td>
                <td>Price</td>
                <td>Quantity</td>
            </tr>
            <tr>
                <td>Rice</td>
                <td>500</td>
                <td></td>
            </tr>
            <tr>
                <td>soap</td>
                <td>60</td>
                <td></td>
            </tr>
            <tr>
                <td>suger</td>
                <td>50</td>
                <td></td>
            </tr>
        </table>
        <button type="submit">Calculate Total</button>
        <h1>Total: LKR 330</h1>
        </>
      );
    }
    export default Input;