import { Component, OnInit } from '@angular/core';
import * as Var from './../common/variable';
import * as Func from './../common/function';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-minimax',
  templateUrl: './minimax.component.html',
  styleUrls: ['./minimax.component.scss']
})
export class MinimaxComponent implements OnInit {

  keyBoard = [];
  keyBoardBackUp = [];
  depth_length = 1;

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


  constructor(
    public chessService: MyserviceService
  ) {
    this.keyBoard = [...Var.keyBoard];
    // console.log(this.keyBoard);
    // Var.keyBoard.pop();
    // console.log(this.keyBoard)
  }

  ngOnInit() {
    this.keyBoard = Func.resetHighlightPosition([...this.keyBoard]);
    // console.log(this.keyBoard)
    // this.getPoint(this.keyBoard);
    this.chessService.keyBoard = [...this.keyBoard];
    this.chessService.keyBoardBackUp = [...this.keyBoard]
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

        this.keyBoard = Func.resetHighlightPosition(this.keyBoard);
        console.log("====================================Enemy==========================================")
        this.chessService.keyBoard = [...this.keyBoard];
        this.chessService.keyBoardBackUp = [...this.keyBoard]
        // this.getPoint(this.keyBoard)
        // console.log(this.keyBoard);
        // this.enemy = this.updateEnemy('black', this.keyBoard);
        // console.log(this.getPoint(this.keyBoard));

        // console.log(this.chessService.keyBoard);
        // console.log(this.chessService.keyBoardBackUp);

        setTimeout(() => {
          this.enemyMove();
        }, 0)
      }
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
    let bestValue = this.minimax([...this.keyBoard], 0, 'max', 'black', {
      depth1: null,
      depth2: null,
      depth3: null,
    });
    console.log(bestValue);
    // console.log(this.list_point_depth1);
    console.log(this.keyBoardDepth1)
    // console.log(this.keyBoardDepth2)

  }

  minimax(keyBoard, depth, maximizingPlayer, color, item_father) {
    return (this.alphabeta(keyBoard, depth, -10000, 10000, maximizingPlayer, color, item_father));
  }

  alphabeta(keyBoard, depth, a, b, maximizingPlayer, color, item_father) {

    let movingOn = false;
    let case_alpha_beta = false;
    let index = 0;
    let enemy = [];

    let keyBoardLocal = Func.resetHighlightPosition(keyBoard);

    // keyBoard = this.resetHighlightPosition([...keyBoard]);

    // console.log(item_father)

    enemy = Func.updateEnemy(color, keyBoardLocal);
    // console.log(enemy)
    for (let i = 0; i < enemy.length; i++) {
      if (enemy[i].availablePosition[0] != undefined) {
        movingOn = true;
        break;
      }
    }

    // console.log(keyBoard, a, b, maximizingPlayer);
    if (movingOn == false || depth == 1) {
      //   console.log(depth)
      //   console.log('keyBoard: ' + keyBoard);
      // console.log(this.getPoint(keyBoard))
      // this.list_point_depth1.push(this.getPoint(keyBoard));
      return Func.getPoint(keyBoard);
    }

    if (maximizingPlayer == 'max') {

      // console.log(enemy)
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
              let item = {
                depth1: null,
                depth2: null,
                depth3: null,
                point: null,
              };
              // console.log("=======================================Keyboard Value==================================")
              keyBoardValue = [...this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], [...keyBoardLocal])];

              item.depth1 = item_father.depth1;
              item.depth2 = item_father.depth2;
              item.depth3 = item_father.depth3;
              item.point = Func.getPoint(keyBoardValue);

              if (depth == 0) {
                item.depth1 = index;
                this.keyBoardDepth1.push({
                  depth1: index,
                  depth2: null,
                  depth3: null,
                  point: Func.getPoint(keyBoardValue),
                  keyBoard: keyBoardValue
                });
              }

              // console.log(this.keyBoardDepth1)
              // if (depth == 2) {
              //   item.depth3 = index;
              //   this.keyBoardDepth3.push({
              //     item: item,
              //     keyBoard: keyBoardValue
              //   })
              // }

              a = Math.max(a, this.alphabeta(keyBoardValue, depth + 1, a, b, 'min', 'white', item));

              index++;
              if (a >= b) {
                case_alpha_beta = true;
                break;
              }
              // if (index == 2) {
              //   case_alpha_beta = true;
              //   break;
              // }
            }
          }
        }
      }
      return a;
    } else {
      // if (item_father.depth1 == 21) {
      // console.log(keyBoard)
      // console.log(enemy)
      // }
      console.log("min")
      // console.log(enemy)
      for (let i = 0; i < enemy.length; i++) {
        if (case_alpha_beta) {
          break;
        } else {
          if (enemy[i].availablePosition[0] != undefined) {
            movingOn = true;
            for (let j = 0; j < enemy[i].availablePosition.length; j++) {
              let keyBoardValue = [];
              let item = {
                depth1: null,
                depth2: null,
                depth3: null,
                point: null,
              };
              keyBoardValue = this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], keyBoard);
              // console.log(keyBoardDepth1)
              // console.log(keyBoardValue)
              item.depth1 = item_father.depth1;
              item.depth2 = item_father.depth2;
              item.depth3 = item_father.depth3;
              item.point = Func.getPoint(keyBoardValue);
              // console.log(item)

              if (depth == 1) {
                item.depth2 = index;
                // item.point = this.getPoint()
                this.keyBoardDepth2.push({
                  item: item,
                  keyBoard: keyBoardValue
                })
              }

              b = Math.min(b, this.alphabeta(keyBoardValue, depth + 1, a, b, 'max', 'black', item));
              index++;
              if (a >= b) {
                case_alpha_beta = true;
                break;
              }
            }
          }
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


// đang có lỗi là sau khi máy tính toán nước đi nhưng mà highlightposition của keyBoard lại bị thay đổi và ko biết fix
