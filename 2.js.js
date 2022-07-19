function minimumWaitingTime(queries) {
    queries = queries.sort((a, b) => a - b); // nlogn - time taken by sorting algorithm
    let totalWaitingTime = 0

    for (let i = 0; i < queries.length; i++) { 
        totalWaitingTime += queries[i] * (queries.length - (i + 1))
    }
  return totalWaitingTime;
}
// console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
exports.minimumWaitingTime = minimumWaitingTime;

// O(nlogn) + O(n)
// O(nlogn) T.C
// space = O(1)
