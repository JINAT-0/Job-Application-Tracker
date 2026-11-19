let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");
let currentStatus = "all-filter-btn";

let interviewList = [];
let rejectedList = [];

const allcards = document.getElementById("all-job-cards");
const filteredSection = document.getElementById("filtered-section");
const jobCount = document.getElementById("jobCount");
const sectionJobCount = document.getElementById("secJobCount");

function countCalculator() {
    // counting total job cards and added the number to the total in head

    total.innerText = allcards.children.length;
    jobCount.innerText = allcards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
countCalculator();

// Toggling throught All Interview and Rejected buttons
function toggleButtons(id) {
    currentStatus = id;
    // shob button gula dhorlam
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interviewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

    // same eta formate e button gula niye ashlam
    allFilterBtn.classList.remove("bg-primary", "text-white");
    interviewFilterBtn.classList.remove("bg-primary", "text-white");
    rejectedFilterBtn.classList.remove("bg-primary", "text-white");

    // selected btn tare change kore dilam
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove("bg-white");
    selectedBtn.classList.add("bg-primary", "text-white");

    if (id == "interview-filter-btn") {
        allcards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterviewSection();
        
    } else if (id == "all-filter-btn") {
        allcards.classList.remove("hidden");
        filteredSection.classList.add("hidden");
        countCalculator();
        sectionJobCount.innerText = "";
    } else if (id == "rejected-filter-btn") {
        allcards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejectSection();
        
    }
}

