import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-5">
      <label className="block text-gray-200 text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 placeholder-gray-300"
        required
      />
    </div>
  );
};

export default InputField;
