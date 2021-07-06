import { Component, OnInit } from '@angular/core';
import * as Var from './../common/variable';
import * as Func from './../common/function';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-alphabeta3',
  templateUrl: './alphabeta3.component.html',
  styleUrls: ['./alphabeta3.component.scss']
})
export class Alphabeta3Component implements OnInit {
  keyBoard = [];
  keyBoardBackUp = [];

  bestValue;
  chessmanWaiting: any;

  keyBoardDepth1 = [];
  keyBoardDepth2 = [];
  keyBoardDepth3 = [];
  keyBoardDepth4 = [];

  thinking = false;
  start_thinking;
  end_thinking
  time_thinking;
  keyBoardBestValueChange = [];
  index = 0;
  constructor(
  ) {
    this.keyBoard = [...Var.keyBoard];
    // console.log(this.keyBoard);
    // Var.keyBoard.pop();
    // console.log(this.keyBoard)
    // console.log(Func.getPoint(this.keyBoard))

  }

  ngOnInit() {
    this.keyBoard = Func.resetHighlightPosition([...this.keyBoard]);
    // this.enemyMove(this.keyBoard)
    // console.log(Func.updateEnemy('black', this.keyBoard))
    // this.getPoint(this.keyBoard);
    // console.log(this.keyBoard)
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

        this.keyBoardBackUp = JSON.parse(JSON.stringify(this.keyBoard));
        this.thinking = true;
        this.index = 0;
        this.start_thinking = window.performance.now();

        // console.log(this.chessmanWaiting.position)
        // console.log(eachKeyboard.position)
        // console.log(this.chessmanWaiting.chessman)

        this.keyBoard = this.enemyMoveEmulator(this.chessmanWaiting.position, eachKeyboard.position, this.chessmanWaiting.chessman, this.keyBoard)

        this.keyBoard = Func.resetHighlightPosition(JSON.parse(JSON.stringify(this.keyBoard)));

        setTimeout(() => {
          this.enemyMove(this.keyBoard);
          this.thinking = false;
          this.end_thinking = window.performance.now();
          this.time_thinking = Math.round(this.end_thinking - this.start_thinking);
          console.log("Thời gian chạy" + this.time_thinking)
        }, 0)
      }
    }
  }

  enemyMove(keyBoard) {
    this.keyBoardDepth1 = [];
    this.keyBoardDepth2 = [];
    this.keyBoardDepth3 = [];
    this.keyBoardDepth4 = [];

    this.bestValue = this.minimax(keyBoard, 4, 'max', 'black');
    console.log("=======================best value=========================")
    console.log("Giá trị tốt nhất: " + this.bestValue);
    console.log("Số trường hợp đã xét: " + this.index)
    // console.log(this.keyBoardDepth4)
    this.keyBoard = Func.resetHighlightPosition(this.keyBoardDepth4['keyBoardDepth4'])

    let white = false;
    let black = false;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.keyBoard[i][j].chessman) {
          if (this.keyBoard[i][j].chessman.nameChessman == 'king') {
            if (this.keyBoard[i][j].chessman.color == 'white') {
              white = true;
            }
            if (this.keyBoard[i][j].chessman.color == 'black') {
              black = true;
            }
          }
        }
      }
    }

    if (!white) {
      alert("Trắng Thua Rồi Nhé")
    }
    if (!black) {
      alert("Đen Thua Rồi Nhé")
    }

  }

  minimax(keyBoard, depth, maximizingPlayer, color) {
    return (this.alphabeta(keyBoard, depth, -10000, 10000, maximizingPlayer, color, { keyBoardDepth1: null, keyBoardDepth2: null, keyBoardDepth3: null, keyBoardDepth4: null, point: null }));
  }

  alphabeta(keyBoard, depth, a, b, maximizingPlayer, color, father_keyBoard) {

    let movingOn = false;
    let keyBoardLocal = keyBoard;
    let enemy = Func.updateEnemy(color, keyBoard);

    for (let i = 0; i < enemy.length; i++) {
      if (enemy[i].availablePosition[0] != undefined) {
        movingOn = true;
        break;
      }
    }

    if (depth == 0) {
      this.index++;
      father_keyBoard.point = Func.getPoint(keyBoardLocal);
      this.keyBoardBestValueChange = father_keyBoard
      return Func.getPoint(keyBoardLocal);
    }

    if (maximizingPlayer == 'max') {
      let case_alpha_beta = false;
      let keyBoardLocalMaxValue = []
      for (let i = 0; i < enemy.length; i++) {
        if (case_alpha_beta) {
          break;
        } else {
          if (enemy[i].availablePosition[0] != undefined) {
            movingOn = true;
            for (let j = 0; j < enemy[i].availablePosition.length; j++) {
              let keyBoardValue = [];
              keyBoardValue = Func.resetHighlightPosition(this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], keyBoardLocal));

              if (depth == 4) {
                father_keyBoard.keyBoardDepth4 = Func.changeToString(keyBoardValue);
              }

              if (depth == 2) {
                father_keyBoard.keyBoardDepth2 = Func.changeToString(keyBoardValue);
              }

              a = Math.max(a, this.alphabeta(keyBoardValue, depth - 1, a, b, 'min', 'white', father_keyBoard));
              if (a >= b) {
                case_alpha_beta = true;
                break;
              }

              if (depth == 4) {
                if (a == this.keyBoardDepth3['point'] && keyBoardLocalMaxValue['point'] != this.keyBoardDepth3['point']) {
                  keyBoardLocalMaxValue = JSON.parse(JSON.stringify(this.keyBoardDepth3));
                }
              }

              if (depth == 2) {
                if (a == this.keyBoardDepth1['point'] && keyBoardLocalMaxValue['point'] != this.keyBoardDepth1['point']) {
                  keyBoardLocalMaxValue = JSON.parse(JSON.stringify(this.keyBoardDepth1));
                }
              }
            }
          }
        }
      }
      if (case_alpha_beta == true) {

      } else {
        if (depth == 4) {
          this.keyBoardDepth4 = keyBoardLocalMaxValue;

        }
        if (depth == 2) {
          this.keyBoardDepth2 = keyBoardLocalMaxValue;
        }
      }
      return a;
    } else {
      let case_alpha_beta = false;
      let keyBoardLocalMinValue = []
      for (let i = 0; i < enemy.length; i++) {
        if (case_alpha_beta) {
          break;
        } else {
          if (enemy[i].availablePosition[0] != undefined) {
            movingOn = true;
            for (let j = 0; j < enemy[i].availablePosition.length; j++) {
              let keyBoardValue = [];
              keyBoardValue = Func.resetHighlightPosition(this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], keyBoardLocal));
              if (depth == 3) {
                father_keyBoard.keyBoardDepth3 = Func.changeToString(keyBoardValue);
              }

              if (depth == 1) {
                father_keyBoard.keyBoardDepth1 = Func.changeToString(keyBoardValue);
              }
              b = Math.min(b, this.alphabeta(keyBoardValue, depth - 1, a, b, 'max', 'black', father_keyBoard));
              if (a >= b) {
                case_alpha_beta = true;
                break;
              }

              if (depth == 3) {
                if (b == this.keyBoardDepth2['point'] && keyBoardLocalMinValue['point'] != this.keyBoardDepth2['point']) {
                  keyBoardLocalMinValue = JSON.parse(JSON.stringify(this.keyBoardDepth2));
                }
              }

              if (depth == 1) {
                if (b == this.keyBoardBestValueChange['point'] && keyBoardLocalMinValue['point'] != this.keyBoardBestValueChange['point']) {
                  keyBoardLocalMinValue = JSON.parse(JSON.stringify(this.keyBoardBestValueChange));
                }
              }
            }
          }
        }
      }
      if (case_alpha_beta == true) {

      } else {

        if (depth == 3) {
          this.keyBoardDepth3 = keyBoardLocalMinValue;
        }

        if (depth == 1) {
          this.keyBoardDepth1 = keyBoardLocalMinValue;
        }

      }
      return b;
    }
  }


  enemyMoveEmulator(startPosition, endPosition, chessman, keyBoardInput) {
    // console.log(chessman)

    let keyBoardLocal = []

    for (let i = 0; i < 8; i++) {
      let row = []
      for (let j = 0; j < 8; j++) {
        row.push(keyBoardInput[i][j])
      }
      keyBoardLocal.push(row);
    }

    keyBoardLocal[endPosition[0]][endPosition[1]] = {
      idKeyBoard: keyBoardInput[endPosition[0]][endPosition[1]].idKeyBoard,
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
        point_bonus: 0,
        availablePosition: [],
      }
    }

    keyBoardLocal[startPosition[0]][startPosition[1]] = {
      idKeyBoard: keyBoardInput[startPosition[0]][startPosition[1]].idKeyBoard,
      position: [startPosition[0], startPosition[1]],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null
    }

    if (chessman.nameChessman == 'king') {
      if (endPosition[1] == startPosition[1] + 2) {
        keyBoardLocal = this.enemyMoveEmulator([startPosition[0], startPosition[1] + 3], [endPosition[0], endPosition[1] - 1], keyBoardLocal[startPosition[0]][startPosition[1] + 3].chessman, keyBoardLocal)
      }
    }

    if (chessman.nameChessman == 'king') {
      if (endPosition[1] == startPosition[1] - 2) {
        keyBoardLocal = this.enemyMoveEmulator([startPosition[0], startPosition[1] - 4], [endPosition[0], endPosition[1] + 1], keyBoardLocal[startPosition[0]][startPosition[1] - 4].chessman, keyBoardLocal)
      }
    }

    if (chessman.nameChessman == 'pawn') {
      if (chessman.color == 'black') {
        if (endPosition[0] == 7) {
          keyBoardLocal[endPosition[0]][endPosition[1]].chessman = {
            color: 'black',
            idChessman: 50,
            nameChessman: 'queen',
            move: true,
            image: 'bQ.png',
            point: 90,
            point_bonus: 0,
            availablePosition: [],
          }
        }
      }

      if (chessman.color == 'white') {
        if (endPosition[0] == 0) {
          keyBoardLocal[endPosition[0]][endPosition[1]].chessman = {
            color: 'white',
            idChessman: 50,
            nameChessman: 'queen',
            move: true,
            image: 'wQ.png',
            point: 90,
            point_bonus: 0,
            availablePosition: [],
          }
        }
      }
    }

    return keyBoardLocal;
  }


  reset() {
    this.keyBoard = [...Var.keyBoard];
  }

  undo() {
    this.keyBoard = this.keyBoardBackUp;
  }

}
