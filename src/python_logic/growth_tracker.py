# src/python_logic/growth_tracker.py

class GrowthTracker:
    def __init__(self):
        # WHO Standards (Simplified) - Age: (Min_Height, Max_Height) in cm
        self.height_standards = {
            1: (70, 78),
            2: (82, 92),
            5: (100, 115)
        }

    def analyze_growth(self, age_years, height_cm, weight_kg):
        height_range = self.height_standards.get(age_years)

        bmi = round(weight_kg / ((height_cm / 100) ** 2), 2)

        status = "Normal"
        advice = "All is Well, maintain the child's diet."

        if height_range:
            if height_cm < height_range[0]:
                status = "Stunted Growth"
                advice = "Height is less than standard. increase the diet of calcium and protein."
            elif bmi > 25:
                status = "Overweight"
                advice = "increase the physical activity and decrease the sugar intake."

        return {
            "bmi": bmi,
            "status": status,
            "advice": advice
        }


if __name__ == "__main__":
    tracker = GrowthTracker()
    print(tracker.analyze_growth(age_years=2, height_cm=80, weight_kg=12))








