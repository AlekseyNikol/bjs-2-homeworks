function compareArrays(arr1, arr2) {
    let comperison;
    comperison = arr1.length === arr2.length && arr1.every((n,i) => n == arr2[i])

  return comperison
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(users => users.gender === gender).reduce((acc, item, index, arr) => (acc + item.age / arr.length), 0)

/*
    let result;
    
    result = users.filter(users => users.gender === gender).map((users, sum) => sum += users.age - sum).length

    return users.filter(users => users.gender === gender).map((users, sum) => sum += users.age - sum).reduce((a, b) => (a + b),0)/result 
 */
}