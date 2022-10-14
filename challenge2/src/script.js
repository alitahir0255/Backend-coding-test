
// JavaScript program to print all
// repeating elements
 
function printRepeating(arr, n)
{
    // Store elements and their counts in
    // hash table
    var mp = new Map();
    for (var i = 0; i < n; i++)
    {
        if(mp.has(arr[i]))
            mp.set(arr[i], mp.get(arr[i])+1)
        else   
            mp.set(arr[i], 1)
    }
 
    // Since we want elements in same order,
    // we traverse array again and print
    // those elements that appear more than
    // once.
    for (var i = 0; i < n; i++) {
        if (mp.get(arr[i]) > 1) {
            document.write( arr[i] + " ");
 
            // This is tricky, this is done
            // to make sure that the current
            // element is not printed again
            mp.set(arr[i], 0);
        }
    }
}
 
// Driver code
var arr = [ 12, 10, 9, 45, 2, 10, 10, 45 ];
var n = arr.length;
printRepeating(arr, n);