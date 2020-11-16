// s = start point, t = end point, a = apple tree (to the right of house), b = orange tree (to the left of house)
// when fruit falls from tree, it lands d units of distance from tree (negative left, positive right)
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesInRange = 0;
    let orangesInRange = 0;

    apples.map(function(apple){
        if (a + apple >= s && a + apple <= t) { applesInRange += 1; }
    })
    oranges.map(function(orange){
        if (b + orange >= s && b + orange <= t) { orangesInRange += 1; }
    })
    console.log(`Apples: ${applesInRange}, Oranges: ${orangesInRange}`);
}
// countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);


// if kangaroos will eventually land on same spot, return YES, if not, return NO
// x1/x2 = start for kangaroo 1/2, v1/v2 = distance of jumps for kangaroo 1/2
function kangaroo(x1, v1, x2, v2) {
    for (var i = 1; i < parseInt(((x1 + x2) / 2) * 10); i++) {
        if ((v1 * i + x1) === (v2 * i + x2)) {
            return 'YES';
        }
    }
    return 'NO';
}
// console.log(kangaroo(43,5,49,3));


// get the sum of numbers (ex. [5,3,9,7])
// first iteration: 1*5=5, 1*5=5, 
function sortedSum(a) {
    let sum = 0;
    // Write your code here
    if (a[0] < a[1]) {a.shift()}
    for (var i = 0; i < a.length; i++) {
        let arr = a.slice(0,i+1).sort();
        for (var j = 0; j < arr.length; j++) {
            sum += (j+1) * arr[j];
        }
    }
    return sum;
}
// console.log(sortedSum([2,5,9]))


// string needs to be RSRSRS (get mininmus character swaps for string)
function minimumSwaps(status) {
    let statusArr = status.split("");
    let swaps = 0;

    if (statusArr.length < 3) {
        if (statusArr[0] === statusArr[1]) { statusArr[0] === 'R' ? statusArr[0] = 'S' : statusArr[0] = 'R'; swaps += 1; }
    }
    if (statusArr[0] === statusArr[1] && statusArr[2] !== statusArr[1]) { statusArr[0] === 'R' ? statusArr[0] = 'S' : statusArr[0] = 'R'; swaps += 1;}
    if (statusArr[statusArr.length-1] === statusArr[statusArr.length-2] && statusArr[statusArr.length-3] !== statusArr[-2]) { statusArr[statusArr.length-1] === 'R' ? statusArr[statusArr.length-1] = 'S' : statusArr[statusArr.length-1] = 'R'; swaps += 1;}
    for (var i = 1; i < statusArr.length-1; i++) {
        if (statusArr[i-1] === statusArr[i] && statusArr[i] === statusArr[i+1]) {
            statusArr[i] === 'R' ? statusArr[i] = 'S' : statusArr[i] = 'R';
            swaps += 1;
        } else if (statusArr[i] === statusArr[i-1]) {
            swaps += 2;
            statusArr[i] === 'R' ? statusArr[i] = 'S' : statusArr[i] = 'R';
            statusArr[i+1] === 'R' ? statusArr[i+1] = 'S' : statusArr[i+1] = 'R';
        }
    }
    return swaps;
}
// console.log(minimumSwaps('RSRRSSSR'));


// if first number in 2 digit number is larger
function largestSwap(num) {
    num = num.toString().split("");
	return num[0] >= num[1];
}
// console.log(largestSwap(43));


// return string with each character doubled
function doubleChar(str) {
	let newStr = "";
	str.split("").map(function(letter){
		newStr += `${letter}${letter}`;
    })
    return newStr;
}
// doubleChar("hello world");


// given an array of numbers, return an array of only the evens, which also have even indices
function getOnlyEvens(nums) {
	let evens = [];
	for (let i = 0; i < nums.length; i++) 
	{ if (nums[i] % 2 === 0 && i % 2 === 0) {evens.push(nums[i])} }
	return evens;
}
// getOnlyEvens([1,2,3,4]);
// console.log('\n');


// number of smileys
// :( or ):  -1, :) or (:  +1
function happinessNumber(s) {
	let smileys = 0;
	for (var i = 0; i < s.split("").length-1; i++) {
		if (`${s[i]}${s[i+1]}` === ':(' || `${s[i]}${s[i+1]}` === '):') {
            smileys -= 1;
        } else if (`${s[i]}${s[i+1]}` === ':)' || `${s[i]}${s[i+1]}` === '(:') {
            smileys += 1;
        }
    }
    return smileys;
}
// console.log(happinessNumber(':):('));


