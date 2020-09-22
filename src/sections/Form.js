import React, { useReducer } from "react";
import "./form.css";

const Input = ({ placeholder, value, onChange }) => (
  <input
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="form-input"
    required
  />
);

const initialState = {
  name: "",
  number: "",
  email: "",
  message: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "update":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section id="contact">
      <address>
        <h1>Get in Touch</h1>
        <div>
          <span>Phone</span>
          <span>+804 4261 550 601</span>
        </div>
        <div>
          <span>E-mail</span>
          <span>mail@example.com</span>
        </div>
        <div>
          <span>Address</span>
          <span>12/13, Kenneth Kuvi road, Lagos</span>
        </div>
      </address>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Congratulations 🍸 ${state.name}, you are now registered!`);
        }}
      >
        <Input
          placeholder="Name"
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "update",
              payload: { name: e.target.value },
            })
          }
        />
        <Input
          placeholder="Phone number"
          type="tel"
          value={state.number}
          onChange={(e) =>
            dispatch({
              type: "update",
              payload: { number: e.target.value },
            })
          }
        />
        <Input
          placeholder="Email Address"
          type="email"
          pattern=".{3,}@.{3,}\.com"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "update",
              payload: { email: e.target.value },
            })
          }
        />
        <textarea
          placeholder="Message"
          rows={5}
          value={state.message}
          onChange={(e) =>
            dispatch({
              type: "update",
              payload: { message: e.target.value },
            })
          }
        ></textarea>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
