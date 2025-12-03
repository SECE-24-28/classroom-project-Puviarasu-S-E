import React from "react";

const Form = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          backgroundColor: "white",
          padding: "32px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
            color: "#1f2937", // gray-800
          }}
        >
          Contact Form
        </h2>

        {/* Name */}
        <label
          htmlFor="name"
          style={{
            fontWeight: "600",
            color: "#374151", // gray-700
            display: "block",
            marginBottom: "8px",
          }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "16px",
            outline: "none",
            fontSize: "14px",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #3b82f6")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        {/* Email */}
        <label
          htmlFor="email"
          style={{
            fontWeight: "600",
            color: "#374151",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "16px",
            outline: "none",
            fontSize: "14px",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #3b82f6")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        {/* Submit */}
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#2563eb", 
            color: "white",
            padding: "12px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;