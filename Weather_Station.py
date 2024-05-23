# Arrays to store temperature data
Temperatures = [
    [ 'Monday temperatures'],
    ['Tuesday temperatures'],
    ['Wednesday temperatures'],
    ['Thursday temperatures'],
    ['Friday temperatures'],
    ['Saturday temperatures'],
    ['Sunday temperatures'] ]

MaxDay = [0] * 7  # Array to store maximum temperatures for each day
MinDay = [0] * 7  # Array to store minimum temperatures for each day
AvDay = [0] * 7   # Array to store average temperatures for each day

MaxWeek = float('-inf')  # Variable to store maximum temperature for the week
MinWeek = float('inf')   # Variable to store minimum temperature for the week
AvWeek = 0                # Variable to store average temperature for the week

# Function to find maximum temperature for a given day
def find_max_temp_for_day(day_index):
    return max(Temperatures[day_index])

# Function to find minimum temperature for a given day
def find_min_temp_for_day(day_index):
    return min(Temperatures[day_index])

# Function to calculate average temperature for a given day
def calculate_avg_temp_for_day(day_index):
    return sum(Temperatures[day_index]) / len(Temperatures[day_index])

# Main function
def main():
    days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    # Loop through each day of the week
    for day_index, day in enumerate(days_of_week):
        # Find maximum temperature for the day
        MaxDay[day_index] = find_max_temp_for_day(day_index)
        
        # Find minimum temperature for the day
        MinDay[day_index] = find_min_temp_for_day(day_index)
        
        # Calculate average temperature for the day
        AvDay[day_index] = calculate_avg_temp_for_day(day_index)
        
        # Update weekly statistics
        MaxWeek = max(MaxWeek, MaxDay[day_index])
        MinWeek = min(MinWeek, MinDay[day_index])
        AvWeek += AvDay[day_index]
        
        # Output daily statistics
        print(f"{day}:")
        print(f"  Maximum temperature: {MaxDay[day_index]:.2f}°C")
        print(f"  Minimum temperature: {MinDay[day_index]:.2f}°C")
        print(f"  Average temperature: {AvDay[day_index]:.2f}°C")
    
    # Calculate average temperature for the week
    AvWeek /= len(days_of_week)
    
    # Output weekly statistics
    print("\nWeekly Summary:")
    print(f"Maximum temperature for the week: {MaxWeek:.2f}°C")
    print(f"Minimum temperature for the week: {MinWeek:.2f}°C")
    print(f"Average temperature for the week: {AvWeek:.2f}°C")

# Run the main function
if __name__ == "__main__":
    main()
