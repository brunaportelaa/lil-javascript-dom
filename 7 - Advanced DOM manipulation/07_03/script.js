document.addEventListener('DOMContentLoaded', () => {
    // Sample JSON data
    const employees = [
        { name: 'John Doe', position: 'Project Manager', department: 'Development' },
        { name: 'Jane Smith', position: 'UI/UX Designer', department: 'Design' },
        { name: 'Emma Johnson', position: 'Software Engineer', department: 'Development' }
    ];

    const table = document.getElementById('employeeTable');

    let thead = table.createTHead()
    let row = thead.insertRow()
    let headers = Object.keys(employees[0]).map(key => key.charAt(0).toUpperCase() + key.slice(1))
    console.log(headers)

    headers.forEach (text => {
        let th = document.createElement('th')
        th.textContent = text
        row.appendChild(th)
    })


    let tbody = table.createTBody()
    employees.forEach(emp => {
        let row = tbody.insertRow()
        Object.values(emp).forEach( text => {
            let cell = row.insertCell()
            cell.textContent = text
        })
    })




    
});
