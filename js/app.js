const doctorForm = document.getElementById("doctorForm");

if (doctorForm) {
    doctorForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("doctorName").value;
        const specialization =
            document.getElementById("specialization").value;

        const li = document.createElement("li");

        li.textContent =
            `${name} - ${specialization}`;

        document.getElementById("doctorList").appendChild(li);

        doctorForm.reset();
    });
}