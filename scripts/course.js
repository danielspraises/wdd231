const courses = [
    {
        code: "WDD130",
        name: "Web Fundamentals",
        credits: 3,
        completed: true,
        subject: "WDD"
    },

    {
        code: "WDD131",
        name: "Dynamic Web Fundamentals",
        credits: 3,
        completed: true,
        subject: "WDD"
    },

    {
        code: "WDD231",
        name: "Web Frontend Development I",
        credits: 3,
        completed: false,
        subject: "WDD"
    },

    {
        code: "CSE110",
        name: "Programming Building Blocks",
        credits: 2,
        completed: true,
        subject: "CSE"
    },

    {
        code: "CSE111",
        name: "Programming with Functions",
        credits: 2,
        completed: true,
        subject: "CSE"
    }
];

const coursesContainer = document.querySelector("#courses");
const totalCredits = document.querySelector("#totalCredits");

function displayCourses(courseList) {

    coursesContainer.innerHTML = "";

    courseList.forEach(course => {

        const div = document.createElement("div");

        div.classList.add("course-card");

        if (course.completed) {
            div.classList.add("completed");
        }

        div.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} Credits</p>
        `;

        coursesContainer.appendChild(div);
    });

    const credits = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    totalCredits.textContent =
        `Total Credits: ${credits}`;
}

displayCourses(courses);

/* FILTER BUTTONS */

document.querySelector("#allBtn")
.addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wddBtn")
.addEventListener("click", () => {

    const filtered = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(filtered);
});

document.querySelector("#cseBtn")
.addEventListener("click", () => {

    const filtered = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(filtered);
});