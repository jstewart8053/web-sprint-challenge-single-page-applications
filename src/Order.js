import React from 'react'

function Order() {
  return (
    <div className='order'>
      <h1>Build your own pizza</h1>
      <form>
        <div className="item">
          <label htmlFor="size">Pick a size</label>
          <select name="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="sauce">Pick your sauce:</label>
          Red
          <input type="radio" name="sauce" value='redSauce' />
          White
          <input type="radio" name="sauce" value='redSauce' />
          BBQ
          <input type="radio" name="sauce" value='redSauce' />
        </div>

        <div className="item">
          <label>Toppings</label>
          Pepperoni: <input type="checkbox" name="pepperoni"
            value="pepperoni" />

          Mushrooms: <input type="checkbox" name="mushrooms" value="mushrooms" />

          Sausage: <input type="checkbox" name="sausage"
            value="sausage" />

          Bacon: <input type="checkbox" name="bacon" value="bacon" />

          <div className="item">
            <label htmlFor="specialInstructions">Special Instructions</label>
            <textarea name="specialInstructions" cols="30" rows="3"></textarea>
          </div>

          <button>Submit  </button>
        </div>
      </form>
    </div>
  )
}

export default Order