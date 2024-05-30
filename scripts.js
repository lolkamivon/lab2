function sendData() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name === "" || phone === "") {
        alert("Please fill in all fields");
        return;
    }

    fetch('/save-data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, phone })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Data saved successfully!");
        } else {
            alert("Failed to save data.");
        }
    })
    .catch(error => console.error('Error:', error));
}