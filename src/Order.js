import React from 'react'

function Order(props) {
    const { submit, updateInput, errors, pizza } = props

    const change = (event) => {
      const { name, value } = event.target;
      updateInput(name, value)
    }
      return (
           <div className='order'>
              <div>
                {errors.size}<br />
                {errors.sauce}<br />
                {errors.toppings}
              </div>
              <h1>Build your own pizza</h1>
              <form onSubmit={submit}>
                <div className="item">
                  <label htmlFor="size">Pick a size</label>
                  <select name="size" onChange={change}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="sauce">Pick your sauce:</label>
                  Red
                  <input type="radio" name="sauce" value='red' onChange={change} />
                  White
                  <input type="radio" name="sauce" value='white' onChange={change} />
                  BBQ
                  <input type="radio" name="sauce" value='bbq' onChange={change} />
                </div>
        
                <div className="item">
                  <label>Toppings</label>
                  Pepperoni: <input type="checkbox" name="toppings"
                    value="pepperoni" onChange={change} />
        
                  Mushrooms: <input type="checkbox" name="toppings" value="mushrooms" onChange={change} />
        
                  Sausage: <input type="checkbox" name="toppings"
                    value="sausage" onChange={change} />
        
                  Bacon: <input type="checkbox" name="toppings" value="bacon" onChange={change} />
        
                  <div className="item">
                    <label htmlFor="specialInstructions">Special Instructions</label>
                    <textarea name="specialInstructions" cols="30" rows="3" onChange={change}></textarea>
                  </div>
        
                  <button>Submit  </button>
                </div>
              </form>
        
              <div>{pizza.size}</div>
            </div>
          )
        }
        
        export default Order