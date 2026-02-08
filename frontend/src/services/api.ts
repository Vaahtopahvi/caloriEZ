// api calls

// import API url from env variable or default to localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// function to call the calculate endpoint with the parameters
export const calculateCalories = async (
  weight: number,
  height: number,
  age: number,
  gender: string,
  activity: string,
) => {
  // turn the parameters into a query string
  const params = new URLSearchParams({
    weight: weight.toString(),
    height: height.toString(),
    age: age.toString(),
    gender,
    activity,
  });

  // call the API with parameters and return the response
  const response = await fetch(`${API_URL}/calculate?${params.toString()}`);
  const data = await response.json();
  return data;
};
