const useState =React.useState;

const App = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Implement the curried handleChange function
  const handleChange = (field)=>(e)=> {
    setFormData((prev) => ({
        ...prev,
        [field]: e.target.value
    }));
  };
  console.log(formData);
  return (
    <>
      <div className="p-4">
        <label htmlFor="name">Name: </label>
        <input
          className="border"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange("name")}
        />
      </div>
      <br />
      <div className="p-4">
        <label htmlFor="email">Email: </label>
        <input
        className="border"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange("email")}
        />
      </div>
    </>
  );
};

// -----------------------------------------------------------
// =============================================================
const createRoot = ReactDOM.createRoot
const root = createRoot(document.getElementById("app"));
root.render(<App />);
// =============================================================
// -------------------------------------------------------------
