function isPalindrome(str) {
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
  console.log(isPalindrome("hello")); // Output: false