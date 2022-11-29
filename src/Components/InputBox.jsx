const InputBox = ({ inputValue, handleChange, handleClick }) => {
  return (
    <div className="inputWrapper">
      <div className="inputGroup">
        <input
          type="number"
          placeholder="Enter Value"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputBox;
