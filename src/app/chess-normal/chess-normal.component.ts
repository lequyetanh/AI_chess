import { Component, OnInit } from '@angular/core';
import * as Var from './../common/variable';
import * as Func from './../common/function';

@Component({
  selector: 'app-chess-normal',
  templateUrl: './chess-normal.component.html',
  styleUrls: ['./chess-normal.component.scss']
})
export class ChessNormalComponent implements OnInit {

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

  }

  ngOnInit() {
    this.keyBoard = [...Var.keyBoard];
    this.keyBoardBackUp = [...Var.keyBoard];
    this.keyBoard = Func.resetHighlightPosition([...this.keyBoard]);
    console.log(this.keyBoard);
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

        this.keyBoard = Func.resetHighlightPosition([...this.keyBoard]);
        console.log("====================================Enemy==========================================")
        // this.getPoint(this.keyBoard)
        // console.log(this.keyBoard);
        // this.enemy = this.updateEnemy('black', this.keyBoard);
        // console.log(this.getPoint(this.keyBoard));

        setTimeout(() => {
          this.enemyMove();
        }, 0)
      }
    }
  }

  enemyMove() {
    let bestValue = this.minimax(this.keyBoard, 2, 'max', 'black');
  }

  minimax(keyBoard, depth, maximizingPlayer, color) {
    // return (this.alphabeta(keyBoard, depth, -10000, 10000, maximizingPlayer, color);
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
            position: [endPosition[0], endPosition[1]],
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
            position: [startPosition[0], startPosition[1]],
            highlightPosition: 'normal',
            status: 'blank',
            chessman: null
          });
          continue;
        }
        else {
          let newObject = keyBoardInput[i][j];
          if (newObject.status == 'occupy') {
            newObject.chessman.availablePosition = [];
          }
          row.push(newObject);
        }
      }
      keyBoardLocal.push(row);
    }
    // keyBoardLocal = this.resetHighlightPosition([...keyBoardLocal]);

    // console.log("--------", keyBoardLocal)
    return keyBoardLocal;
  }

}
