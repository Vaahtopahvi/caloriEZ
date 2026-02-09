// Select field for gender and activity levels
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

// lets make it so the parent component SelectField accepts these props
// currently every every 'element' has an 'any' type. Still works tho
export const SelectField = ({
  gender,
  activity,
  onGenderChange,
  onActivityChange,
}) => (
  <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup
      value={gender}
      onChange={(e) => onGenderChange(e.target.value)}
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
    </RadioGroup>
    <FormLabel id="activity-level-radio-buttons">Your activity</FormLabel>
    <RadioGroup
      value={activity}
      onChange={(e) => onActivityChange(e.target.value)}
      aria-labelledby="activity-level-radio-buttons"
      defaultValue="sedentary"
      name="activity-level-radio-buttons-group"
    >
      <FormControlLabel
        value="sedentary"
        control={<Radio />}
        label="Sedentary (basically no exercise)"
      />
      <FormControlLabel
        value="light"
        control={<Radio />}
        label="Light exercise (1-3 days/week)"
      />
      <FormControlLabel
        value="moderate"
        control={<Radio />}
        label="Moderate exercise (3-5 days/week)"
      />
      <FormControlLabel
        value="active"
        control={<Radio />}
        label="Very active (6-7 days/week)"
      />
    </RadioGroup>
  </FormControl>
);
