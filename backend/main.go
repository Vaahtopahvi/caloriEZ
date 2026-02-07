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

	// Converts that text to deciam numbers
	weight, _ := strconv.ParseFloat(weightRaw, 64)
	height, _ := strconv.ParseFloat(heightRaw, 64)
	age, _ := strconv.ParseFloat(ageRaw, 64)

	var bmr float64

	if gender == "male" {
		// male formula: 10 x weight + 6.25 x height - 5 x age + 5
		bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5
	} else {
		bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161
	}

	// Sends the answer back to user's browser
	fmt.Fprintf(w, "Results: Your daily BMR is %.0f calories", bmr)
}

func main() {
	// Connects URL path with calculator function
	http.HandleFunc("/calculate", calculator)

	// This is running the program
	fmt.Println("Server starting on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
