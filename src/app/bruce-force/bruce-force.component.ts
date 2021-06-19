import { Component, OnInit } from '@angular/core';
import * as Var from './../common/variable';
import * as Func from './../common/function';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-bruce-force',
  templateUrl: './bruce-force.component.html',
  styleUrls: ['./bruce-force.component.scss']
})
export class BruceForceComponent implements OnInit {

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


  constructor(
    public chessService: MyserviceService
  ) {
    this.keyBoard = [...Var.keyBoard];
    this.keyBoardBackUp = [...Var.keyBoard];
    this.keyBoard = Func.resetHighlightPosition([...this.keyBoard]);
    console.log(this.keyBoard);
    // Var.keyBoard.pop();
    // console.log(this.keyBoard)
  }

  ngOnInit() {
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
        this.chessService.keyBoard = [...this.keyBoard]
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
    this.keyBoardDepth1 = [];
    this.keyBoardDepth2 = [];
    this.keyBoardDepth3 = [];

    this.list_point_depth1 = [];
    this.list_point_depth2 = [];
    this.list_point_depth3 = [];
    this.getKeyBoardDepth1([...this.chessService.keyBoard]);

    // =====================================================depth2=================================
    let index = 0;
    let bestValue;
    let listMin = [];
    while (true) {
      this.getKeyBoardDepth2([...this.keyBoardDepth1[index]], index);
      index++
      if (index == this.keyBoardDepth1.length) {
        break;
      }
    }
    // console.log(this.keyBoardDepth2)
    // for (let i = 0; i < this.keyBoardDepth1.length; i++) {
    //   let row = [];
    //   for (let j = 0; j < this.keyBoardDepth2.length; j++) {
    //     if (this.keyBoardDepth2[j].depth1 == i) {
    //       row.push(this.keyBoardDepth2[j].point)
    //     }
    //   }
    //   this.list_point_depth2.push(row);
    // }
    // // console.log(this.list_point_depth2);

    // for (let i = 0; i < this.list_point_depth2.length; i++) {
    //   listMin.push(Math.min.apply(Math, this.list_point_depth2[i]))
    //   // console.log(Math.min.apply(Math, this.list_point_depth2[i]))
    // }
    // bestValue = Math.max.apply(Math, listMin)
    // // console.log(listMin.indexOf(bestValue))
    // // console.log(this.keyBoardDepth1[listMin.indexOf(bestValue)])
    // this.keyBoard = this.keyBoardDepth1[listMin.indexOf(bestValue)]

    // =====================================================depth3=================================
    // let index = 0;
    // let bestValue;
    // let listMin = [];
    index = 0;
    while (true) {
      this.getKeyBoardDepth3([...this.keyBoardDepth2[index].keyBoard], index, this.keyBoardDepth2[index].depth1);
      index++
      if (index == this.keyBoardDepth2.length) {
        break;
      }
    }
    // console.log(this.keyBoardDepth3)

    for (let i = 0; i < this.keyBoardDepth1.length; i++) {
      let row = [];
      for (let j = 0; j < this.keyBoardDepth3.length; j++) {
        if (this.keyBoardDepth3[j].depth1 == i) {
          row.push(this.keyBoardDepth3[j].point)
        }
      }
      this.list_point_depth3.push(row);
    }
    // console.log(this.list_point_depth3);

    for (let i = 0; i < this.list_point_depth3.length; i++) {
      listMin.push(Math.min.apply(Math, this.list_point_depth3[i]))
    }
    console.log(listMin)
    bestValue = Math.max.apply(Math, listMin)
    // console.log(listMin.indexOf(bestValue))
    // console.log(this.keyBoardDepth1[listMin.indexOf(bestValue)])
    this.keyBoard = this.keyBoardDepth1[listMin.lastIndexOf(bestValue)]
    // ================================================endDepth3=================================

    this.keyBoard = Func.resetHighlightPosition(this.keyBoardDepth1[listMin.indexOf(bestValue)]);
    // console.log(this.keyBoard)

  }

