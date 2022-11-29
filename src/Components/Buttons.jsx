const Buttons = ({ handleDataSet }) => {
  return (
    <div className="btn_row">
      <button className="btn" onClick={() => handleDataSet("1234")}>
        Reload JSON1234
      </button>
      <button className="btn" onClick={() => handleDataSet("4321")}>
        Reload JSON4321
      </button>
    </div>
  );
};

export default Buttons;
