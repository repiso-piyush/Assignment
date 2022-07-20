function numberOfBinaryTreeTopologies(n){
     let cache =[1]
     for(let m =1;m<n+1;m++){
     	let numOfTrees = 0;
     	
     	for(let leftTreeSize = 0;leftTreeSize<m;leftTreeSize++){
     		let rightTreeSize =m-1-leftTreeSize;
     		let numOfLeftTrees = cache[leftTreeSize];
     		let numOfRightTrees = cache[rightTreeSize];
     		numOfTrees+=numOfLeftTrees*numOfRightTrees;

     	}
     	cache.push(numOfTrees)
     }
     return cache[n]
    }

// console.log(numberOfBinaryTreeTopologies(3));
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;
