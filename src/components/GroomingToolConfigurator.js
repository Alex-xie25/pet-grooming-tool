import React, { useState } from "react";

export default function GroomingToolConfigurator() {
  const [form, setForm] = useState({
    toolType: "",
    handleMaterial: "",
    teethMaterial: "",
    functionType: "",
    logoMethod: "",
    packaging: "",
    moq: "",
    email: "",
  });

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    alert("Request submitted! You can connect this to email or CRM later.");
    console.log(form);
  };

  const OptionGroup = ({ title, field, options }) => (
    <div style={{ marginBottom: "16px" }}>
      <h3>{title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {options.map((opt) => (
          <button
            key={opt}
            style={{
              padding: "8px 12px",
              border: form[field] === opt ? "2px solid black" : "1px solid #ccc",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => updateField(field, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "16px" }}>
      <h1>Pet Grooming Tool Configurator</h1>

      <OptionGroup
        title="1. Tool Type"
        field="toolType"
        options={["Slicker Brush", "Deshedding Tool", "Undercoat Rake", "Comb"]}
      />

      <OptionGroup
        title="2. Handle Material"
        field="handleMaterial"
        options={["Plastic", "Wood", "Rubber"]}
      />

      <OptionGroup
        title="3. Teeth Material"
        field="teethMaterial"
        options={["Stainless Steel", "Carbon Steel", "Plastic"]}
      />

      <OptionGroup
        title="4. Function"
        field="functionType"
        options={["Deshedding", "Detangling", "Daily Grooming"]}
      />

      <OptionGroup
        title="5. Logo Method"
        field="logoMethod"
        options={["Printing", "Laser", "Sticker"]}
      />

      <OptionGroup
        title="6. Packaging"
        field="packaging"
        options={["OPP Bag", "Box", "Custom"]}
      />

      <OptionGroup
        title="7. MOQ"
        field="moq"
        options={["300", "500", "1000+"]}
      />

      <div style={{ marginBottom: "16px" }}>
        <h3>8. Email</h3>
        <input
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "none", backgroundColor: "#333", color: "#fff", fontWeight: "bold" }}
      >
        Generate Request
      </button>
    </div>
  );
}