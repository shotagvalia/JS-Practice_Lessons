function countOccurences(string, char) {
    let answer = string.split("").reduce((counter, currentValue) => {
        if (currentValue === char) {
            return ++counter;
        }
        return counter;
    }, 0)

    return answer;
}

console.log(countOccurences("w3resource.com", "o"))