  getKeyBoardDepth1(keyBoard) {
    //======================================độ sâu cấp 1======================================
    let enemy = [];
    enemy = Func.updateEnemy('black', keyBoard);
    // console.log(enemy)
    for (let i = 0; i < enemy.length; i++) {
      // console.log(keyBoard);
      // console.log(enemy)
      if (enemy[i].availablePosition[0] != undefined) {
        for (let j = 0; j < enemy[i].availablePosition.length; j++) {
          let keyBoardValue = [];
          // console.log("=======================================Keyboard Value==================================")
          keyBoardValue = [...this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], [...keyBoard])];
          this.keyBoardDepth1.push(keyBoardValue)
        }
      }
    }
  }

  getKeyBoardDepth2(keyBoard, indexDepth1) {
    //======================================độ sâu cấp 2======================================
    // console.log(keyBoard)
    let index = 0;
    let enemy;
    let keyBoardLocal = Func.resetHighlightPosition(keyBoard);
    enemy = Func.updateEnemy('white', keyBoardLocal);
    // console.log(enemy)
    for (let i = 0; i < enemy.length; i++) {
      // console.log(keyBoard);
      // console.log(enemy)
      if (enemy[i].availablePosition[0] != undefined) {
        for (let j = 0; j < enemy[i].availablePosition.length; j++) {
          let keyBoardValue = [];
          // console.log("=======================================Keyboard Value==================================")
          keyBoardValue = [...this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], [...keyBoardLocal])];
          this.keyBoardDepth2.push({
            depth1: indexDepth1,
            depth2: index++,
            keyBoard: keyBoardValue,
            point: Func.getPoint(keyBoardValue)
          })
        }
      }
    }
  }

  getKeyBoardDepth3(keyBoard, indexDepth2, indexDepth1) {
    //======================================độ sâu cấp 3======================================
    // console.log(keyBoard)
    let minPoint = -10000;
    let enemy;
    let keyBoardLocal = Func.resetHighlightPosition(keyBoard);
    let bestValue = {};

    enemy = Func.updateEnemy('black', keyBoardLocal);
    // console.log(enemy)
    for (let i = 0; i < enemy.length; i++) {
      // console.log(keyBoard);
      // console.log(enemy)
      if (enemy[i].availablePosition[0] != undefined) {
        for (let j = 0; j < enemy[i].availablePosition.length; j++) {
          let keyBoardValue = [];
          let object = {
            depth1: null,
            depth2: null,
            keyBoard: null,
            point: null,
          }
          // console.log("=======================================Keyboard Value==================================")
          keyBoardValue = [...this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], [...keyBoardLocal])];
          object = {
            depth1: indexDepth1,
            depth2: indexDepth2,
            keyBoard: keyBoardValue,
            point: Func.getPoint(keyBoardValue)
          }

          if (object.point > minPoint) {
            bestValue = object;
            minPoint = object.point
          }
        }
      }
    }

    this.keyBoardDepth3.push(bestValue)
  }

  getKeyBoardDepth4(keyBoard, indexDepth3, indexDepth2, indexDepth1) {
    //======================================độ sâu cấp 3======================================
    // console.log(keyBoard)
    let maxPoint = 10000;
    let enemy;
    let keyBoardLocal = Func.resetHighlightPosition(keyBoard);
    let bestValue = {};

    enemy = Func.updateEnemy('white', keyBoardLocal);
    // console.log(enemy)
    for (let i = 0; i < enemy.length; i++) {
      // console.log(keyBoard);
      // console.log(enemy)
      if (enemy[i].availablePosition[0] != undefined) {
        for (let j = 0; j < enemy[i].availablePosition.length; j++) {
          let keyBoardValue = [];
          let object = {
            depth1: null,
            depth2: null,
            depth3: null,
            keyBoard: null,
            point: null,
          }
          // console.log("=======================================Keyboard Value==================================")
          keyBoardValue = [...this.enemyMoveEmulator(enemy[i].position, enemy[i].availablePosition[j].position, enemy[i], [...keyBoardLocal])];
          object = {
            depth1: indexDepth1,
            depth2: indexDepth2,
            depth3: indexDepth3,
            keyBoard: keyBoardValue,
            point: Func.getPoint(keyBoardValue)
          }

          if (object.point < maxPoint) {
            bestValue = object;
            maxPoint = object.point
          }
        }
      }
    }

    // this.keyBoardDepth.push(bestValue)
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

