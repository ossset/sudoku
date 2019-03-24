let matrix = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
  ];

  function solveSudoku(matrix) {
    let nan = {};
    let incorrect;
    let zeroes = 81;
    while (zeroes > 0) {
        zeroes = 0;
        for(let v = 0; v < matrix.length; v++){
            for(let h = 0; h < matrix.length; h++){
                if(matrix[v][h] == 0) {
                    nan ={};
                    for(let i = 0; i<9;i++){
                        if(matrix[v][i] > 0){
                            nan[matrix[v][i]] = true;
                        }
                        if(matrix[i][h] > 0){
                            nan[matrix[i][h]] = true;
                        }
                    }
                    for(let vBox = Math.floor(v/3)*3; vBox < Math.floor(v/3) * 3 + 3; vBox++){
                        for(let hBox = Math.floor(h/3)*3; hBox < Math.floor(h/3) * 3 + 3; hBox++){
                            if(matrix[vBox][hBox]){
                                nan[matrix[vBox][hBox]] = true;
                            }
                        }
                    }
                    incorrect = Object.keys(nan);
                    if (incorrect.length == 8){
                        for(let i = 1; i < 10; i++){
                            if(incorrect.indexOf(String(i)) < 0){
                                matrix[v][h] = i;
                            }
                        }
                    }
                    else {
                        zeroes ++;
                    }
                }
            }
        }
    }
        return matrix;
}
console.log(solveSudoku(matrix));

