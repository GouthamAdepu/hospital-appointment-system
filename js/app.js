const historyList =
    document.getElementById("historyList");

if (historyList) {
    const appointments = [
        {
            patient: "Rahul",
            doctor: "Dr. Kumar",
            date: "2026-09-10",
            status: "Completed"
        },
        {
            patient: "Priya",
            doctor: "Dr. Sharma",
            date: "2026-09-11",
            status: "Scheduled"
        }
    ];

    appointments.forEach(function(appointment) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${appointment.patient}</td>
            <td>${appointment.doctor}</td>
            <td>${appointment.date}</td>
            <td>${appointment.status}</td>
        `;

        historyList.appendChild(row);
    });
}