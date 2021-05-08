import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./AddShift.css";

const AddShift = () => {
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

  const [showAddForm, setShowAddForm] = useState(false);

  const [sProfile, setSProfile] = useState({
    name: "Full Name",
    currentDate: "2021-05-10",
    startDate: "2021-05-14T07:30",
    endDate: "2021-05-14T11:30",
  });

  const onClick = () => {
    setShowAddForm(!showAddForm);
  };
  const addShfit = () => {};

  const {
    currentDate1,
    currentDate2,
    currentDate3,
    currentDate4,
    currentDate5,
    schedulerData,
  } = dateInfo;

  return (
    <div>
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

      <div className="AddArea">
        {!showAddForm ? (
          <div className="resetPasswordButton">
            <button onClick={onClick}>Add Shift</button>
          </div>
        ) : null}

        {showAddForm ? (
          <div className="resetBox">
            <div className="resetPassword">
              <h1 style={{ display: "block" }}>Add A Shift</h1>

              <Formik initialValues={sProfile} onSubmit={addShfit}>
                {({ isSubmitting }) => (
                  <Form>
                    <lasbel
                      htmlFor="name"
                      style={{ display: "block" }}
                      className="itemLabel"
                    >
                      name
                    </lasbel>
                    <Field
                      label="name"
                      name="name"
                      id="name"
                      autoFocus
                      autoComplete="name"
                    />
                    <div>
                      <ErrorMessage name="name">
                        {(msg) => <span className="error">{msg}</span>}
                      </ErrorMessage>
                    </div>

                    <label
                      htmlFor="currentDate"
                      style={{ display: "block" }}
                      className="itemLabel"
                    >
                      The Date you want to Choose
                    </label>
                    <Field
                      label="currentDate"
                      name="currentDate"
                      id="currentDate"
                      autoFocus
                      autoComplete="currentDate"
                    />
                    <div>
                      <ErrorMessage name="currentDate">
                        {(msg) => <span className="error">{msg}</span>}
                      </ErrorMessage>
                    </div>

                    <label
                      htmlFor="startDate"
                      style={{ display: "block" }}
                      className="itemLabel"
                    >
                      Start of the Working Period
                    </label>
                    <Field
                      label="startDate"
                      name="startDate"
                      id="startDate"
                      autoFocus
                      autoComplete="startDate"
                    />
                    <div>
                      <ErrorMessage name="startDate">
                        {(msg) => <span className="error">{msg}</span>}
                      </ErrorMessage>
                    </div>

                    <label
                      htmlFor="endDate"
                      style={{ display: "block" }}
                      className="itemLabel"
                    >
                      End of the Working Period
                    </label>
                    <Field
                      label="endDate"
                      name="endDate"
                      id="endDate"
                      autoFocus
                      autoComplete="endDate"
                    />
                    <div>
                      <ErrorMessage name="endDate">
                        {(msg) => <span className="error">{msg}</span>}
                      </ErrorMessage>
                    </div>

                    <div className="itemLabel">
                      <button type="submit" disabled={isSubmitting}>
                        Add the Shift
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="cancelResetPasswordButton">
                <button onClick={onClick}>Cancel</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AddShift;
