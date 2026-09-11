const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const patient =
            document.getElementById("appointmentPatient").value;

        const doctor =
            document.getElementById("appointmentDoctor").value;

        const date =
            document.getElementById("appointmentDate").value;

        document.getElementById("appointmentMessage").textContent =
            `Appointment scheduled for ${patient} with Dr. ${doctor} on ${date}.`;

        appointmentForm.reset();
    });
}