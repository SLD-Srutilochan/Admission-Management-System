// JavaScript for interactivity
document.getElementById("studentDetailsBtn").addEventListener("click", () => {
    showSection("studentDetails");
});

document.getElementById("processAdmissionBtn").addEventListener("click", () => {
    processAdmission();
    showSection("processAdmission");
});

document.getElementById("viewCoursesBtn").addEventListener("click", () => {
    showSection("coursesOffered");
});

document.getElementById("viewPricesBtn").addEventListener("click", () => {
    showSection("coursePrices");
});

document.getElementById("studentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Student details submitted successfully!");
});

function showSection(sectionId) {
    const sections = document.querySelectorAll("section > div");
    sections.forEach((section) => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

function processAdmission() {
    // Example logic
    const marks = document.getElementById("marks").value;
    const result = document.getElementById("admissionResult");

    if (marks >= 85) {
        result.innerText = "Eligible for Computer Science Engineering (CSE)";
    } else if (marks >= 82.25) {
        result.innerText = "Eligible for Computer Science and Information Technology (CSIT)";
    } else if (marks >= 78.5) {
        result.innerText = "Eligible for Artificial Intelligence and Machine Learning (AIML)";
    } else {
        result.innerText = "Not eligible for any branch.";
    }
}
