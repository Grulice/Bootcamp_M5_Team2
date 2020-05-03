import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from "./stylePickDateComponent";

function PickDate(props) {
  const [startDate, setStartDate] = useState(
    new Date().setDate(new Date().getDate() - 7)
  );
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <Container>
        From: &nbsp;
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            props.handleStartDate(date.toISOString());
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </Container>

      <Container>
        To: &nbsp;
        <DatePicker
          style={{ margin: 10 }}
          selected={endDate}
          onChange={(date) => {
            setEndDate(date);
            props.handleEndDate(date.toISOString());
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </Container>
    </>
  );
}

export default PickDate;
