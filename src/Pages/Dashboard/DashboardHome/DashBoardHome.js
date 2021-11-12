import { Grid } from "@mui/material";
import Calendar from "../../Shared/Calendar/Calendar";
import Appoinments from "../Appointments/Appoinments";
import * as React from "react";

const DashBoardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ mt: 8 }} xs={12} sm={5} md={4}>
        <Calendar date={date} setDate={setDate}></Calendar>
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Appoinments date={date}></Appoinments>
      </Grid>
    </Grid>
  );
};

export default DashBoardHome;
