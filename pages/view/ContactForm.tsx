import React, { useState } from "react";
import { motion } from "framer-motion";

const validateEmail = (email: string) => {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

export default function ContactForm({
  receiveName,
  receiveEmail,
  receiveMessage,
  submitMessage,
  loading,
}: {
  receiveName: (name: string) => void;
  receiveEmail: (email: string) => void;
  receiveMessage: (message: string) => void;
  submitMessage: () => void;
  loading: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [message, setMessage] = useState("");

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    submitMessage();
  };
  return (
    <form className="flex w-full flex-col gap-6 md:w-[370px] md:py-0">
      <FormGroup
        name="name"
        placeholder="Enter your name"
        label="Name:"
        value={name}
        setValue={(val) => {
          setName(val);
          receiveName(val);
        }}
      />
      <FormGroup
        name="email"
        placeholder="Enter your email"
        type="email"
        label="Email:"
        value={email}
        onBlur={() => setEmailValid(validateEmail(email))}
        customStyle={`${email.length > 0 && !emailValid ? "error" : ""}`}
        setValue={(val) => {
          setEmail(val);
          receiveEmail(val);
        }}
      />
      <FormGroup
        name="message"
        placeholder="Enter your message"
        type="textarea"
        label="Message:"
        value={message}
        setValue={(val) => {
          setMessage(val);
          receiveMessage(val);
        }}
      />
      <motion.button
        onClick={(e) => submitForm(e)}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        whileTap={{ scale: [1.0, 0.9, 1.0], backgroundColor: "#FEA55F" }}
        className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
        disabled={!name || !email || !message || loading || emailValid}
      >
        {loading ? "Sending..." : "Submit Message"}
      </motion.button>
    </form>
  );
}

function FormGroup({
  name,
  type = "text",
  placeholder,
  label,
  value,
  setValue,
  customStyle,
  onBlur,
}: {
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  value: string;
  setValue: (val: string) => void;
  customStyle?: string;
  onBlur?: () => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="" htmlFor={name}>
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          type={type}
          name={name}
          onBlur={() => (type === "email" ? onBlur : null)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={name}
          placeholder={placeholder}
          className={`input-bx-active h-[40px] rounded-[8px] bg-dark-300 px-2 text-[14px] ${customStyle}`}
          required
        />
      ) : (
        <textarea
          name="message"
          id="message"
          placeholder={placeholder}
          className="input-bx-active h-[150px] rounded-[8px] bg-dark-300 px-4 py-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={100}
        />
      )}
    </div>
  );
}