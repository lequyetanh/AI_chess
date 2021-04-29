
import * as Var from './variable';
//kiem tra xem vi tri co the di kha dung hay ko
export function checkPositionPawnKnightKing(myColor, position, keyBoard) {
  if (keyBoard[position[0]][position[1]].status == 'occupy') {
    if (keyBoard[position[0]][position[1]].chessman.color != myColor) {
      return {
        idKeyBoard: keyBoard[position[0]][position[1]].idKeyBoard,
        position: position,
        status: 'enemy'
      }
    }
  }
  if (keyBoard[position[0]][position[1]].status == 'blank') {
    return {
      idKeyBoard: keyBoard[position[0]][position[1]].idKeyBoard,
      position: position,
      status: 'blank'
    }
  }
}

export function checkPositionCastleBishopQueen(array, color, keyBoard) {
  let arrayAvailablePosition = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] >= 0 && array[i][0] <= 7 && array[i][1] >= 0 && array[i][1] <= 7) {
      let currentAvailablePosition = this.checkPositionPawnKnightKing(color, array[i], keyBoard);
      if (currentAvailablePosition == undefined) {
        break;
      } else {
        if (currentAvailablePosition.status == 'blank') {
          arrayAvailablePosition.push(currentAvailablePosition);
        }
        if (currentAvailablePosition.status == 'enemy') {
          arrayAvailablePosition.push(currentAvailablePosition);
          break;
        }
      }
    }
  }
  // console.log(arrayAvailablePosition)
  return arrayAvailablePosition;
}


export function sortArray(array, direction) {
  let array_temporary = [];
  this.list_array_sort = [];
  switch (direction) {
    case 'cotTo':
      array_temporary = this.getMaxColumn(array);
      break;
    case 'cotNho':
      array_temporary = this.getMinColumn(array);
      break;
    case 'hangTo':
      array_temporary = this.getMaxRow(array);
      break;
    case 'hangNho':
      array_temporary = this.getMinRow(array);
      break;
  }
  // console.log(array_temporary)
  return array_temporary;
}

export function getMaxColumn(array) {
  // console.log(array)
  let max = [-1, -1];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i][1]);
    // console.log(max)
    if (array[i][1] > max[1]) {
      max = array[i];
    }
  }
  this.list_array_sort.push(max);
  array.splice(array.indexOf(max), 1);
  if (array[0] != undefined) {
    this.getMaxColumn(array);
  }
  return this.list_array_sort;
}

export function getMinColumn(array) {
  let max = [10, 10];
  for (let i = 0; i < array.length; i++) {
    if (array[i][1] < max[1]) {
      max = array[i];
    }
  }
  this.list_array_sort.push(max);
  array.splice(array.indexOf(max), 1);
  if (array[0] != undefined) {
    this.getMinColumn(array);
  }
  return this.list_array_sort;
}

export function getMaxRow(array) {
  let max = [-1, -1];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] > max[0]) {
      max = array[i];
    }
  }
  this.list_array_sort.push(max);
  array.splice(array.indexOf(max), 1);
  if (array[0] != undefined) {
    this.getMaxRow(array);
  }
  return this.list_array_sort;
}

export function getMinRow(array) {
  let max = [10, 10];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    // console.log(max);
    if (array[i][0] < max[0]) {
      max = array[i];
    }
  }
  this.list_array_sort.push(max);
  array.splice(array.indexOf(max), 1);
  if (array[0] != undefined) {
    this.getMinRow(array);
  }
  return this.list_array_sort;
}

export function updateEnemy(color, keyBoard) {
  let enemy = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (keyBoard[i][j].chessman) {
        if (keyBoard[i][j].chessman.color == color) {
          enemy.push({
            idKeyBoard: keyBoard[i][j].idKeyBoard,
            position: keyBoard[i][j].position,
            color: color,
            idChessman: keyBoard[i][j].chessman.idChessman,
            nameChessman: keyBoard[i][j].chessman.nameChessman,
            move: keyBoard[i][j].chessman.move,
            image: keyBoard[i][j].chessman.image,
            point: keyBoard[i][j].chessman.point,
            availablePosition: keyBoard[i][j].chessman.availablePosition,
          })
        }
      }
    }
  }

  // console.log(enemy);
  return enemy;
}

