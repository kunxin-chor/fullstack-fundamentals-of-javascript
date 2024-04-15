// write your code here

function countThePositives(int1,int2,int3){
    
    let data = [int1, int2, int3];
    let count = 0;
    for (let item of data){
        if (item > 0){
            count ++;
        }
    }
    return count;
}

// write your code above this line
// do not modify the code below this line
module.exports = {countThePositives};

// To test your code
// in CLI type, npm install
// when that is done, in CLI type, npm run test;
