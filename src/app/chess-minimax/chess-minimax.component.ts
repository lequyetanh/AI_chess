import { Component, OnInit } from '@angular/core';
import * as Var from './../common/variable';
import * as Func from './../common/function';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-chess-minimax',
  templateUrl: './chess-minimax.component.html',
  styleUrls: ['./chess-minimax.component.scss']
})
export class ChessMinimaxComponent implements OnInit {

  keyBoard = [];

  chessmanWaiting: any;
  white_king_position;

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

  index = 0;
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
    console.log(Func.getPoint(this.keyBoard))

  }

  ngOnInit() {
    this.keyBoard = Func.resetHighlightPosition([...this.keyBoard]);
    // console.log(this.keyBoard)
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

        for (let h = 0; h < 8; h++) {
          for (let k = 0; k < 8; k++) {
            if (this.keyBoard[h][k].status == 'occupy') {
              if (this.keyBoard[h][k].chessman.color == 'white') {
                if (this.keyBoard[h][k].chessman.nameChessman == 'king') {
                  this.white_king_position = [...this.keyBoard[h][k].position];
                }
              }
            }
          }
        }

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

    this.list_point_depth1 = [];
    this.list_point_depth2 = [];
    this.list_point_depth3 = [];
    // console.log(this.keyBoard)
    let bestValue = this.minimax([...keyBoard], 3, 'max', 'black');
    console.log("=======================================best value==================================")
    console.log(bestValue);
    // console.log(this.list_point_depth1);
    // console.log(this.keyBoard)
    console.log(this.keyBoardDepth1)
    // console.log(this.keyBoardDepth2)

    this.keyBoard = this.keyBoardDepth1['keyBoardDepth1']

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.keyBoard[i][j].chessman != null) {
          this.keyBoard[i][j].chessman.point_bonus = 0;
        }
      }
    }

  }

  minimax(keyBoard, depth, maximizingPlayer, color) {
    // return 1
    return (this.alphabeta([...keyBoard], depth, -10000, 10000, maximizingPlayer, color, { keyBoardDepth1: null, keyBoardDepth2: null, keyBoardDepth3: null, point: null }));
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
      // console.log(keyBoardLocal);
      // console.log(Func.getPoint(keyBoardLocal))

      // this.list_point_depth1.push(Func.getPoint(keyBoardLocal))
      // console.log(Func.getPoint(keyBoardLocal));

      father_keyBoard.point = Func.getPoint(keyBoardLocal);
      this.keyBoardBestValueChange = JSON.parse(JSON.stringify(father_keyBoard));
      // this.list_point_depth1.push(this.getPoint(keyBoard));
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

              // if (depth == 3) {
              //   let enemychieu = Func.updateEnemy('black', keyBoardValue);
              //   // console.log(enemychieu);
              //   for (let h = 0; h < enemychieu.length; h++) {
              //     if (enemychieu[h].availablePosition[0] != undefined) {
              //       for (let k = 0; k < enemychieu[h].availablePosition.length; k++) {
              //         // console.log(enemychieu[h].availablePosition[k].position)
              //         // console.log(this.white_king_position)
              //         if (enemychieu[h].availablePosition[k].position[0] == this.white_king_position[0] && enemychieu[h].availablePosition[k].position[1] == this.white_king_position[1]) {
              //           // console.log(enemychieu[h].availablePosition[k])
              //           // console.log(enemychieu[h].position[0], enemychieu[h].position[1])
              //           keyBoardValue[enemychieu[h].position[0]][enemychieu[h].position[1]].chessman.point_bonus = 300;
              //           console.log(keyBoardValue[enemychieu[h].position[0]][enemychieu[h].position[1]].chessman.point_bonus)
              //           console.log(keyBoardValue[enemychieu[h].position[0]][enemychieu[h].position[1]].chessman)
              //         }
              //       }
              //     }
              //   }
              // }

              if (depth == 3) {
                father_keyBoard.keyBoardDepth1 = JSON.parse(JSON.stringify(keyBoardValue));
              }

              if (depth == 1) {
                father_keyBoard.keyBoardDepth3 = JSON.parse(JSON.stringify(keyBoardValue));
              }
              // console.log(keyBoardValue)            // thằng này không sai
              // console.log(keyBoardLocal)            // sai ở thằng này đéo hiểu sao data lại bị thay đổi
              // if (depth == 2) {
              //   console.log('============================point depth 3==================================')
              //   // console.log("index: " + this.index++)
              // }
              a = Math.max(a, this.alphabeta(keyBoardValue, depth - 1, a, b, 'min', 'white', father_keyBoard));
              // console.log('============================end depth 2==================================')

              if (a >= b) {
                case_alpha_beta = true;
                break;
              }
              // if (index == 1) {
              //   case_alpha_beta = true;
              //   break;
              // }

              // nếu mà ko bị cắt tỉa thì chạy cái này
              if (depth == 1) {
                if (a == this.keyBoardBestValueChange['point'] && keyBoardLocalMaxValue['point'] != this.keyBoardBestValueChange['point']) {
                  // lấy ra giá trị lớn nhất
                  keyBoardLocalMaxValue = JSON.parse(JSON.stringify(this.keyBoardBestValueChange));
                }
              }

              if (depth == 3) {
                if (a == this.keyBoardDepth2['point'] && keyBoardLocalMaxValue['point'] != this.keyBoardDepth2['point']) {
                  keyBoardLocalMaxValue = JSON.parse(JSON.stringify(this.keyBoardDepth2));
                }
              }
            }
          }
        }
      }
      // console.log(keyBoardLocalMaxValue)

      // nếu mà bị cắt tỉa
      if (case_alpha_beta == true) {

      } else {
        if (depth == 3) {
          this.keyBoardDepth1 = keyBoardLocalMaxValue;

        }
        if (depth == 1) {
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

              if (depth == 2) {
                father_keyBoard.keyBoardDepth2 = JSON.parse(JSON.stringify(keyBoardValue));
              }

              b = Math.min(b, this.alphabeta(keyBoardValue, depth - 1, a, b, 'max', 'black', father_keyBoard));

              if (a >= b) {
                case_alpha_beta = true;
                break;
              }

              if (b == this.keyBoardDepth3['point'] && keyBoardLocalMinValue['point'] != this.keyBoardDepth3['point']) {
                keyBoardLocalMinValue = JSON.parse(JSON.stringify(this.keyBoardDepth3));
              }
            }
          }
        }
      }
      // console.log(keyBoardLocalMinValue)
      if (case_alpha_beta == true) {

      } else {
        this.keyBoardDepth2 = keyBoardLocalMinValue;
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