// find the second largest item in an array
function secondLargest(arr) {
    arr.splice(arr.indexOf(Math.max(...arr)),1);
    return Math.max(...arr);
}
// console.log(secondLargest([10,20,50,30,40]));


// return sum of all lower number integers multiplied
function factorial(int) {
	let sum = 1;
	for (var i = 1; i <= int; i++) {
        sum *= i;
    }
    return sum;
}
// console.log(factorial(3));


// if y is 1, return 0, otherwise return 1
function flip(y) {
	return y === 1 ? 0: 1;
}
// console.log(flip(1));
// console.log(flip(0));


// find the median of two sorted arrays
var findMedianSortedArrays = function(nums1, nums2) {
    let newNums = nums1.concat(nums2);
    if (newNums.length < 2) { return newNums[0]; }
    for (var i = 0; i < newNums.length; i++) {
        for (var j = 0; j < newNums.length-i-1; j++) {
            if (newNums[j]>newNums[j+1]) {
                var num = newNums[j];
                newNums[j] = newNums[j+1]; newNums[j+1] = num;
            }
        }
    }
    return newNums.length % 2 !== 0 ? newNums[Math.ceil(newNums.length-1)/2] : (newNums[newNums.length/2] + newNums[(newNums.length/2)-1])/2;
};
// console.log(findMedianSortedArrays([1,2,3,4,5],[]));
// console.log(findMedianSortedArrays([1,2],[3,4]));


function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                var num = arr[j];
                arr[j] = arr[j+1]; arr[j+1] = num;
            }
        }
    }
    return arr;
}
// bubbleSort([1,5,2,9,-6,-3]);


// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let points = [0,0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) { points[0] += 1; }
        else if (a[i] < b[i]) { points[1] += 1; }
    }
    return points;
}
// console.log(compareTriplets([17,28,30],[99,16,8]))


// "(5((10)8))" -> 5*1 + 10*3 + 8*2 -> 51
function scoreIt(s) {
    let nestNum = 0;
    let num = 0;
    for (var i = 0; i < s.split('').length; i++) {
        if (s[i] === '(') { nestNum++; }
        else if (s[i] === ')') { nestNum--; }
        else {
            var temp = "";
            for (var j = i; j < s.split('').length; j++) {
                if (s[j] !== ')' && s[j] !== '(') {
                    if (!isNaN(s[j])) { temp += s[j]; }
                    continue;
                }
                break;
            }
            if (s[i+1] !== '(' || s[i+1] !== ')') { i += j-i-1 };
            num += parseInt(temp)*nestNum;
        }
    }
    return num;
}
// console.log(scoreIt("(5((10)8))"));
// console.log(scoreIt("5(abc8de)"));


// return "Boom!" if 7 is somewhere in array, and "there is no 7 in the array" if not
function sevenBoom(arr) {
    for (var i = 0; i < arr.length; i++) { if (arr[i].toString().split('').includes('7')) { return "Boom!"; } }
    return "there is no 7 in the array";
}
// console.log(sevenBoom([2,55,60,97,86]));


