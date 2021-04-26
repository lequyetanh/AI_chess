

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

