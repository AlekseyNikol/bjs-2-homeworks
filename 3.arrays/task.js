function compareArrays(arr1, arr2) {
    let comperison;
    comperison = arr1.length === arr2.length && arr1.every((n,i) => n == arr2[i])

  return comperison
}

function getUsersNamesInAgeRange(users, gender) {
    let filters;
    let sumAge;
    let result;
    if (users.length == 0) {
        result = 0;
    } else if (gender == "мужской") {
        filters = users.filter(users => users.gender == "мужской")
        //console.log(filters)

        sumAge = filters.map((filters, sum) => sum += filters.age - sum);
        //console.log(sumAge)

        result = sumAge.reduce((a, b) => (a + b)) / sumAge.length

    } else if (gender == "женский") {
        filters = users.filter(users => users.gender == "женский")

        sumAge = filters.map((filters, sum) => sum += filters.age - sum);

        result = sumAge.reduce((a, b) => (a + b)) / sumAge.length
    } else {
        result = 0;
    }
    return result
}