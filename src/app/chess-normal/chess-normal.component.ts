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
    console.log(Func.updateEnemy('black', this.keyBoard))
    // this.getPoint(this.keyBoard);
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
        this.thinking = true;
        this.start_thinking = window.performance.now();
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


        let equal = Func.resetHighlightPosition(JSON.parse(JSON.stringify(this.keyBoard)));
        this.keyBoard = Func.resetHighlightPosition(JSON.parse(JSON.stringify(equal)));

        console.log("====================================Enemy==========================================")
        // this.getPoint(this.keyBoard)
        // console.log(this.keyBoard);
        // this.enemy = this.updateEnemy('black', this.keyBoard);
        // console.log(this.getPoint(this.keyBoard));

        // console.log(this.chessService.keyBoard);

        setTimeout(() => {
          this.enemyMove(equal);
          this.thinking = false;
          this.end_thinking = window.performance.now();
          this.time_thinking = this.end_thinking - this.start_thinking;
        }, 0)
      }
    }
  }

  enemyMove(keyBoard) {

    // console.log(keyBoard)

    // this.getBestMove();
    this.keyBoardDepth1 = [];
    this.keyBoardDepth2 = [];
    this.keyBoardDepth3 = [];
    this.keyBoardDepth4 = [];

    // console.log(this.keyBoard)
    let bestValue = this.minimax(keyBoard, 4, 'max', 'black');
    console.log("=======================================best value==================================")
    console.log(bestValue);
    // console.log(this.keyBoard)
    // console.log(this.keyBoardDepth1)
    // console.log(this.keyBoardDepth2)
    // console.log(this.keyBoardDepth3)
    // console.log(this.keyBoardDepth4)

    this.keyBoard = this.keyBoardDepth1['keyBoardDepth1']

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
    // return 1
    return (this.alphabeta([...keyBoard], depth, -10000, 10000, maximizingPlayer, color, { keyBoardDepth1: null, keyBoardDepth2: null, keyBoardDepth3: null, keyBoardDepth4: null, point: null }));
  }

  alphabeta(keyBoard, depth, a, b, maximizingPlayer, color, father_keyBoard) {

    let movingOn = false;

    let keyBoardLocal = keyBoard;
    let enemy = Func.updateEnemy(color, keyBoard);
    // console.log(enemy)
    for (let i = 0; i < enemy.length; i++) {
      if (enemy[i].availablePosition[0] != undefined) {
        movingOn = true;
        break;
      }
    }

    // console.log(keyBoardLocal)
    // console.log(enemy)


    // console.log(keyBoard, a, b, maximizingPlayer);
    if (depth == 0) {
      //   console.log(depth)
      //   console.log('keyBoard: ' + keyBoard);
      // console.log(Func.getPoint(keyBoardLocal))

      // console.log(Func.getPoint(keyBoardLocal));

      father_keyBoard.point = Func.getPoint(keyBoardLocal);
      this.keyBoardBestValueChange = JSON.parse(JSON.stringify(father_keyBoard));
      return Func.getPoint(keyBoardLocal);
    }

    // keyBoard = this.resetHighlightPosition([...keyBoard]);

    // console.log(item_father)


    if (maximizingPlayer == 'max') {

      let case_alpha_beta = false;
      // console.log(enemy)

      let keyBoardLocalMaxValue = []
      for (let i = 0; i < enemy.length; i++) {
        // console.log(keyBoard);
        // console.log(enemy)
        if (case_alpha_beta) {
          break;
        } else {
          if (enemy[i].availablePosition[0] != undefined) {
            movingOn = true;
            for (let j = 0; j < enemy[i].availablePosition.length; j++) {
              let keyBoardValue = [];

              // console.log("=======================================Keyboard Value==================================")
              keyBoardValue = JSON.parse(JSON.stringify(Func.resetHighlightPosition(this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], keyBoardLocal))));

              if (depth == 4) {
                father_keyBoard.keyBoardDepth1 = JSON.parse(JSON.stringify(keyBoardValue));
              }

              if (depth == 2) {
                father_keyBoard.keyBoardDepth3 = JSON.parse(JSON.stringify(keyBoardValue));
              }
              // console.log(keyBoardValue)            // thằng này không sai
              // console.log(keyBoardLocal)            // sai ở thằng này đéo hiểu sao data lại bị thay đổi
              // if (depth == 2) {
              //   console.log('============================point depth 3==================================')
              // }
              a = Math.max(a, this.alphabeta(keyBoardValue, depth - 1, a, b, 'min', 'white', father_keyBoard));
              // console.log('============================end depth 2==================================')

              if (a >= b) {
                case_alpha_beta = true;
                break;
              }

              if (depth == 4) {
                if (a == this.keyBoardDepth2['point'] && keyBoardLocalMaxValue['point'] != this.keyBoardDepth2['point']) {
                  keyBoardLocalMaxValue = JSON.parse(JSON.stringify(this.keyBoardDepth2));
                }
              }

              if (depth == 2) {
                if (a == this.keyBoardDepth4['point'] && keyBoardLocalMaxValue['point'] != this.keyBoardDepth4['point']) {
                  keyBoardLocalMaxValue = JSON.parse(JSON.stringify(this.keyBoardDepth4));
                }
              }
            }
          }
        }
      }
      // console.log(keyBoardLocalMaxValue)

      if (case_alpha_beta == true) {

      } else {
        if (depth == 4) {
          this.keyBoardDepth1 = keyBoardLocalMaxValue;

        }
        if (depth == 2) {
          this.keyBoardDepth3 = keyBoardLocalMaxValue;
        }
      }
      // console.log(this.keyBoardDepth1['keyBoardDepth1'])
      return a;
    } else {
      // if (item_father.depth1 == 21) {
      // console.log(keyBoard)
      // console.log(enemy)
      // }
      let case_alpha_beta = false;

      let keyBoardLocalMinValue = []
      // console.log("min")
      // console.log(enemy)
      for (let i = 0; i < enemy.length; i++) {
        if (case_alpha_beta) {
          break;
        } else {
          if (enemy[i].availablePosition[0] != undefined) {
            movingOn = true;
            for (let j = 0; j < enemy[i].availablePosition.length; j++) {
              let keyBoardValue = [];
              keyBoardValue = JSON.parse(JSON.stringify(Func.resetHighlightPosition(this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], keyBoardLocal))));
              // console.log(keyBoardDepth1)

              if (depth == 3) {
                father_keyBoard.keyBoardDepth2 = JSON.parse(JSON.stringify(keyBoardValue));
              }

              if (depth == 1) {
                father_keyBoard.keyBoardDepth4 = JSON.parse(JSON.stringify(keyBoardValue));
              }

              b = Math.min(b, this.alphabeta(keyBoardValue, depth - 1, a, b, 'max', 'black', father_keyBoard));

              if (a >= b) {
                case_alpha_beta = true;
                break;
              }

              if(depth == 3){
                if (b == this.keyBoardDepth3['point'] && keyBoardLocalMinValue['point'] != this.keyBoardDepth3['point']) {
                  keyBoardLocalMinValue = JSON.parse(JSON.stringify(this.keyBoardDepth3));
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
      // console.log(keyBoardLocalMinValue)
      if (case_alpha_beta == true) {

      } else {

        if (depth == 3) {
          this.keyBoardDepth2 = keyBoardLocalMinValue;
        }

        if (depth == 1) {
          this.keyBoardDepth4 = keyBoardLocalMinValue;
        }

      }
      return b;
    }
  }


  enemyMoveEmulator(startPosition, endPosition, chessman, keyBoardInput) {
    // console.log([endPosition[0]],[endPosition[1]]);
    // console.log(keyBoard[start][end])

    // console.log(startPosition)
    // console.log(endPosition)
    let keyBoardNewInput = JSON.parse(JSON.stringify(keyBoardInput));
    let keyBoardLocal = JSON.parse(JSON.stringify(keyBoardInput));
    // console.log(keyBoardLocal)

    keyBoardLocal[endPosition[0]][endPosition[1]] = {
      idKeyBoard: keyBoardNewInput[endPosition[0]][endPosition[1]].idKeyBoard,
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
      idKeyBoard: keyBoardNewInput[startPosition[0]][startPosition[1]].idKeyBoard,
      position: [startPosition[0], startPosition[1]],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null
    }
    // keyBoardLocal = this.resetHighlightPosition([...keyBoardLocal]);

    // console.log("--------", keyBoardLocal)
    return keyBoardLocal;
  }

}

