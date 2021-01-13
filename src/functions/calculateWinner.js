const MATCHNUL = -1;

export function calculateWinner(squares) {

    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(i = 0 ; i < lines.length; i++) {
        const premiereVal = squares[lines[i][0]];
        if(lines[i].every(idx => squares[idx] === premiereVal)) {
            return premiereVal;
        }
    }

    
    if(squares.every(value => value !== null)) {
        return MATCHNUL;
    }

    return null;
}
