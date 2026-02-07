package main

import (
	"fmt"      // Printing text
	"net/http" // Web server
	"strconv"  // Converting text to numbers
)

// This is 'Handler' function
func calculator(w http.ResponseWriter, r *http.Request) {

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

	// Sends the answer back to user's browser
	fmt.Fprintf(w, "Your BMR is %.0f. With your activity level (%s), your total daily burn is %.0f calories.", bmr, activity, tdee)
}

func main() {
	http.HandleFunc("/calculate", calculator)
	fmt.Println("Server starting on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
