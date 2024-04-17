// The time complexity of addToZero is O(n^2) 
function addToZero(nums) {
    let check = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(0 - nums[i])) {
            check = true;
            break;
        }
    }
    return check;
}

// The time complexity of hasUniqueChars is O(n) 
function hasUniqueChars(word) {
    let check = true;
    let hashMap = {};
    for (let char of word) {
        hashMap[char] = hashMap[char] + 1 || 1;
        if (hashMap[char] > 1) {
            check = false;
            break;
        }
    }
    return check;
}

// The time complexity of isPangram is O(n) 
function isPangram(str) {
    let check = false;
    let hashMap = {};
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase();
    for (let char of str) {
        if (alphabet.includes(char)) {
            hashMap[char] = true;
        }
    }
    for (let char of alphabet) {
        if (!hashMap[char]) {
            return false;
        }
    }
    return true;
}

// The time complexity of findLongestWord is O(n) 
function findLongestWord(arr) {
    let length = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
        }
    }
    return length;
}