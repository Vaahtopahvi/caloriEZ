// component for weight, height and age
import { Box, TextField } from "@mui/material";
//this lets component to accept props

// import InputAdornment from '@mui/material/InputAdornment';

//lets make it so the parent component InputField accepts props
// TODO: currently every every 'element' has an 'any' type. Still works tho
export default function InputField({
  weight,
  height,
  age,
  onWeightChange,
  onHeightChange,
  onAgeChange,
}) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      {/* Ton onChangen voi varmaa poistaa jossain vaihees. */}
      <TextField
        value={weight}
        onChange={(e) => onWeightChange(e.target.value)}
        id="weight"
        label="Weight in kg"
        variant="standard"
      />
      <TextField
        value={height}
        onChange={(e) => onHeightChange(e.target.value)}
        id="height"
        label="Height in cm"
        variant="standard"
      />
      <TextField
        value={age}
        onChange={(e) => onAgeChange(e.target.value)}
        id="age"
        label="Your age"
        type="number"
        variant="standard"
      />
    </Box>
  );
}