export function getAvailablePosition(currentPosition, nameChessman, color, keyBoard) {

  // console.log(keyBoard);
  let arrayAvailablePosition = [];

  //xét đường đi của con tốt
  if (nameChessman == 'pawn') {

    //xét tốt trắng
    if (color == 'white') {
      this.listAllPosition = [
        [currentPosition[0] - 1, currentPosition[1]],
        [currentPosition[0] - 1, currentPosition[1] - 1],
        [currentPosition[0] - 1, currentPosition[1] + 1],
      ];

      for (let i = 0; i < this.listAllPosition.length; i++) {
        if (this.listAllPosition[i][0] >= 0 && this.listAllPosition[i][0] <= 7 && this.listAllPosition[i][1] >= 0 && this.listAllPosition[i][1] <= 7) {
          if (i == 0) {

            //không tồn tại quân cờ ở vị trí đó
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman == null) {

              //dùng hàm kiểm tra xem
              let currentAvailablePosition = this.checkPositionPawnKnightKing('white', this.listAllPosition[i], keyBoard);
              if (currentAvailablePosition != undefined) {
                arrayAvailablePosition.push(currentAvailablePosition);

                //nếu mà quân này mà chưa đi
                if (keyBoard[currentPosition[0]][currentPosition[1]].chessman.move == false) {
                  //xét vị trí đi 2 bước của quân tốt
                  if (keyBoard[currentPosition[0] - 2][currentPosition[1]].chessman == null) {
                    let currentAvailablePosition = this.checkPositionPawnKnightKing('white', [currentPosition[0] - 2, currentPosition[1]], keyBoard);
                    if (currentAvailablePosition != undefined) {
                      arrayAvailablePosition.push(currentAvailablePosition);
                    }
                  }
                }
              }
            }

            //tồn tại quân cờ đứng ở vị trí đó
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman) {

              //quân cờ đứng ở vị trí đó là kẻ thù
              if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman.color != color) {

              }
            }
          } else {
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman == null) {

            }
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman) {
              if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman.color != color) {
                let currentAvailablePosition = this.checkPositionPawnKnightKing('white', this.listAllPosition[i], keyBoard);
                if (currentAvailablePosition != undefined) {
                  arrayAvailablePosition.push(currentAvailablePosition);
                }
              }
            }
          }
        }
      }
    }

    //xét tốt đen
    if (color == 'black') {
      this.listAllPosition = [
        [currentPosition[0] + 1, currentPosition[1]],
        [currentPosition[0] + 1, currentPosition[1] - 1],
        [currentPosition[0] + 1, currentPosition[1] + 1]
      ];

      for (let i = 0; i < this.listAllPosition.length; i++) {
        if (this.listAllPosition[i][0] >= 0 && this.listAllPosition[i][0] <= 7 && this.listAllPosition[i][1] >= 0 && this.listAllPosition[i][1] <= 7) {

          //xet truong hop no nam ngay bên trên vị trí này
          if (i == 0) {

            //nếu mà vị trí ở trên vị trí quân tốt mà trống
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman == null) {

              let currentAvailablePosition = this.checkPositionPawnKnightKing('black', this.listAllPosition[i], keyBoard);
              if (currentAvailablePosition != undefined) {
                arrayAvailablePosition.push(currentAvailablePosition);

                // console.log(currentPosition)
                // console.log(keyBoard[currentPosition[0]][currentPosition[1]]);

                //vị trí hiện tại của quân tốt
                if (keyBoard[currentPosition[0]][currentPosition[1]].chessman.move == false) {
                  //xét vị trí đi 2 bước của quân tốt
                  if (keyBoard[currentPosition[0] + 2][currentPosition[1]].chessman == null) {
                    // console.log([[currentPosition[0] + 2], [currentPosition[1]]])
                    let currentAvailablePosition = this.checkPositionPawnKnightKing('white', [currentPosition[0] + 2, currentPosition[1]], keyBoard);
                    if (currentAvailablePosition != undefined) {
                      arrayAvailablePosition.push(currentAvailablePosition);
                    }
                  }
                }
              }
            }
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman) {
              if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman.color != color) {

              }
            }
          }

          //xét các trường hợp còn lại
          else {
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman == null) {

            }
            if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman) {
              if (keyBoard[this.listAllPosition[i][0]][this.listAllPosition[i][1]].chessman.color != color) {
                let currentAvailablePosition = this.checkPositionPawnKnightKing('black', this.listAllPosition[i], keyBoard);
                if (currentAvailablePosition != undefined) {
                  arrayAvailablePosition.push(currentAvailablePosition);
                }
              }
            }
          }
        }
      }
    }
  }

  if (nameChessman == 'knight') {
    this.listAllPosition = [
      [currentPosition[0] - 2, currentPosition[1] + 1],
      [currentPosition[0] - 1, currentPosition[1] + 2],
      [currentPosition[0] + 1, currentPosition[1] + 2],
      [currentPosition[0] + 2, currentPosition[1] + 1],
      [currentPosition[0] + 2, currentPosition[1] - 1],
      [currentPosition[0] + 1, currentPosition[1] - 2],
      [currentPosition[0] - 1, currentPosition[1] - 2],
      [currentPosition[0] - 2, currentPosition[1] - 1],
    ];
    for (let i = 0; i < this.listAllPosition.length; i++) {
      if (this.listAllPosition[i][0] >= 0 && this.listAllPosition[i][0] <= 7 && this.listAllPosition[i][1] >= 0 && this.listAllPosition[i][1] <= 7) {
        let currentAvailablePosition = this.checkPositionPawnKnightKing(color, this.listAllPosition[i], keyBoard);
        // console.log(currentAvailablePosition);
        if (currentAvailablePosition != undefined) {
          arrayAvailablePosition.push(currentAvailablePosition);
        }
      }
    }
  }

  if (nameChessman == 'king') {
    this.listAllPosition = [
      [currentPosition[0] - 1, currentPosition[1]],
      [currentPosition[0] - 1, currentPosition[1] + 1],
      [currentPosition[0], currentPosition[1] + 1],
      [currentPosition[0] + 1, currentPosition[1] + 1],
      [currentPosition[0] + 1, currentPosition[1]],
      [currentPosition[0] + 1, currentPosition[1] - 1],
      [currentPosition[0], currentPosition[1] - 1],
      [currentPosition[0] - 1, currentPosition[1] - 1],
    ];
    for (let i = 0; i < this.listAllPosition.length; i++) {
      if (this.listAllPosition[i][0] >= 0 && this.listAllPosition[i][0] <= 7 && this.listAllPosition[i][1] >= 0 && this.listAllPosition[i][1] <= 7) {
        let currentAvailablePosition = this.checkPositionPawnKnightKing(color, this.listAllPosition[i], keyBoard);
        if (currentAvailablePosition != undefined) {
          arrayAvailablePosition.push(currentAvailablePosition);
        }
      }
    }
  }

  if (nameChessman == 'castle') {

    //lấy ra danh sách các phần tử cùng hàng và cùng cột
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (keyBoard[i][j].position[0] == currentPosition[0] || keyBoard[i][j].position[1] == currentPosition[1]) {
          this.listAllPosition.push(keyBoard[i][j].position);
        }
      }
    }

    for (let i = 0; i < this.listAllPosition.length; i++) {
      //nếu phần tử cùng hàng
      if (this.listAllPosition[i][0] == currentPosition[0]) {
        if (this.listAllPosition[i][1] > currentPosition[1]) {
          this.array_row_right.push(this.listAllPosition[i]);
        }
        if (this.listAllPosition[i][1] < currentPosition[1]) {
          this.array_row_left.push(this.listAllPosition[i]);
        }
      }

      //nếu phần tử cùng cột
      if (this.listAllPosition[i][1] == currentPosition[1]) {
        if (this.listAllPosition[i][0] > currentPosition[0]) {
          this.array_column_bottom.push(this.listAllPosition[i]);
        }
        if (this.listAllPosition[i][0] < currentPosition[0]) {
          this.array_column_top.push(this.listAllPosition[i]);
        }
      }
    }

    if (this.array_row_left[0] != undefined) {
      this.array_row_left = this.sortArray(this.array_row_left, 'cotTo')
    }
    if (this.array_row_right[0] != undefined) {
      this.array_row_right = this.sortArray(this.array_row_right, 'cotNho')
    }
    if (this.array_column_top[0] != undefined) {
      this.array_column_top = this.sortArray(this.array_column_top, 'hangTo')
    }
    if (this.array_column_bottom[0] != undefined) {
      this.array_column_bottom = this.sortArray(this.array_column_bottom, 'hangNho')
    }

    // console.log(this.array_column_top);
    // console.log(this.array_row_right);
    // console.log(this.array_column_bottom);
    // console.log(this.array_row_left);
    // console.log(";")

    let arrayAvailablePositionTemporary = [];
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_row_right, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_row_left, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_column_bottom, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_column_top, color, keyBoard));

    for (let i = 0; i < arrayAvailablePositionTemporary.length; i++) {
      for (let j = 0; j < arrayAvailablePositionTemporary[i].length; j++) {
        arrayAvailablePosition.push(arrayAvailablePositionTemporary[i][j]);
      }
    }
  }

  if (nameChessman == 'bishop') {
    //lấy ra danh sách các phần tử cùng hàng chéo
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {

        if (Math.abs(currentPosition[0] - keyBoard[i][j].position[0]) == Math.abs(currentPosition[1] - keyBoard[i][j].position[1])) {
          if (Math.abs(currentPosition[0] - keyBoard[i][j].position[0]) != 0) {
            this.listAllPosition.push(keyBoard[i][j].position);
          }
        }
      }
    }

    for (let i = 0; i < this.listAllPosition.length; i++) {
      if (this.listAllPosition[i][0] < currentPosition[0] && this.listAllPosition[i][1] < currentPosition[1]) {
        this.array_diagonal_left_top.push(this.listAllPosition[i]);
      }
      if (this.listAllPosition[i][0] > currentPosition[0] && this.listAllPosition[i][1] > currentPosition[1]) {
        this.array_diagonal_right_bottom.push(this.listAllPosition[i]);
      }
      if (this.listAllPosition[i][0] < currentPosition[0] && this.listAllPosition[i][1] > currentPosition[1]) {
        this.array_diagonal_top_right.push(this.listAllPosition[i]);
      }
      if (this.listAllPosition[i][0] > currentPosition[0] && this.listAllPosition[i][1] < currentPosition[1]) {
        this.array_diagonal_bottom_left.push(this.listAllPosition[i]);
      }
    }

    if (this.array_diagonal_left_top[0] != undefined) {
      this.array_diagonal_left_top = this.sortArray(this.array_diagonal_left_top, 'cotTo')
    }
    if (this.array_diagonal_right_bottom[0] != undefined) {
      this.array_diagonal_right_bottom = this.sortArray(this.array_diagonal_right_bottom, 'cotNho')
    }
    if (this.array_diagonal_top_right[0] != undefined) {
      this.array_diagonal_top_right = this.sortArray(this.array_diagonal_top_right, 'hangTo')
    }
    if (this.array_diagonal_bottom_left[0] != undefined) {
      this.array_diagonal_bottom_left = this.sortArray(this.array_diagonal_bottom_left, 'hangNho')
    }

    let arrayAvailablePositionTemporary = [];
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_left_top, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_right_bottom, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_top_right, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_bottom_left, color, keyBoard));

    for (let i = 0; i < arrayAvailablePositionTemporary.length; i++) {
      for (let j = 0; j < arrayAvailablePositionTemporary[i].length; j++) {
        arrayAvailablePosition.push(arrayAvailablePositionTemporary[i][j]);
      }
    }

    // console.log(this.listAllPosition);
  }

  if (nameChessman == 'queen') {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (keyBoard[i][j].position[0] == currentPosition[0] || keyBoard[i][j].position[1] == currentPosition[1] || Math.abs(currentPosition[0] - keyBoard[i][j].position[0]) == Math.abs(currentPosition[1] - keyBoard[i][j].position[1])) {
          this.listAllPosition.push(keyBoard[i][j].position);
        }
      }
    }

    // console.log(this.listAllPosition);

    for (let i = 0; i < this.listAllPosition.length; i++) {
      if (this.listAllPosition[i][0] == currentPosition[0]) {
        if (this.listAllPosition[i][1] > currentPosition[1]) {
          this.array_row_right.push(this.listAllPosition[i]);
        }
        if (this.listAllPosition[i][1] < currentPosition[1]) {
          this.array_row_left.push(this.listAllPosition[i]);
        }
      }

      //nếu phần tử cùng cột
      if (this.listAllPosition[i][1] == currentPosition[1]) {
        if (this.listAllPosition[i][0] > currentPosition[0]) {
          this.array_column_bottom.push(this.listAllPosition[i]);
        }
        if (this.listAllPosition[i][0] < currentPosition[0]) {
          this.array_column_top.push(this.listAllPosition[i]);
        }
      }
    }

    for (let i = 0; i < this.listAllPosition.length; i++) {
      if (this.listAllPosition[i][0] < currentPosition[0] && this.listAllPosition[i][1] < currentPosition[1]) {
        this.array_diagonal_left_top.push(this.listAllPosition[i]);
      }
      if (this.listAllPosition[i][0] > currentPosition[0] && this.listAllPosition[i][1] > currentPosition[1]) {
        this.array_diagonal_right_bottom.push(this.listAllPosition[i]);
      }
      if (this.listAllPosition[i][0] < currentPosition[0] && this.listAllPosition[i][1] > currentPosition[1]) {
        this.array_diagonal_top_right.push(this.listAllPosition[i]);
      }
      if (this.listAllPosition[i][0] > currentPosition[0] && this.listAllPosition[i][1] < currentPosition[1]) {
        this.array_diagonal_bottom_left.push(this.listAllPosition[i]);
      }
    }



    if (this.array_diagonal_left_top[0] != undefined) {
      this.array_diagonal_left_top = this.sortArray(this.array_diagonal_left_top, 'cotTo')
    }
    if (this.array_diagonal_right_bottom[0] != undefined) {
      this.array_diagonal_right_bottom = this.sortArray(this.array_diagonal_right_bottom, 'cotNho')
    }
    if (this.array_diagonal_top_right[0] != undefined) {
      this.array_diagonal_top_right = this.sortArray(this.array_diagonal_top_right, 'hangTo')
    }
    if (this.array_diagonal_bottom_left[0] != undefined) {
      this.array_diagonal_bottom_left = this.sortArray(this.array_diagonal_bottom_left, 'hangNho')
    }
    if (this.array_row_left[0] != undefined) {
      this.array_row_left = this.sortArray(this.array_row_left, 'cotTo')
    }
    if (this.array_row_right[0] != undefined) {
      this.array_row_right = this.sortArray(this.array_row_right, 'cotNho')
    }
    if (this.array_column_top[0] != undefined) {
      this.array_column_top = this.sortArray(this.array_column_top, 'hangTo')
    }
    if (this.array_column_bottom[0] != undefined) {
      this.array_column_bottom = this.sortArray(this.array_column_bottom, 'hangNho')
    }

    let arrayAvailablePositionTemporary = [];
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_left_top, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_right_bottom, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_top_right, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_diagonal_bottom_left, color, keyBoard));

    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_row_left, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_row_right, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_column_top, color, keyBoard));
    arrayAvailablePositionTemporary.push(this.checkPositionCastleBishopQueen(this.array_column_bottom, color, keyBoard));



    for (let i = 0; i < arrayAvailablePositionTemporary.length; i++) {
      for (let j = 0; j < arrayAvailablePositionTemporary[i].length; j++) {
        arrayAvailablePosition.push(arrayAvailablePositionTemporary[i][j]);
      }
    }

  }

  return arrayAvailablePosition;
}

