const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

document.getElementById("month-name").textContent = `${monthNames[currentMonth]} ${currentYear}`;

let habitData = JSON.parse(localStorage.getItem('habitData')) || [];

const habitListContainer = document.getElementById("habit-list-container");
const addHabitButton = document.getElementById("add-habit-btn");

function saveHabitData() {
    localStorage.setItem('habitData', JSON.stringify(habitData));
}

function createHabitElement(habit) {
    const habitDiv = document.createElement("div");
    habitDiv.classList.add("habit");

    const habitTitle = document.createElement("h2");
    habitTitle.textContent = habit.name;
    habitDiv.appendChild(habitTitle);

    const trackerDiv = document.createElement("div");
    trackerDiv.classList.add("tracker");

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = i;

        if (habit.progress[i - 1]) {
            dayDiv.classList.add("completed");
        }

        dayDiv.addEventListener("click", () => {
            habit.progress[i - 1] = !habit.progress[i - 1];
            dayDiv.classList.toggle("completed");
            saveHabitData();
        });

        trackerDiv.appendChild(dayDiv);
    }

    habitDiv.appendChild(trackerDiv);
    habitListContainer.appendChild(habitDiv);
}

function addNewHabit(name) {
    const newHabit = {
        name: name,
        progress: Array(daysInMonth).fill(false)
    };

    habitData.push(newHabit);
    createHabitElement(newHabit);
    saveHabitData();
}

addHabitButton.addEventListener("click", () => {
    const habitName = prompt("Enter the name of your new habit:");
    if (habitName) {
        addNewHabit(habitName);
    }
});

function loadHabits() {
    habitListContainer.innerHTML = "";
    habitData.forEach(habit => {
        createHabitElement(habit);
    });
}

loadHabits();
