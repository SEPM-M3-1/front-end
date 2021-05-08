import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./ShiftTable.css";

const ShiftTable = () => {
  const [dateInfo, setDateInfo] = useState({
    currentDate1: "2021-05-10",
    currentDate2: "2021-05-11",
    currentDate3: "2021-05-12",
    currentDate4: "2021-05-13",
    currentDate5: "2021-05-14",
    schedulerData: [
      {
        startDate: "2021-05-10T07:30",
        endDate: "2021-05-10T11:30",
        title: "Robert",
      },
      {
        startDate: "2021-05-11T13:30",
        endDate: "2021-05-11T17:30",
        title: "Plus",
      },
      {
        startDate: "2021-05-12T07:30",
        endDate: "2021-05-12T11:30",
        title: "Ze Long",
      },
      {
        startDate: "2021-05-13T13:30",
        endDate: "2021-05-13T17:30",
        title: "Shu Hao",
      },
      {
        startDate: "2021-05-14T07:30",
        endDate: "2021-05-14T11:30",
        title: "YT",
      },
    ],
  });

  const {
    currentDate1,
    currentDate2,
    currentDate3,
    currentDate4,
    currentDate5,
    schedulerData,
  } = dateInfo;

  return (
    <div className="shfitContainor">
      <div className="shiftTabel">
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate1} />
            <DayView startDayHour={7} endDayHour={18} />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>

      <div className="shiftTabel">
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate2} />
            <DayView startDayHour={7} endDayHour={18} />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>

      <div className="shiftTabel">
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate3} />
            <DayView startDayHour={7} endDayHour={18} />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>

      <div className="shiftTabel">
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate4} />
            <DayView startDayHour={7} endDayHour={18} />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>

      <div className="shiftTabel">
        <Paper>
          <Scheduler data={schedulerData}>
            <ViewState currentDate={currentDate5} />
            <DayView startDayHour={7} endDayHour={18} />
            <Appointments />
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
};

export default ShiftTable;