export function getPoint(keyBoard) {
  let blackNum = 0;
  let whitekNum = 0;
  try {
    for (let row = 0; row < keyBoard.length; row++) {
      for (let col = 0; col < keyBoard[row].length; col++) {
        if (keyBoard[row][col].status == 'occupy') {
          if (keyBoard[row][col].chessman.color == 'black') {

            if (keyBoard[row][col].chessman.nameChessman == 'pawn') {
              blackNum = blackNum + keyBoard[row][col].chessman.point + Var.pawnEvalBlack[row][col];
              // blackNum = blackNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'knight') {
              blackNum = blackNum + keyBoard[row][col].chessman.point + Var.knightEval[row][col];
              // blackNum = blackNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'king') {
              blackNum = blackNum + keyBoard[row][col].chessman.point + Var.kingEvalBlack[row][col];
              // blackNum = blackNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'castle') {
              blackNum = blackNum + keyBoard[row][col].chessman.point + Var.rookEvalBlack[row][col];
              // blackNum = blackNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'bishop') {
              blackNum = blackNum + keyBoard[row][col].chessman.point + Var.bishopEvalBlack[row][col];
              // blackNum = blackNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'queen') {
              blackNum = blackNum + keyBoard[row][col].chessman.point + Var.evalQueen[row][col];
              // blackNum = blackNum + keyBoard[row][col].chessman.point
            }
          }
          if (keyBoard[row][col].chessman.color == 'white') {

            if (keyBoard[row][col].chessman.nameChessman == 'pawn') {
              whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.pawnEvalWhite[row][col];
              // whitekNum = whitekNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'knight') {
              whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.knightEval[row][col];
              // whitekNum = whitekNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'king') {
              whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.kingEvalWhite[row][col];
              // whitekNum = whitekNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'castle') {
              whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.rookEvalWhite[row][col];
              // whitekNum = whitekNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'bishop') {
              whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.bishopEvalWhite[row][col];
              // whitekNum = whitekNum + keyBoard[row][col].chessman.point
            }
            if (keyBoard[row][col].chessman.nameChessman == 'queen') {
              whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.evalQueen[row][col];
              // whitekNum = whitekNum + keyBoard[row][col].chessman.point
            }
          }
        }
      }
    }
  }
  catch (error) {
    console.log(error)
  }
  // console.log(blackNum - whitekNum)
  // console.log(blackNum);
  // console.log(whitekNum)
  return blackNum - whitekNum;
}

export function resetHighlightPosition(keyBoard) {
  // console.log(keyBoard)
  let keyBoardLocal = [...keyBoard];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      keyBoardLocal[i][j].highlightPosition = 'normal';
      if (keyBoardLocal[i][j].chessman != null) {
        this.listAllPosition = [];
        this.array_row_left = [];
        this.array_row_right = [];
        this.array_column_top = [];
        this.array_column_bottom = [];
        this.array_diagonal_top_right = [];
        this.array_diagonal_right_bottom = [];
        this.array_diagonal_bottom_left = [];
        this.array_diagonal_left_top = [];
        keyBoardLocal[i][j].chessman.availablePosition = this.getAvailablePosition(keyBoardLocal[i][j].position, keyBoardLocal[i][j].chessman.nameChessman, keyBoardLocal[i][j].chessman.color, [...keyBoardLocal]);
      }
    }
  }
  // console.log(keyBoardLocal)

  return keyBoardLocal;

}
