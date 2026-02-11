// api calls

import type { CalculatorInput, CalculatorResult } from "../types/calculator";

// import API url from env variable or default to localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// function to call the calculate endpoint with the parameters
export const CalculateCalories = async (
  // make sure the input is type of calculatorinput and the output will be a promise of calculatorresult
  input: CalculatorInput,
): Promise<CalculatorResult> => {
  // turn the parameters into a query string with URLSearchParams (weight=70&height=175& etc...)
  const params = new URLSearchParams({
    weight: input.weight.toString(),
    height: input.height.toString(),
    age: input.age.toString(),
    gender: input.gender,
    activity: input.activity,
  });

  // call the API with parameters and return the response
  const response = await fetch(`${API_URL}/calculate?${params.toString()}`);
  const data: CalculatorResult = await response.json();
  return data;
};
