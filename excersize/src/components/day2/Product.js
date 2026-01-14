    // TotalDisplay.js
    import input from 'input';

    function TotalDisplay({ items }) {
      const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      return (
        <div>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      );
    }
    export default TotalDisplay;