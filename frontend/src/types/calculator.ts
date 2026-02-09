// this is what the calculcator wants as input and then what it returns as output
export interface CalculatorInput {
  weight: number;
  height: number;
  age: number;
  gender: "male" | "female";
  activity: string;
}

// display the results of the calculation
export interface CalculatorResult {
  bmr: number;
  tdee: number;
}
