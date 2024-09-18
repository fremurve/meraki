document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const timestamp = new Date().toLocaleString();
    
    const data = {
        fullName: fullName,
        email: email,
        timestamp: timestamp
    };
    
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        alert('Datos enviados correctamente');
    }).catch(error => {
        console.error('Error:', error);
    });
});
