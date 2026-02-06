# Calorie Counter & TDEE Tracker

A high-performance calorie tracking application that helps users calculate their metabolic needs with scientific precision.

---

## Key Features
* **Scientific Accuracy:** Implements the **Mifflin-St Jeor Equation**, currently considered the most reliable method for estimating metabolic rates.
* **Comprehensive Metrics:** Calculates both **BMR** (Basal Metabolic Rate) and **TDEE** (Total Daily Energy Expenditure).
* **Activity Scaling:** Supports dynamic multipliers based on lifestyle, from sedentary to highly active.
* **Fast Execution:** Powered by a **Golang** backend for lightning-fast calculations and type-safe data handling.

---

## Tech Stack

### Current
* **Language:** Go (Golang) - Handles the core mathematical engine and API logic.

### Roadmap
* **Frontend:** React.js for a dynamic SPA (Single Page Application).
* **Styling:** Tailwind CSS for a modern, mobile-first aesthetic.
* **DevOps:** Dockerization for consistent environments.
* **Web Server:** Nginx/Apache for production-grade deployment and reverse proxying.

---

## The Calculation Logic

The application uses the following formulas to determine the resting metabolic rate:

### BMR Calculation


$$BMR_{male} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age (y)} + 5$$

$$BMR_{female} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age (y)} - 161$$

### TDEE Calculation
Once the BMR is established, we apply an activity multiplier:
* **Sedentary:** $BMR \times 1.2$
* **Lightly Active:** $BMR \times 1.375$
* **Moderately Active:** $BMR \times 1.55$
* **Very Active:** $BMR \times 1.725$

---

## Development Roadmap
- [x] Implement Mifflin-St Jeor logic in Go
- [ ] Build RESTful API endpoints
- [ ] Create React + Tailwind Frontend
- [ ] Containerize with Docker
- [ ] Deploy with Nginx reverse proxy