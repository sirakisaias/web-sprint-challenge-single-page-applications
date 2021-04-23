import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {

    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Build Your Own Pizza</h2>
      </div>

      <div className="form-group inputs">
        <h4>Choose your size</h4>
        <label>
          Select Size
          <select onChange={onChange} value={values.role} name="role">
            <option value="">- Select -</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="xl">extra large</option>
          </select>
        </label>
        <h4>Choose your sauce</h4>
        <label>
          Original Red
          <input
            type="radio"
            name="civil"
            value="original"
            checked={values.civil === "original"}
            onChange={onChange}
          />
        </label>
        <br/>
        <label>
          Garlic Ranch
          <input
            type="radio"
            name="civil"
            value="garlic"
            checked={values.civil === "garlic"}
            onChange={onChange}
          />
        </label>
        <br/>
        <label>
          BBQ sauce
          <input
            type="radio"
            name="civil"
            value="bbq"
            checked={values.civil === "bbq"}
            onChange={onChange}
          />
        </label>
        <br/>
        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="civil"
            value="spinach"
            checked={values.civil === "spinach"}
            onChange={onChange}
          />
        </label>
        

        
      </div>

      <div className="form-group checkboxes">
        <h4>Add Toppings </h4>

        <label>
          Pepperoni
          <input
            type="checkbox"
            name="peperoni"
            checked={values.hiking}
            onChange={onChange}
          />
        </label>

        <label>
          Sausage 
          <input
            type="checkbox"
            name="sausage"
            checked={values.reading}
            onChange={onChange}
          />
        </label>

        <label>
          Canadian beacon
          <input
            type="checkbox"
            name="beacon"
            checked={values.coding}
            onChange={onChange}
          />
        </label>
        <br/>
        <label>
          Spicy Sausage
          <input
            type="checkbox"
            name="spicy"
            checked={values.hiking}
            onChange={onChange}
          />
        </label>

        <label>
          Grilled chicken 
          <input
            type="checkbox"
            name="grilled"
            checked={values.reading}
            onChange={onChange}
          />
        </label>

        <label>
          onions
          <input
            type="checkbox"
            name="onions"
            checked={values.coding}
            onChange={onChange}
          />
        </label>
        <button >Add to order</button>
      </div>
    </form>
  );
}
