document.getElementById("generateReport").addEventListener("click", async () => {
  const meetingNotes = document.getElementById("meetingNotes").value;
  const resultDiv = document.getElementById("result");

  if (meetingNotes.trim()) {
    resultDiv.innerHTML = "Generating report...";
    try {
      const response = await fetch("https://your-backend-service.com/chatgpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ meeting_notes: meetingNotes })
      });

      const data = await response.json();
      resultDiv.innerHTML = data.report || "Error: Unable to generate report";
    } catch (error) {
      console.error("Error:", error);
      resultDiv.innerHTML = "Error: Unable to generate report";
    }
  } else {
    resultDiv.innerHTML = "Please enter your meeting notes";
  }
});