// given a string, return number of vowels
// a, e, i, o, u
function countVowels(str) {
    let vowels = 0;
    str.split('').map(function(letter){ if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') { vowels++; } })
    return vowels;
}
// console.log(countVowels('pumpkin'));


// repeat text n times
function repetition(txt, n) {
    let newTxt = "";
    for (var i = 0; i < n; i++) {
        newTxt += txt;
    }
    return newTxt;
}
// console.log(repetition('kiwi',3));


// return weather 
function isAvgWhole(arr) {
    let avg = 0;
    arr.map(function(num){ avg += num; })
    return avg/arr.length % 1 === 0 ? true : false;
}
// console.log(isAvgWhole([1,5,6]));


// factorial of 3: 3 * 2 * 1 = 6
function factorial(z) {
    if (z === 0) { return 1; }
    let factorial = z;
    for (var i = z; i > 1; i--) { factorial *= i-1; }
    return factorial;
}
// console.log(factorial(9));


// if "bomb" is found in string, return "Duck!!!", otherwise return "There is no bomb, relax."
function bomb(str) {
	return str.toLowerCase().includes('bomb') ? "Duck!!!" : "There is no bomb, relax.";
}
// console.log(bomb("There is a bomb."));


// create a staircase using recursion
function staircase(n,r=n) {
    if(r==0){return 0;} // if no more to print
    if (n > 0) {
        // Your recursive implementation of the code here.
        console.log(`${"_".repeat(r-1)}${"#".repeat(n-(r-1))}`);
        return staircase(n,r-1);
    } else {
        console.log(`${"#".repeat(Math.abs(r))}${"_".repeat(r+Math.abs(n))}`);
        return staircase(n,r+1)
    }
}
// staircase(5);
// staircase(-5);


// get number of elements in nested array
function getLength(arr,numItems=0) {
    if (arr.length === 0) { return 0; }
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (arr[i].length < 2 && !Array.isArray(arr[i][0])) { numItems++; }
            else { return getLength(arr[i],numItems); }
        } else { numItems++; }
    }
    return numItems;
}
// console.log(getLength([1, [2], 1, [2], 1]));


// sortByLength("Hello my friend") -> "my Hello friend"
function sortByLength(str) {
    let strArr = str.split(' ');
	for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < strArr.length-i-1; j++) {
            if (strArr[j].length > strArr[j+1].length) {
                var newItem = strArr[j];
                strArr[j] = strArr[j+1];
                strArr[j+1] = newItem;
            }
        }
    }
    return strArr.join(' ');
}
// console.log(sortByLength("I am typing on a computer"));


// create a function that takes two dates and returns the number of days between the first and second date.
function getDays(date1, date2) {
    let monthsBetween = Math.abs(date1.getMonth() - date2.getMonth()) + (12 * Math.abs(date1.getYear() - date2.getYear()));
    let daysBetween = 0;

    // if dates are within the same month
    if (!monthsBetween) { return Math.abs(date1.getDate() - date2.getDate()); }

    // for each month, get days in month
    if (date1.getYear() > date2.getYear()) { // date 1 is years further than date 2
        let year = date2.getYear();
        while (!(year === date1.getYear())) { // while the year is not the correct year
            for (var i = date2.getMonth(); i < monthsBetween; i++ ) {
                if (i === (date2.getMonth())) { // first iteration
                    daysBetween += (new Date(year, i+1, 0).getDate() - date2.getDate()) + date1.getDate();
                    continue;
                }
                if (i % 12 === 0)  { year++; break; } // if new year
                daysBetween += new Date(year, i, 0).getDate(); // add new months
            }
        }
        return daysBetween;
    }
    else if (date1.getYear() < date2.getYear()) { // date 2 is years further than date 1
        let year = date1.getYear();
        while ((year !== date2.getYear())) { // while the year is not the correct year
            for (var i = date1.getMonth(); i < monthsBetween; i++ ) {
                if (i === (date1.getMonth())) { // first iteration
                    daysBetween += (new Date(year, i+1, 0).getDate() - date1.getDate()) + date2.getDate();
                    continue;
                }
                if (i % 12 === 0)  { year++; break; } // if new year
                daysBetween += new Date(year, i, 0).getDate(); // add new months
            }
        }
        return daysBetween;
    } 
    else { // date 1 and date 2 are within the same year
        if (date1.getMonth() > date2.getMonth()) { // if date 1 is months further than date 2
            for (var i = date2.getMonth(); i < date1.getMonth()-1; i++) { // date 2 is years further than date 1
                daysBetween += new Date(date1.getYear(), i, 0).getDate();
            }
            daysBetween += date1.getDate();
        }
        else { // if date 2 is months further than date 1
            for (var i = date1.getMonth(); i < date2.getMonth(); i++) { // date 2 is years further than date 1
                daysBetween += new Date(date1.getYear(), i, 0).getDate();
            }
            daysBetween += date2.getDate();
        }
        return daysBetween;
    }
}
// console.log(getDays(new Date('January 1, 2019'), new Date('December 29, 2018')));
// console.log(getDays(new Date("July 23, 2021"),new Date("October 5, 2020")));


// create a function that takes in an array of numbers and returns the sum of its cubes
function sumOfCubes(nums) {
    if (!nums.length > 0) { return 0; }
    let sum = 0;
    nums.map(function(num){
        sum += num * num * num;
    })
	return sum;
}
// console.log(sumOfCubes([3, 4, 5]))
// console.log(sumOfCubes([]))


