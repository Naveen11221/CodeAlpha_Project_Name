document.getElementById('calculateButton').addEventListener('click', calculateAge);

function calculateAge() {
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value) - 1; // Month is 0 indexed in JavaScript
    var year = parseInt(document.getElementById('year').value);

    var dob = new Date(year, month, day);
    var now = new Date();
    
    var age = now.getFullYear() - dob.getFullYear();
    var monthDiff = now.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
        age--;
    }
    
    document.getElementById('result').innerHTML = "Your age is: " + age;
}
