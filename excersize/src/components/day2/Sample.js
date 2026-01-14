 <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
          <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <button type="submit">Calculate Total</button>
          <h1>Total: LKR 330</h1>
        </form>