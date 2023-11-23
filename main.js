(() => {
    const workFromHomeId = "105806"
    const workFromOfficeId = "105041"
    const rows =  Array.from(document.querySelectorAll('.hours-report tr'));
    // first row is the table header
    for(let i = 1; i< rows.length; i++) {

        // this is a weekend!
        if (rows[i].querySelector('td:first-child').innerText.match(/[וש]/)) { 
        continue;
        }

        // skip FRI / SAT
        const dateStr = rows[i].querySelector('.dateText').innerText
        const dateArr = dateStr.split(' ')[0].split('/')
        const date = new Date(dateArr[2], parseInt(dateArr[1]) - 1, dateArr[0])
        if (date.getDay() >= 5) {
            continue;
        }
        rows[i].querySelector('.checkIn input').value = '10:00'
        rows[i].querySelector('.checkOut input').value = '19:00'
        rows[i].querySelector('.missing select').value = date.getDay() % 2 ? workFromHomeId : workFromOfficeId
        } 
})();
