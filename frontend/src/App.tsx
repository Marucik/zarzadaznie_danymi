import { Button } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import "./App.css";
import BubbleChart from "./components/BubbleChart";
import useWindowSize from "./hooks/useWindowSize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sorter = (a: any, b: any) => {
  if (a.confirmed < b.confirmed) return 1;
  if (a.confirmed > b.confirmed) return -1;
  return 0;
};

export default function App() {
  const size = useWindowSize();
  const [rawData, setRawData] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [date, setDate] = useState(moment());
  const [displayConfirmed, setDisplayConfirmed] = useState(false);
  const selectedKeyHandler = (key: string) => {
    alert(key);
  };

  let getData = async (date: any) => {
    let utcDate = moment
      .utc(date)
      .hours(0)
      .minutes(0)
      .seconds(0)
      .format("YYYY-MM-DDTHH:mm:ss");

    try {
      let response = await axios.get("http://localhost:5000/Deaths", {
        params: { date: utcDate },
      });

      setRawData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(date);
  }, [date]);

  useEffect(() => {
    console.log(rawData);
    setData(rawData.sort(sorter).slice(1, 20));

    if (rawData.length === 0) {
      toast.error("No data, sorry.");
    }
  }, [rawData]);

  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Button
        variant="contained"
        color="primary"
        className="firstButton"
        onClick={() => setDisplayConfirmed(!displayConfirmed)}
      >
        Display {displayConfirmed ? "deaths" : "confirmed"}
      </Button>
      <header className="App-header">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDate(moment(date).subtract(1, "day"))}
        >
          Previous day
        </Button>
        <span className="dataDate">{date.format("DD.MM.YYYY")}</span>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setDate(moment(date).add(1, "day"))}
        >
          Next day
        </Button>
      </header>
      <main className="App-main">
        {data.length > 0 && (
          <BubbleChart
            bubblesData={data}
            confirmed={displayConfirmed}
            width={size.width - 20}
            height={size.height - 80}
            textFillColor="drakgrey"
            backgroundColor="lightGrey"
            maxValue={data[0].confirmed / (displayConfirmed ? 3 : 200)}
            minValue={
              data[data.length - 1].confirmed / (displayConfirmed ? 2 : 400)
            }
            selectedCircle={selectedKeyHandler}
          />
        )}
      </main>
    </div>
  );
}
