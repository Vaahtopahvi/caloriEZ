import { SelectField } from "./components/SelectField";
import InputField from "./components/InputField";
import { CalculateCalories } from "./services/api";
import type { CalculatorInput, CalculatorResult } from "./types/calculator";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

function App() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [age, setAge] = useState("30");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("moderate");
  // this state holds the result of the calculation. it is initially null, but will be set to the result of the API call when the user clicks the calculate button.
  const [result, setResult] = useState<CalculatorResult | null>(null);

  // this function will be called when the user clicks the calculate button. it will call the API and set the result to the state, which will then be displayed to the user.
  async function handleCalculate() {
    const input: CalculatorInput = {
      weight: parseFloat(weight), // converts string to a float number
      height: parseFloat(height),
      age: parseInt(age), // converts string to an integer
      gender: gender as "male" | "female",
      activity: activity,
    };

    // call the API and set the result to the state
    try {
      const response = await CalculateCalories(input);
      setResult(response);
    } catch (error) {
      // setResult(
      //   "An error occurred while calculating. Please check your inputs and try again.",
      // );
      console.error(error);
    }

    // alert(
    //   `Weight: ${weight}, Height: ${height}, age: ${age}, gender: ${gender}, activity: ${activity}`,
    // );
  }
  return (
    // this is the main container for the app, it will contain all the components and text
    <Container maxWidth="md">
      {/* TODO: Might need to create "Appbar" for title */}
      <Typography variant="h2" gutterBottom>
        CaloriEZ
      </Typography>
      {/* body text about the app and how to use it */}
      <Typography variant="body1" gutterBottom>
        Calculate your daily calorie needs based on your weight, height, age,
        gender and activity level.
      </Typography>
      <Typography variant="body1" gutterBottom>
        For example, if you weigh 70kg, are 175cm tall, 30 years old, male and
        you are moderately active, your BMR would be ... and your TDEE would be
        ...
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter your details below and click the button to see your results.
      </Typography>
      {/* here will be the Form with the input fields and the select fields.*/}
      {/* let's first set defaul values and update values when user types TODO: doesn't need to re-render everytime when user types. only after submit */}
      <InputField
        weight={weight}
        height={height}
        age={age}
        onWeightChange={setWeight}
        onHeightChange={setHeight}
        onAgeChange={setAge}
      />
      <SelectField
        gender={gender}
        activity={activity}
        onGenderChange={setGender}
        onActivityChange={setActivity}
      />
      <Button variant="contained" onClick={handleCalculate}>
        Calculate
      </Button>
      <Typography variant="h4" gutterBottom>
        Results:
      </Typography>

      {/* only render the results if they 'exist' / are not null */}
      {result && (
        <>
          <Typography variant="body1">BMR: {Math.round(result.bmr)}</Typography>
          <Typography variant="body1">
            TDEE: {Math.round(result.tdee)}
          </Typography>
        </>
      )}
    </Container>
  );
}

export default App;