// reverseWords(" the sky is blue") -> "blue is sky the"
function reverseWords(string) {
    let newString = "";
    let arr = string.split(' ');
    for (var i = 0; i < arr.length; i++) {
        newString += arr[(arr.length-i)-1];
        if (i !== arr.length-1) { newString+=" "; }
    }
    return newString;
}
// console.log(reverseWords(" the sky is blue"));


// calculateDifference({ "baseball bat": 20 }, 5) -> 15
function calculateDifference(obj, limit) {
    let sum = 0;
    let vals = Object.values(obj);
    vals.map(function(val){ sum += val; })
    if (sum - limit === 0) { return 1; }
    return sum - limit;
}
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));


// zipIt(["Elise", "Mary"], ["John", "Rick"]) -> [["Elise", "John"], ["Mary", "Rick"]]
// zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]) -> "sizes don't match"
function zipIt(women, men) {
    let womenMen = [];
    
    if (women.length !== men.length) { return "sizes don't match"; }
    for (var i = 0; i < women.length; i++) {
        womenMen.push([women[i],men[i]]);
    }
    return womenMen;
}
// console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));


// sortNumsAscending([1, 2, 10, 50, 5]) -> [1, 2, 5, 10, 50]
function sortNumsAscending(arr) {
    if (!arr) { return []; }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
    return arr;
}
// console.log(sortNumsAscending([1, 2, 10, 50, 5]));


// give max score: maximumScore([{"title":"X","score":2},{"title":"Y","score":3}]) -> 5
function maximumScore(tileHand) {
    let score = 0;
    tileHand.map(function(hand){
        score += hand['score'];
    });
    return score;
}
// console.log(maximumScore([{"title":"X","score":2},{"title":"Y","score":3}]));


// myPi(4) -> 3.1416
function myPi(n) {
	return parseFloat(Math.PI.toFixed(n));
}
// console.log(myPi(4));


// return index of first vowel
function firstVowel(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") 
        { return i; }
    }
}
// console.log(firstVowel('STRAWBERRY'));


// if all numbers add up to an even number, return Evenish, otherwise Oddish
function oddishOrEvenish(num) {
	let sum = 0;
	num.toString().split('').map(function(number){
		sum+=parseInt(number);
    })
	return sum % 2 === 0 ? "Evenish" : "Oddish";
}
// console.log(oddishOrEvenish(12345));


// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"
function formatPhoneNumber(numbers) {
	return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
}
// console.log(formatPhoneNumber([5,1,9,5,5,5,4,4,6,8]));


/* const matrix1 = [[0,1,0,0],[1,0,1,1],[0,1,0,1],[0,1,1,0]]
Test.assertEquals(isAdjacent(matrix1, 0, 1), true)
Test.assertEquals(isAdjacent(matrix1, 0, 2), false) */
function isAdjacent(matrix, node1, node2) {
	for (var i = 0; i < matrix[node1].length-1; i++) {
        if (matrix[node1][i] === matrix[node2][i]) { return false; }
    }
    return true;
}
// console.log(isAdjacent([[0,1,0,0],[1,0,1,1],[0,1,0,1],[0,1,1,0]],0,1));


// [0,5,9,1] -> [9,5,1,0]
function sortNumsDescending(nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length-i-1; j++) {
            if (nums[j] < nums[j+1]) {
                var swap = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = swap;
            }
        }
    }
    return nums;
}
// console.log(sortNumsDescending([0,5,9,1]));


// generation(2, "f") -> "granddaughter"
function generation(x, y) {
    let family = {"f":{6:"great granddaughter",5:"granddaughter",4:"daughter",2:"mother",1:"grandmother",0:"great grandmother"},"m":{6:"great grandson",5:"grandson",4:"son",2:"father",1:"grandfather",0:"great grandfather"}};
    if (x === 0) { return "me!" };
    return family[y][x+3];
}
// console.log(generation(-3, "m"))


// find largest number in array
// Test.assertSimilar(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]), [-34, -2, 7])
function findLargestNums(arr) {
    let newArr = [];
	for (var i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) { max = arr[i][j]; }
        }
		newArr.push(max);
    }
    return newArr;
}
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))