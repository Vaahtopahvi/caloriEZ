package main

import (
	"fmt"      // Printing text
	"net/http" // Web server
	"strconv"  // Converting text to numbers
)

// This is 'Handler' function
func calculator(w http.ResponseWriter, r *http.Request) {

	// Allow website to pull data. * for test, restrict later...
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// Tell browser we're using JSON
	w.Header().Set("Content-Type", "application/json")

	// First get the data from URL
	weightRaw := r.URL.Query().Get("weight")
	heightRaw := r.URL.Query().Get("height")
	ageRaw := r.URL.Query().Get("age")
	gender := r.URL.Query().Get("gender")
	activity := r.URL.Query().Get("activity")

	// Converts that text to deciam numbers
	weight, _ := strconv.ParseFloat(weightRaw, 64)
	height, _ := strconv.ParseFloat(heightRaw, 64)
	age, _ := strconv.ParseFloat(ageRaw, 64)

	// Variable for Basal Metabolic Rate
	var bmr float64
	// Calculates BMR
	if gender == "male" {
		// male formula: 10 x weight + 6.25 x height - 5 x age + 5
		bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5
	} else {
		bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161
	}

	// Variable for activity level multiplier
	var multiplier float64
	switch activity {
	case "sedentary":
		multiplier = 1.2
	case "light":
		multiplier = 1.375
	case "moderate":
		multiplier = 1.55
	case "active":
		multiplier = 1.725
	default:
		multiplier = 1.2
	}

	// Multiply bmr calories with activity level
	tdee := bmr * multiplier

	// Send data back to React (json)
	fmt.Fprintf(w, `{"bmr": %.0f, "tdee": %.0f, "activity": "%s"}`, bmr, tdee, activity)
}

func main() {
	http.HandleFunc("/calculate", calculator)
	fmt.Println("API Live on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
