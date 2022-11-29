const Tiles = ({ tile }) => {
  const { mean, mode, median, standardDeviation } = tile;
  return (
    <div className="tile_container">
      <div>
        <h5>Mean</h5>
        <p>{mean}</p>
      </div>
      <div>
        <h5>Median</h5>
        <p>{median}</p>
      </div>
      <div>
        <h5>Standard Deviation</h5>
        <p>{standardDeviation}</p>
      </div>
      <div>
        <h5>Mode</h5>
        <p>{mode}</p>
      </div>
    </div>
  );
};

export default Tiles;
