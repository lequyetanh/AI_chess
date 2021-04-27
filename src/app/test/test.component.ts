import { Component, OnInit } from '@angular/core';
import * as Var from './../common/variable';
import * as Func from './../common/function';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  keyBoard = [];
  keyBoardBackUp = [];

  chessmanWaiting: any;
  list_array_sort = [];
  listAllPosition = [];
  enemy: any = []

  array_row_left = [];
  array_row_right = [];
  array_column_top = [];
  array_column_bottom = [];
  array_diagonal_top_right = [];
  array_diagonal_right_bottom = [];
  array_diagonal_bottom_left = [];
  array_diagonal_left_top = [];

  keyBoardDepth1 = [];
  keyBoardDepth2 = [];
  keyBoardDepth3 = [];

  list_point_depth1 = [];
  list_point_depth2 = [];
  list_point_depth3 = [];


  constructor() {
    this.keyBoard = [...Var.keyBoard];
    // console.log(this.keyBoard);
    // Var.keyBoard.pop();
    // console.log(this.keyBoard)
  }

  ngOnInit() {
    this.keyBoard = this.resetHighlightPosition([...this.keyBoard]);
    // console.log(this.keyBoard)
    this.getPoint(this.keyBoard);
    this.keyBoardBackUp = [...this.keyBoard];
  }

  resetHighlightPosition(keyBoard) {
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

    // console.log(this.keyBoardLocal)
    return keyBoardLocal;

    // this.keyBoard[7][3].chessman.availablePosition = this.getAvailablePosition(this.keyBoard[7][3].position, this.keyBoard[7][3].chessman.nameChessman, this.keyBoard[7][3].chessman.color);
  }

  //dạy quân cờ biết đi
  getAvailablePosition(currentPosition, nameChessman, color, keyBoard) {

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
                let currentAvailablePosition = Func.checkPositionPawnKnightKing('white', this.listAllPosition[i], keyBoard);
                if (currentAvailablePosition != undefined) {
                  arrayAvailablePosition.push(currentAvailablePosition);

                  //nếu mà quân này mà chưa đi
                  if (keyBoard[currentPosition[0]][currentPosition[1]].chessman.move == false) {
                    //xét vị trí đi 2 bước của quân tốt
                    if (keyBoard[currentPosition[0] - 2][currentPosition[1]].chessman == null) {
                      let currentAvailablePosition = Func.checkPositionPawnKnightKing('white', [[currentPosition[0] - 2], [currentPosition[1]]], keyBoard);
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
                  let currentAvailablePosition = Func.checkPositionPawnKnightKing('white', this.listAllPosition[i], keyBoard);
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

                let currentAvailablePosition = Func.checkPositionPawnKnightKing('black', this.listAllPosition[i], keyBoard);
                if (currentAvailablePosition != undefined) {
                  arrayAvailablePosition.push(currentAvailablePosition);

                  // console.log(currentPosition)
                  // console.log(keyBoard[currentPosition[0]][currentPosition[1]]);

                  //vị trí hiện tại của quân tốt
                  if (keyBoard[currentPosition[0]][currentPosition[1]].chessman.move == false) {
                    //xét vị trí đi 2 bước của quân tốt
                    if (keyBoard[currentPosition[0] + 2][currentPosition[1]].chessman == null) {
                      let currentAvailablePosition = Func.checkPositionPawnKnightKing('white', [[currentPosition[0] + 2], [currentPosition[1]]], keyBoard);
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
                  let currentAvailablePosition = Func.checkPositionPawnKnightKing('black', this.listAllPosition[i], keyBoard);
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
          let currentAvailablePosition = Func.checkPositionPawnKnightKing(color, this.listAllPosition[i], keyBoard);
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
          let currentAvailablePosition = Func.checkPositionPawnKnightKing(color, this.listAllPosition[i], keyBoard);
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
        this.array_row_left = Func.sortArray(this.array_row_left, 'cotTo')
      }
      if (this.array_row_right[0] != undefined) {
        this.array_row_right = Func.sortArray(this.array_row_right, 'cotNho')
      }
      if (this.array_column_top[0] != undefined) {
        this.array_column_top = Func.sortArray(this.array_column_top, 'hangTo')
      }
      if (this.array_column_bottom[0] != undefined) {
        this.array_column_bottom = Func.sortArray(this.array_column_bottom, 'hangNho')
      }

      // console.log(this.array_column_top);
      // console.log(this.array_row_right);
      // console.log(this.array_column_bottom);
      // console.log(this.array_row_left);
      // console.log(";")

      let arrayAvailablePositionTemporary = [];
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_row_right, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_row_left, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_column_bottom, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_column_top, color, keyBoard));

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
        this.array_diagonal_left_top = Func.sortArray(this.array_diagonal_left_top, 'cotTo')
      }
      if (this.array_diagonal_right_bottom[0] != undefined) {
        this.array_diagonal_right_bottom = Func.sortArray(this.array_diagonal_right_bottom, 'cotNho')
      }
      if (this.array_diagonal_top_right[0] != undefined) {
        this.array_diagonal_top_right = Func.sortArray(this.array_diagonal_top_right, 'hangTo')
      }
      if (this.array_diagonal_bottom_left[0] != undefined) {
        this.array_diagonal_bottom_left = Func.sortArray(this.array_diagonal_bottom_left, 'hangNho')
      }

      let arrayAvailablePositionTemporary = [];
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_left_top, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_right_bottom, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_top_right, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_bottom_left, color, keyBoard));

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
        this.array_diagonal_left_top = Func.sortArray(this.array_diagonal_left_top, 'cotTo')
      }
      if (this.array_diagonal_right_bottom[0] != undefined) {
        this.array_diagonal_right_bottom = Func.sortArray(this.array_diagonal_right_bottom, 'cotNho')
      }
      if (this.array_diagonal_top_right[0] != undefined) {
        this.array_diagonal_top_right = Func.sortArray(this.array_diagonal_top_right, 'hangTo')
      }
      if (this.array_diagonal_bottom_left[0] != undefined) {
        this.array_diagonal_bottom_left = Func.sortArray(this.array_diagonal_bottom_left, 'hangNho')
      }
      if (this.array_row_left[0] != undefined) {
        this.array_row_left = Func.sortArray(this.array_row_left, 'cotTo')
      }
      if (this.array_row_right[0] != undefined) {
        this.array_row_right = Func.sortArray(this.array_row_right, 'cotNho')
      }
      if (this.array_column_top[0] != undefined) {
        this.array_column_top = Func.sortArray(this.array_column_top, 'hangTo')
      }
      if (this.array_column_bottom[0] != undefined) {
        this.array_column_bottom = Func.sortArray(this.array_column_bottom, 'hangNho')
      }

      let arrayAvailablePositionTemporary = [];
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_left_top, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_right_bottom, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_top_right, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_diagonal_bottom_left, color, keyBoard));

      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_row_left, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_row_right, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_column_top, color, keyBoard));
      arrayAvailablePositionTemporary.push(Func.checkPositionCastleBishopQueen(this.array_column_bottom, color, keyBoard));



      for (let i = 0; i < arrayAvailablePositionTemporary.length; i++) {
        for (let j = 0; j < arrayAvailablePositionTemporary[i].length; j++) {
          arrayAvailablePosition.push(arrayAvailablePositionTemporary[i][j]);
        }
      }

    }

    return arrayAvailablePosition;
  }

  getPoint(keyBoard) {
    let blackNum = 0;
    let whitekNum = 0;
    try {
      for (let row = 0; row < keyBoard.length; row++) {
        for (let col = 0; col < keyBoard[row].length; col++) {
          if (keyBoard[row][col].status == 'occupy') {
            if (keyBoard[row][col].chessman.color == 'black') {

              if (keyBoard[row][col].chessman.nameChessman == 'pawn') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.pawnEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + Var.pawnEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'knight') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.knightEval[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + Var.knightEval[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'king') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.kingEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + Var.kingEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'castle') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.rookEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + Var.rookEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'bishop') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.bishopEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + Var.bishopEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'queen') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.evalQueen[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + Var.evalQueen[row][col];
              }
            }
            if (keyBoard[row][col].chessman.color == 'white') {

              if (keyBoard[row][col].chessman.nameChessman == 'pawn') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.pawnEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.pawnEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'knight') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.knightEval[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.knightEval[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'king') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.kingEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.kingEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'castle') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.rookEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.rookEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'bishop') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.bishopEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.bishopEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'queen') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + Var.evalQueen[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + Var.evalQueen[row][col];
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

  moveChessman(eachKeyboard) {
    // console.log(eachKeyboard)

    //khi bấm vào nút đang ở chế độ highlightPosition == normal thì sẽ hiển thị các nút highlight lên
    if (eachKeyboard.highlightPosition == 'normal') {

      // console.log(eachKeyboard.chessman.availablePosition);
      if (eachKeyboard.status == 'occupy') {
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            this.keyBoard[i][j].highlightPosition = 'normal';
          }
        }

        this.chessmanWaiting = eachKeyboard;
        // console.log(this.chessmanWaiting)
        this.keyBoard[eachKeyboard.position[0]][eachKeyboard.position[1]].highlightPosition = 'ally';

        //cập nhật highlightPosition các nút nằm ở ví trí đi của nút đang trỏ tới
        for (let k = 0; k < eachKeyboard.chessman.availablePosition.length; k++) {
          for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
              if (eachKeyboard.chessman.availablePosition[k].idKeyBoard == this.keyBoard[i][j].idKeyBoard) {
                // console.log( this.keyBoard[i][j])
                if (eachKeyboard.chessman.availablePosition[k].status == 'blank') {
                  this.keyBoard[i][j].highlightPosition = 'ally';
                } else {
                  this.keyBoard[i][j].highlightPosition = 'enemy';
                }
              }
            }
          }
        }
      }

      //khi click vào nút blank thì ko có hiện tượng gì xảy ra
      if (eachKeyboard.status == 'blank') {

      }
    }

    //khi mà ở bấm vào nút đang ở chế độ đồng minh hoặc là kẻ thù thì sẽ thay đổi vị trí quân cờ
    if (eachKeyboard.highlightPosition == 'ally' || eachKeyboard.highlightPosition == 'enemy') {
      if (eachKeyboard.idKeyBoard != this.chessmanWaiting.idKeyBoard) {
        // console.log(eachKeyboard);
        // console.log(eachKeyboard.position);

        //di chuyển chessmanWaiting sang vị trí mới trỏ
        this.keyBoard[eachKeyboard.position[0]][eachKeyboard.position[1]].highlightPosition = 'normal';
        this.keyBoard[eachKeyboard.position[0]][eachKeyboard.position[1]].status = 'occupy';
        this.keyBoard[eachKeyboard.position[0]][eachKeyboard.position[1]].chessman = this.chessmanWaiting['chessman'];
        // console.log(this.keyBoard[i][j])
        this.keyBoard[eachKeyboard.position[0]][eachKeyboard.position[1]].chessman.move = true;
        this.keyBoard[eachKeyboard.position[0]][eachKeyboard.position[1]].chessman.availablePosition = [];

        this.keyBoard[this.chessmanWaiting.position[0]][this.chessmanWaiting.position[1]].highlightPosition = 'normal';
        this.keyBoard[this.chessmanWaiting.position[0]][this.chessmanWaiting.position[1]].status = 'blank';
        this.keyBoard[this.chessmanWaiting.position[0]][this.chessmanWaiting.position[1]].chessman = null;

        this.keyBoard = this.resetHighlightPosition(this.keyBoard);
        // this.getPoint(this.keyBoard)
        // console.log(this.keyBoard);
        // this.enemy = this.updateEnemy('black', this.keyBoard);
        // console.log(this.enemy);
        setTimeout(() => {
          this.enemyMove();
        }, 0)
      }
    }
  }

  minimax(keyBoard, depth, maximizingPlayer) {
    return (this.alphabeta(keyBoard, depth, -10000, 10000, maximizingPlayer));
  }

  alphabeta(keyBoard, depth, a, b, maximizingPlayer) {

    let movingOn = false;
    let list_keyBoard_depth_1 = [];
    this.enemy = Func.updateEnemy('black', this.keyBoard);
    for (let i = 0; i < this.enemy.length; i++) {
      if (this.enemy[i].availablePosition[0] != undefined) {
        movingOn = true;
        for (let j = 0; j < this.enemy[i].availablePosition.length; j++) {
          let keyBoardDepth1 = [];
          // console.log(this.enemy[i].availablePosition[])
          // console.log([...this.keyBoard]);
          keyBoardDepth1 = [...this.enemyMoveEmulator(this.enemy[i].position, this.enemy[i].availablePosition[j].position, this.enemy[i], [...this.keyBoard])];
          // console.log(keyBoardDepth1)
          keyBoardDepth1 = this.resetHighlightPosition([...keyBoardDepth1]);
          // console.log(keyBoardDepth1)
          list_keyBoard_depth_1.push(keyBoardDepth1);

          // console.log(this.keyBoard);
          // console.log(this.keyBoard);

          // console.log(list_keyBoard_depth_1);
          // console.log(this.enemy[i].availablePosition[j].position)
          // console.log(list_keyBoard_depth_1);
          // if (j == 0) {
          //   break;
          // }
        }
        // break
      }
    }

    if (depth == 1) {
      this.keyBoardDepth1 = [...list_keyBoard_depth_1];
      for (let m = 0; m < list_keyBoard_depth_1.length; m++) {
        this.list_point_depth1.push(this.getPoint(list_keyBoard_depth_1[m]));
      }
    }

    // console.log(keyBoard, a, b, maximizingPlayer);
    if (movingOn == false || depth == 0) {
      //   console.log(depth)
      //   console.log('keyBoard: ' + keyBoard);
      return this.getPoint(keyBoard);
    }
    if (maximizingPlayer == 'max') {

      for (let i = 0; i < list_keyBoard_depth_1.length; i++) {
        a = Math.max(a, this.alphabeta(list_keyBoard_depth_1[i], depth - 1, a, b, 'min'));
        // console.log(keyBoard);
        // console.log('a: cho goi ham max' + '-----------' + a);
        if (a >= b) {
          // console.log('a: ' + a);
          // console.log('b: ' + b);

          break;
        }
      }
      return a;
    } else {
      for (let i = 0; i < list_keyBoard_depth_1.length; i++) {
        b = Math.min(b, this.alphabeta(list_keyBoard_depth_1[i], depth - 1, a, b, 'max'));
        // console.log(keyBoard);
        // console.log('b: cho goi ham min' + '--------' + b);
        if (a >= b) {
          // console.log('a: ' + a);
          // console.log('b: ' + b);
          break;
        }
      }
      return b;
    }
  }

  enemyMove() {
    // this.getBestMove();
    this.keyBoardDepth1 = [];
    this.keyBoardDepth2 = [];
    this.keyBoardDepth3 = [];

    this.list_point_depth1 = [];
    this.list_point_depth2 = [];
    this.list_point_depth3 = [];
    // console.log(this.keyBoard)
    let bestValue = this.minimax(this.keyBoard, 1, 'max');
    console.log(bestValue);
    console.log(this.list_point_depth1);
    console.log(this.keyBoardDepth1)

    for (let i = 0; i < this.list_point_depth1.length; i++) {
      if (this.list_point_depth1[i] == bestValue) {
        this.keyBoard = this.keyBoardDepth1[i]
      }
    }

    this.keyBoard = this.resetHighlightPosition(this.keyBoard);
  }

  getBestMove() {
    //======================================độ sâu cấp 1======================================
    // console.log(this.keyBoard)
    let list_point_depth_1 = [];
    let keyBoardBestValue = [];
    this.enemy = Func.updateEnemy('black', this.keyBoardBackUp);
    // console.log(this.enemy)
    for (let i = 0; i < this.enemy.length; i++) {
      if (this.enemy[i].availablePosition[0] != undefined) {
        for (let j = 0; j < this.enemy[i].availablePosition.length; j++) {
          let keyBoardDepth1 = [];
          // console.log(this.enemy[i].availablePosition[])
          // console.log([...this.keyBoardBackUp]);
          keyBoardDepth1 = [...this.enemyMoveEmulator(this.enemy[i].position, this.enemy[i].availablePosition[j].position, this.enemy[i], [...this.keyBoardBackUp])];
          console.log("===================================================")
          // console.log(keyBoardDepth1)
          keyBoardDepth1 = this.resetHighlightPosition([...keyBoardDepth1]);
          // console.log(keyBoardDepth1)
          this.keyBoardDepth1.push(keyBoardDepth1);
          keyBoardBestValue.push(keyBoardDepth1);

          // console.log(this.keyBoard);
          // console.log(this.keyBoardBackUp);

          // console.log(this.keyBoardDepth1);
          // console.log(this.enemy[i].availablePosition[j].position)
          // console.log(list_point_depth_1);
          // if (j == 0) {
          //   break;
          // }
        }
        // break
      }
    }

    // // list_point_depth_1.length = this.keyBoardDepth1.length;
    // // console.log(keyBoardBestValue[1]);
    // // console.log(this.keyBoardDepth1);
    // // console.log(keyBoardBestValue);
    for (let m = 0; m < keyBoardBestValue.length; m++) {
      list_point_depth_1.push(this.getPoint(keyBoardBestValue[m]));
      // if (m == 33) {
      //   console.log(keyBoardBestValue[m]);
      // }
    }

    // console.log(this.keyBoard);
    // console.log(this.keyBoardBackUp);

    // // console.log(this.keyBoardDepth1[35]);
    console.log(list_point_depth_1);
    // // this.resetHighlightPosition(this.keyBoardBackUp);
    // // this.updateEnemy('white', this.keyBoardBackUp);
    // // console.log(this.enemy);
  }

  enemyMoveEmulator(startPosition, endPosition, chessman, keyBoardInput) {
    // console.log([endPosition[0]],[endPosition[1]]);
    // console.log(keyBoard[start][end])

    // console.log(startPosition)
    // console.log(endPosition)
    let keyBoardLocal = [];
    // console.log(keyBoardLocal)

    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        if (i == endPosition[0] && j == endPosition[1]) {
          row.push({
            idKeyBoard: keyBoardInput[i][j].idKeyBoard,
            position: endPosition,
            highlightPosition: 'normal',
            status: 'occupy',
            chessman: {
              color: chessman.color,
              idChessman: chessman.idChessman,
              nameChessman: chessman.nameChessman,
              move: true,
              image: chessman.image,
              point: chessman.point,
              availablePosition: [],
            }
          });
          continue;
        }

        if (i == startPosition[0] && j == startPosition[1]) {
          row.push({
            idKeyBoard: keyBoardInput[i][j].idKeyBoard,
            position: startPosition,
            highlightPosition: 'normal',
            status: 'blank',
            chessman: null
          });
          continue;
        }
        else {
          row.push(keyBoardInput[i][j]);
        }
      }
      keyBoardLocal.push(row);
    }
    // keyBoardLocal = this.resetHighlightPosition(keyBoardLocal);

    // console.log("--------", keyBoardLocal)
    return keyBoardLocal;
  }


}
