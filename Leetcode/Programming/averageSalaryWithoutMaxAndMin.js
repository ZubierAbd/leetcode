var average = (salary) => {
    let maxSalary = Math.max(...salary)
    let minSalary = Math.min(...salary)


    var sum = 0;

    for (let i = 0; i < salary.length; i++) {
        sum += salary[i];
    }

    let x = (sum - maxSalary - minSalary);
    return x / (salary.length - 2);
}