var convert = function(s, numRows) {
    if(numRows === 1) return s;

    const rows = Array.from({length: numRows}, () => []);
    let currentRow = 0;
    let goingDown = false;

    for(const char of s){
        rows[currentRow].push(char);
        if(currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1: -1;
    }
    let result = '';
    for(const row of rows){
        result += row.join('');
    }
    return result;
};

//Example usage:
console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));