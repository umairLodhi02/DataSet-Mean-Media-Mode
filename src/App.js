import Tiles from "./Components/Tiles";
import Buttons from "./Components/Buttons";
import InputBox from "./Components/InputBox";
import DATA_SET_1234 from "./DataSet/data-1234.json";
import DATA_SET_4321 from "./DataSet/data-4321.json";
import { useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);

  const [selectedDataSet, setSelectedDataSet] = useState([]);

  const [tile, setTile] = useState({
    mean: 0,
    median: 0,
    mode: 0,
    standardDeviation: 0,
  });

  const handleClick = () => {
    if (selectedDataSet.length === 0) {
      alert("Please load Dataset first!");
      return;
    } else {
      if (inputValue === 0) {
        alert("Value can not be 0");
        return;
      } else {
        const copyArr = [...selectedDataSet];

        copyArr.push(Number(inputValue));

        setSelectedDataSet(copyArr);
      }
    }
  };

  const handleDataSet = (id) => {
    if (id === "1234") {
      setSelectedDataSet(DATA_SET_1234.data);
    } else {
      setSelectedDataSet(DATA_SET_4321.data);
    }
  };

  const findMean = () => {
    let total = 0;
    for (let i of selectedDataSet) {
      total += i;
    }

    setTile((prevData) => ({
      ...prevData,
      mean: total,
    }));
  };

  const findMedian = () => {
    const { length } = selectedDataSet;
    const copyArr = [...selectedDataSet];
    let result = 0;
    copyArr.sort((a, b) => a - b);

    if (length % 2 === 0) {
      result = (copyArr[length / 2 - 1] + copyArr[length / 2]) / 2;
    } else {
      result = copyArr[(length - 1) / 2];
    }

    setTile((prevData) => ({
      ...prevData,
      median: result,
    }));
  };

  const findStandardDeviation = () => {
    const { mean } = { ...tile };
    let result = 0;
    let arr = selectedDataSet.map((k) => {
      return (k - mean) ** 2;
    });

    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    result = Math.sqrt(sum / arr.length);

    console.log(result);
    setTile((prevData) => ({
      ...prevData,
      standardDeviation: result,
    }));
  };

  const findMode = () => {
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < selectedDataSet.length; i++) {
      const item = selectedDataSet[i];

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    // console.log(max);
    setTile((prevData) => ({
      ...prevData,
      mode: max,
    }));
  };

  useEffect(() => {
    if (selectedDataSet.length !== 0) {
      console.log("llll");
      findMean();
      findMedian();
      findStandardDeviation();
      findMode();
    }

    console.log(selectedDataSet);
  }, [selectedDataSet]);
  return (
    <div className="App">
      <h3 className="heading">Welcome to React Js</h3>
      <Tiles tile={tile} />
      <InputBox
        inputValue={inputValue}
        handleChange={(val) => setInputValue(val)}
        handleClick={handleClick}
      ></InputBox>
      <Buttons
        selectedDataSet={selectedDataSet}
        handleDataSet={handleDataSet}
      />
    </div>
  );
}

export default App;
