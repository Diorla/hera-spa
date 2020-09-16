import React from "react";
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
export default function Form() {
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
          <span>42/16, GM Chowdhury Road, Khulna</span>
        </div>
      </address>
      <form>
        <Input placeholder="Name" />
        <Input placeholder="Phone number" />
        <Input placeholder="Email Address" />
        <textarea placeholder="Message" rows={5}></textarea>
        <button>Register</button>
      </form>
    </section>
  );
}
