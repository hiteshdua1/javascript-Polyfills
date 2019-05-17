// We need to set encoding so that we do not get the data as buffer 
process.stdin.setEncoding('utf-8');

var inputString = '';

// Read all data
process.stdin.on('data', data => {
    // let's store the data in a variable so that it becomes easy for us to use
    inputString += data;
});

// Split data line by line and update the original string as array 
// once we get on 'end' handler called
process.stdin.on('end', _ => {
    // Trim tralining white spaces for complete data and each line (using map)
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    
    // Let's start with the input on main
    main();
});

// Let's expose a function so that we read each line, which increments the counter
let currentLine = 0;
function readLine() {
    return inputString[currentLine++];
}

function main() {
    // here do the processing based on each line
};