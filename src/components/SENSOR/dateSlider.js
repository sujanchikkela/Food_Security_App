/* eslint-disable */
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        markLabel: {
          fontSize: '14px', // Set the desired font size here
        },
      },
    },
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 7,
    label: "07-March",
  },
  {
    value:8,
    label: "08-March",
  },
  {
    value: 9,
    label: "09-March",
  },
  {
    value: 10,
    label: "10-March",
  }
];

const DateRangeSlider = ({ getDateRange, startDate, endDate }) => {
  const [value, setValue] = React.useState([7, 10]);
  let min = 7;
  let max = 10;

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    await getDateRange(event.target.value);
  };

  return (
    <ThemeProvider theme={customTheme}>
    <Box 
    sx={{ width: 600 }}>
      <Slider
        style={{color: "#4CAF50"}}
        value={value}
        marks={marks}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
    </ThemeProvider>
  );
};

export default DateRangeSlider;
