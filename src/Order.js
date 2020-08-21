import React from 'react'

function Order(props) {
  const { submit, updateInput, errors, pizza, value, checkboxChange } = props

  const change = (event) => {
    const { name, value } = event.target;
    updateInput(name, value)
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
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
            <option>---- Select a size ---</option>
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
          Pepperoni: <input
            type="checkbox"
            name="pepperoni"
            checked={value.toppings.pepperoni}
            onChange={onCheckboxChange} />

          Mushrooms: <input
            type="checkbox"
            name="mushrooms"
            checked={value.toppings.mushrooms}
            onChange={onCheckboxChange} />

          Sausage: <input
            type="checkbox"
            name="sausage"
            checked={value.toppings.sausage}
            onChange={onCheckboxChange} />

          Bacon: <input
            type="checkbox"
            name="bacon"
            checked={value.toppings.bacon}
            onChange={onCheckboxChange} />

          <div className="item">
            <label htmlFor="specialInstructions">Special Instructions</label>
            <textarea name="specialInstructions" cols="30" rows="3" onChange={change}></textarea>
          </div>

          <button name='submit'>Submit  </button>
        </div>
      </form>

      <div>{pizza.size}</div>
    </div>
  )
}

export default Order