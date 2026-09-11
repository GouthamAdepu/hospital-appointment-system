const patientForm = document.getElementById("patientForm");

if (patientForm) {
    patientForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("patientName").value;
        const age = document.getElementById("patientAge").value;

        document.getElementById("patientMessage").textContent =
            `Patient ${name}, age ${age}, registered successfully.`;
    });
}
