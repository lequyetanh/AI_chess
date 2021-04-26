import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-normal',
  templateUrl: './chess-normal.component.html',
  styleUrls: ['./chess-normal.component.scss']
})
export class ChessNormalComponent implements OnInit {

  keyBoard = [
    [{
      idKeyBoard: 1,
      position: [0, 0],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null
    },
    {
      idKeyBoard: 2,
      position: [0, 1],
      highlightPosition: 'normal', //normal, ally, enemy
      status: 'occupy', //occupy, blank
      chessman: {
        color: 'black',
        idChessman: 5,
        nameChessman: 'king',
        move: true,
        image: 'bK.png',
        point: 900,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 3,
      position: [0, 2],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null
    },
    {
      idKeyBoard: 4,
      position: [0, 3],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 1,
        nameChessman: 'castle',
        move: false,
        image: 'bR.png',
        point: 50,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 5,
      position: [0, 4],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null
    },
    {
      idKeyBoard: 6,
      position: [0, 5],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null
    },
    {
      idKeyBoard: 7,
      position: [0, 6],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null
    },
    {
      idKeyBoard: 8,
      position: [0, 7],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 8,
        nameChessman: 'castle',
        move: false,
        image: 'bR.png',
        point: 50,
        availablePosition: []
      },
    },
    ],
    [{
      idKeyBoard: 9,
      position: [1, 0],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 18,
        nameChessman: 'knight',
        move: false,
        image: 'wN.png',
        point: 30,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 10,
      position: [1, 1],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 10,
        nameChessman: 'pawn',
        move: false,
        image: 'bP.png',
        point: 10,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 11,
      position: [1, 2],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 11,
        nameChessman: 'pawn',
        move: false,
        image: 'bP.png',
        point: 10,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 12,
      position: [1, 3],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 12,
        nameChessman: 'pawn',
        move: false,
        image: 'bP.png',
        point: 10,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 13,
      position: [1, 4],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 14,
      position: [1, 5],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 15,
      position: [1, 6],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 6,
        nameChessman: 'bishop',
        move: false,
        image: 'bB.png',
        point: 30,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 16,
      position: [1, 7],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 16,
        nameChessman: 'pawn',
        move: false,
        image: 'bP.png',
        point: 10,
        availablePosition: []
      },
    },
    ],
    [{
      idKeyBoard: 17,
      position: [2, 0],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 18,
      position: [2, 1],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 19,
      position: [2, 2],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 20,
      position: [2, 3],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black', //black, white
        idChessman: 2,
        nameChessman: 'knight',
        move: false,
        image: 'bN.png',
        point: 30,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 21,
      position: [2, 4],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'black',
        idChessman: 4,
        nameChessman: 'queen',
        move: false,
        image: 'bQ.png',
        point: 90,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 22,
      position: [2, 5],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 23,
      position: [2, 6],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 24,
      position: [2, 7],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    }
    ],
    [{
      idKeyBoard: 25,
      position: [3, 0],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 26,
      position: [3, 1],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 27,
      position: [3, 2],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 28,
      position: [3, 3],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 29,
      position: [3, 4],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 30,
      position: [3, 5],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 31,
      position: [3, 6],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 32,
      position: [3, 7],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    }
    ],
    [{
      idKeyBoard: 33,
      position: [4, 0],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 34,
      position: [4, 1],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 35,
      position: [4, 2],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 36,
      position: [4, 3],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 19,
        nameChessman: 'bishop',
        move: false,
        image: 'wB.png',
        point: 30,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 37,
      position: [4, 4],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 38,
      position: [4, 5],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 39,
      position: [4, 6],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 40,
      position: [4, 7],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    }
    ],
    [{
      idKeyBoard: 41,
      position: [5, 0],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 42,
      position: [5, 1],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 17,
        nameChessman: 'castle',
        move: false,
        image: 'wR.png',
        point: 50,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 43,
      position: [5, 2],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 44,
      position: [5, 3],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 45,
      position: [5, 4],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 46,
      position: [5, 5],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 47,
      position: [5, 6],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 48,
      position: [5, 7],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 23,
        nameChessman: 'knight',
        move: false,
        image: 'wN.png',
        point: 30,
        availablePosition: []
      },
    }
    ],
    [{
      idKeyBoard: 49,
      position: [6, 0],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 24,
        nameChessman: 'castle',
        move: false,
        image: 'wR.png',
        point: 50,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 50,
      position: [6, 1],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 51,
      position: [6, 2],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 22,
        nameChessman: 'bishop',
        move: false,
        image: 'wB.png',
        point: 30,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 52,
      position: [6, 3],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 53,
      position: [6, 4],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 29,
        nameChessman: 'pawn',
        move: false,
        image: 'wP.png',
        point: 10,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 54,
      position: [6, 5],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    {
      idKeyBoard: 55,
      position: [6, 6],
      highlightPosition: 'normal',
      status: 'occupy',
      chessman: {
        color: 'white',
        idChessman: 31,
        nameChessman: 'pawn',
        move: false,
        image: 'wP.png',
        point: 10,
        availablePosition: []
      },
    },
    {
      idKeyBoard: 56,
      position: [6, 7],
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    },
    ],
    [

      {
        idKeyBoard: 57,
        position: [7, 0],
        highlightPosition: 'normal',
        status: 'blank',
        chessman: null,
      },
      {
        idKeyBoard: 58,
        position: [7, 1],
        highlightPosition: 'normal',
        status: 'occupy',
        chessman: {
          color: 'white',
          idChessman: 20,
          nameChessman: 'queen',
          move: false,
          image: 'wQ.png',
          point: 90,
          availablePosition: []
        },
      },
      {
        idKeyBoard: 59,
        position: [7, 2],
        highlightPosition: 'normal',
        status: 'blank',
        chessman: null,
      },
      {
        idKeyBoard: 60,
        position: [7, 3],
        highlightPosition: 'normal',
        status: 'blank',
        chessman: null,
      },
      {
        idKeyBoard: 61,
        position: [7, 4],
        highlightPosition: 'normal',
        status: 'blank',
        chessman: null,
      },
      {
        idKeyBoard: 62,
        position: [7, 5],
        highlightPosition: 'normal',
        status: 'blank',
        chessman: null,
      },
      {
        idKeyBoard: 63,
        position: [7, 6],
        highlightPosition: 'normal',
        status: 'occupy',
        chessman: {
          color: 'white',
          idChessman: 21,
          nameChessman: 'king',
          move: false,
          image: 'wK.png',
          point: 900,
          availablePosition: []
        },
      },
      {
        idKeyBoard: 64,
        position: [7, 7],
        highlightPosition: 'normal',
        status: 'blank',
        chessman: null,
      },
    ]
  ];
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

  pawnEvalWhite = [
    [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
    [+5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0],
    [+1.0, +1.0, +2.0, +3.0, +3.0, +2.0, +1.0, +1.0],
    [+0.5, +0.5, +1.0, +2.5, +2.5, +1.0, +0.5, +0.5],
    [+0.0, +0.0, +0.0, +2.0, +2.0, +0.0, +0.0, +0.0],
    [+0.5, -0.5, -1.0, +0.0, +0.0, -1.0, -0.5, +0.5],
    [+0.5, +1.0, +1.0, -2.0, -2.0, +1.0, +1.0, +0.5],
    [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
  ];

  knightEval = [
    [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
    [-4.0, -2.0, +0.0, +0.0, +0.0, +0.0, -2.0, -4.0],
    [-3.0, +0.0, +1.0, +1.5, +1.5, +1.0, +0.0, -3.0],
    [-3.0, +0.5, +1.5, +2.0, +2.0, +1.5, +0.5, -3.0],
    [-3.0, +0.0, +1.5, +2.0, +2.0, +1.5, +0.0, -3.0],
    [-3.0, +0.5, +1.0, +1.5, +1.5, +1.0, +0.5, -3.0],
    [-4.0, -2.0, +0.0, +0.5, +0.5, +0.0, -2.0, -4.0],
    [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
  ];

  bishopEvalWhite = [
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [-1.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -1.0],
    [-1.0, +0.0, +0.5, +1.0, +1.0, +0.5, +0.0, -1.0],
    [-1.0, +0.5, +0.5, +1.0, +1.0, +0.5, +0.5, -1.0],
    [-1.0, +0.0, +1.0, +1.0, +1.0, +1.0, +0.0, -1.0],
    [-1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0],
    [-1.0, +0.5, +0.0, +0.0, +0.0, +0.0, +0.5, -1.0],
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
  ];

  rookEvalWhite = [
    [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
    [+0.5, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [+0.0, +0.0, +0.0, +0.5, +0.5, +0.0, +0.0, +0.0],
  ];

  evalQueen = [
    [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [-1.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -1.0],
    [-1.0, +0.0, +0.5, +0.5, +0.5, +0.5, +0.0, -1.0],
    [-0.5, +0.0, +0.5, +0.5, +0.5, +0.5, +0.0, -0.5],
    [+0.0, +0.0, +0.5, +0.5, +0.5, +0.5, +0.0, -0.5],
    [-1.0, +0.5, +0.5, +0.5, +0.5, +0.5, +0.0, -1.0],
    [-1.0, +0.0, +0.5, +0.0, +0.0, +0.0, +0.0, -1.0],
    [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
  ];

  kingEvalWhite = [
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [+2.0, +2.0, +0.0, +0.0, +0.0, +0.0, +2.0, +2.0],
    [+2.0, +3.0, +1.0, +0.0, +0.0, +1.0, +3.0, +2.0],
  ];

  pawnEvalBlack = [
    [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
    [+0.5, +1.0, +1.0, -2.0, -2.0, +1.0, +1.0, +0.5],
    [+0.5, -0.5, -1.0, +0.0, +0.0, -1.0, -0.5, +0.5],
    [+0.0, +0.0, +0.0, +2.0, +2.0, +0.0, +0.0, +0.0],
    [+0.5, +0.5, +1.0, +2.5, +2.5, +1.0, +0.5, +0.5],
    [+1.0, +1.0, +2.0, +3.0, +3.0, +2.0, +1.0, +1.0],
    [+5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0],
    [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
  ];

  rookEvalBlack = [
    [+0.0, +0.0, +0.0, +0.5, +0.5, +0.0, +0.0, +0.0],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
    [+0.5, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +0.5],
    [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
  ];

  bishopEvalBlack = [
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [-1.0, +0.5, +0.0, +0.0, +0.0, +0.0, +0.5, -1.0],
    [-1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0],
    [-1.0, +0.0, +1.0, +1.0, +1.0, +1.0, +0.0, -1.0],
    [-1.0, +0.5, +0.5, +1.0, +1.0, +0.5, +0.5, -1.0],
    [-1.0, +0.0, +0.5, +1.0, +1.0, +0.5, +0.0, -1.0],
    [-1.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -1.0],
    [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
  ];

  kingEvalBlack = [
    [+2.0, +3.0, +1.0, +0.0, +0.0, +1.0, +3.0, +2.0],
    [+2.0, +2.0, +0.0, +0.0, +0.0, +0.0, +2.0, +2.0],
    [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  ]

  // keyBoardBackUp = [...this.keyBoard];


  constructor() {
    this.keyBoard = this.resetHighlightPosition(this.keyBoard);
    this.keyBoardBackUp = [...this.keyBoard];
    // for (let i = 0; i < 8; i++) {
    //   let row = [];
    //   for (let j = 0; j < 8; j++) {
    //     row.push(this.keyBoard[i][j]);
    //   }
    //   this.keyBoardBackUp.push(row);
    // }
    // console.log(this.keyBoardBackUp);
    // this.keyBoard = [];
    // console.log(this.keyBoardBackUp);
    // console.log(this.enemy)
    // this.enemyMove();
  }

  ngOnInit() {

  }

  // ==========================================================người chơi====================================================

  //gọi khi bấm vào 1 ô
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
        // console.log(this.keyBoard);
        // this.enemy = this.updateEnemy('black', this.keyBoard);
        // console.log(this.enemy);
        setTimeout(() => {
          this.enemyMove();
        }, 1)
      }
    }
  }

  // =======================================================end người chơi============================================

  //xác định lại vị trí của các quân cờ enemy trong danh sách enemy
  updateEnemy(color, keyBoard) {
    let enemy = [];

    for (let i = 0; i < keyBoard.length; i++) {
      for (let j = 0; j < keyBoard[i].length; j++) {
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

    return enemy;
    // console.log(this.enemy);
  }

  resetHighlightPosition(keyBoard) {
    let keyBoardLocal = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push(keyBoard[i][j]);
      }
      keyBoardLocal.push(row);
    }

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
          keyBoardLocal[i][j].chessman.availablePosition = this.getAvailablePosition(keyBoardLocal[i][j].position, keyBoardLocal[i][j].chessman.nameChessman, keyBoardLocal[i][j].chessman.color, keyBoardLocal);
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
                let currentAvailablePosition = this.checkPositionPawnKnightKing('white', this.listAllPosition[i], keyBoard);
                if (currentAvailablePosition != undefined) {
                  arrayAvailablePosition.push(currentAvailablePosition);

                  //nếu mà quân này mà chưa đi
                  if (keyBoard[currentPosition[0]][currentPosition[1]].chessman.move == false) {
                    //xét vị trí đi 2 bước của quân tốt
                    if (keyBoard[currentPosition[0] - 2][currentPosition[1]].chessman == null) {
                      let currentAvailablePosition = this.checkPositionPawnKnightKing('white', [[currentPosition[0] - 2], [currentPosition[1]]], keyBoard);
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
                      let currentAvailablePosition = this.checkPositionPawnKnightKing('white', [[currentPosition[0] + 2], [currentPosition[1]]], keyBoard);
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

  //kiem tra xem vi tri co the di kha dung hay ko
  checkPositionPawnKnightKing(myColor, position, keyBoard) {
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

  checkPositionCastleBishopQueen(array, color, keyBoard) {
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

  // =======================================================đối chủ============================================
  enemyMove() {
    this.getBestMove();
    this.keyBoardDepth1 = [];
    this.keyBoardDepth2 = [];
    this.keyBoardDepth3 = [];
    // console.log(this.keyBoard)
  }

  getBestMove() {
    let bestValue;

    //======================================độ sâu cấp 1======================================
    // console.log(this.keyBoard)
    let list_point_depth_1 = [];
    let keyBoardBestValue = [];
    this.enemy = this.updateEnemy('black', this.keyBoardBackUp);
    // console.log(this.enemy)
    for (let i = 0; i < this.enemy.length; i++) {
      if (this.enemy[i].availablePosition[0] != undefined) {
        for (let j = 0; j < this.enemy[i].availablePosition.length; j++) {
          let keyBoardDepth1 = [];
          // console.log(this.enemy[i].availablePosition[])
          // console.log(this.keyBoard);
          keyBoardDepth1 = this.enemyMoveEmulatorDepth2(this.enemy[i].position, this.enemy[i].availablePosition[j].position, this.enemy[i], this.keyBoardBackUp);
          console.log("===================================================")
          // console.log(keyBoardDepth1)
          keyBoardDepth1 = this.resetHighlightPosition(keyBoardDepth1);
          // console.log(keyBoardDepth1)
          this.keyBoardDepth1.push(keyBoardDepth1);
          keyBoardBestValue.push(keyBoardDepth1);

          // console.log(this.keyBoardDepth1);
          // console.log(this.enemy[i].availablePosition[j].position)
          // console.log(list_point_depth_1);
          // if (j == 0) {
          //   break;
          // }
        }
      }
      // break
    }

    // list_point_depth_1.length = this.keyBoardDepth1.length;
    // console.log(keyBoardBestValue[1]);
    // console.log(this.keyBoardDepth1);
    // console.log(keyBoardBestValue);
    for (let m = 0; m < keyBoardBestValue.length; m++) {
      list_point_depth_1.push(this.getPoint(keyBoardBestValue[m]));
    }

    // console.log(this.keyBoardDepth1[35]);
    console.log(list_point_depth_1);
    // this.resetHighlightPosition(this.keyBoardBackUp);
    // this.updateEnemy('white', this.keyBoardBackUp);
    // console.log(this.enemy);

    //======================================độ sâu cấp 2======================================
    this.enemy = [];
    let list_point_depth_2 = [];
    // console.log(this.keyBoardDepth1[0]);
    // console.log(this.updateEnemy('white', this.keyBoardDepth1[35]))
    // for (let index = 0; index < this.keyBoardDepth1.length; index++) {
    //   let row = [];
    //   this.keyBoardDepth2 = [];
    //   let keyBoardDepth2 = [];
    //   this.enemy = this.updateEnemy('white', this.keyBoardDepth1[index]);
    //   // console.log(this.enemy)
    //   for (let i = 0; i < this.enemy.length; i++) {
    //     if (this.enemy[i].availablePosition[0] != undefined) {
    //       for (let j = 0; j < this.enemy[i].availablePosition.length; j++) {
    //         // console.log(this.enemy[i].availablePosition[])
    //         // console.log(this.keyBoard);
    //         keyBoardDepth2 = this.enemyMoveEmulatorDepth2(this.enemy[i].position, this.enemy[i].availablePosition[j].position, this.enemy[i], this.keyBoardDepth1[index]);
    //         // console.log(keyBoardDepth2)

    //         // for (let m = 0; m < 8; m++) {
    //         //   for (let n = 0; n < 8; n++) {
    //         //     if (keyBoardDepth2[m][n].status == 'occupy') {
    //         //       // console.log(keyBoardDepth2[m][n])
    //         //       keyBoardDepth2[m][n] = {
    //         //         position: keyBoardDepth2[m][n].position,
    //         //         idChessman: keyBoardDepth2[m][n].chessman.idChessman
    //         //       }
    //         //     }
    //         //   }
    //         // }

    //         this.keyBoardDepth2.push(keyBoardDepth2);
    //         // console.log(this.keyBoardDepth2);
    //         // console.log(number++);
    //         row.push(this.getPoint(keyBoardDepth2));

    //         // console.log(this.enemy[i].availablePosition[j].position)

    //         // break;
    //       }
    //       // break;
    //     }
    //   }
    //   // console.log("depth1")
    //   // for (let n = 0; n < this.keyBoardDepth2.length; n++) {
    //   //   row.push(this.getPoint(this.keyBoardDepth2[n]));
    //   // }
    //   list_point_depth_2.push(row);
    //   this.keyBoardDepth1[index] = this.keyBoardDepth2;
    // }

    // console.log(this.keyBoardDepth1[35][29]);
    // console.log(this.keyBoardDepth1[18][3]);
    // console.log(list_point_depth_2[18][13]);

    // list_point_depth_1[index] = list_point_depth_2;
    // break;

    // console.log(this.keyBoardDepth1);
    // console.log(this.keyBoardDepth1[0]);
    // console.log(list_point_depth_2);

    //======================================độ sâu cấp 3======================================
    // for (let index = 0; index < this.keyBoardDepth1.length; index++) {
    //   for (let index2 = 0; index2 < this.keyBoardDepth1[index].length; index2++) {
    //     this.updateEnemy('black', this.keyBoardDepth1[index][index2]);
    //     let list_point_depth_3 = [];
    //     let keyBoardDepth3 = [];
    //     this.keyBoardDepth3 = [];
    //     for (let i = 0; i < this.enemy.length; i++) {
    //       if (this.enemy[i].availablePosition[0] != undefined) {
    //         for (let j = 0; j < this.enemy[i].availablePosition.length; j++) {
    //           // console.log(this.enemy[i].availablePosition[])
    //           // console.log(this.keyBoard);
    //           keyBoardDepth3 = this.enemyMoveEmulator(this.enemy[i].position, this.enemy[i].availablePosition[j].position, this.enemy[i], this.keyBoardDepth1[index][index2]);
    //           this.keyBoardDepth3.push(keyBoardDepth3);
    //           list_point_depth_3.push(this.getPoint(keyBoardDepth3));
    //           // console.log(this.keyBoardDepth3);
    //           // console.log(this.enemy[i].availablePosition[j].position)
    //           // console.log(list_point_depth_3);
    //           // break;
    //         }
    //         // break;
    //       }
    //     }

    //     this.keyBoardDepth1[index][index2] = this.keyBoardDepth3;
    //     list_point_depth_1[index][index2] = list_point_depth_3
    //   }
    // }

    // console.log(this.keyBoardDepth1);
    // console.log(list_point_depth_1);
    // this.updateEnemy('white', this.keyBoardBackUp);

    // =================================================================================================
    // bestValue = this.minimax(list_point_depth_2, 2, 'max');

    // // // console.log(list_point_depth_1);
    // for (let i = 0; i < list_point_depth_2.length; i++) {
    //   if (Math.min.apply(Math, list_point_depth_2[i]) == bestValue) {
    //     // console.log(i);
    //     this.keyBoard = keyBoardBestValue[i];
    //     this.keyBoardBackUp = keyBoardBestValue[i];
    //     // console.log(this.keyBoard);
    //     break;
    //   }
    // }
    // // console.log(this.keyBoard);
    // // console.log(this.enemy)

    // // this.resetHighlightPosition(this.keyBoard);
    // console.log('bestValue:' + bestValue);
    // this.resetHighlightPosition(this.keyBoard);
    // this.updateEnemy('black', this.keyBoard);

  }

  enemyMoveEmulatorDepth2(startPosition, endPosition, chessman, keyBoardInput) {
    // console.log([endPosition[0]],[endPosition[1]]);
    // console.log(keyBoard[start][end])

    let keyBoardLocal = [];

    // keyBoardLocal = [...keyBoardInput];

    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push(keyBoardInput[i][j]);
      }
      keyBoardLocal.push(row);
    }

    keyBoardLocal[endPosition[0]][endPosition[1]] = {
      idKeyBoard: keyBoardLocal[endPosition[0]][endPosition[1]].idKeyBoard,
      position: keyBoardLocal[endPosition[0]][endPosition[1]].position,
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
      },
    };

    keyBoardLocal[startPosition[0]][startPosition[1]] = {
      idKeyBoard: keyBoardLocal[startPosition[0]][startPosition[1]].idKeyBoard,
      position: keyBoardLocal[startPosition[0]][startPosition[1]].position,
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    };

    // keyBoardLocal = this.resetHighlightPosition(keyBoardLocal);

    // console.log("--------", keyBoardLocal)

    return keyBoardLocal;
  }

  minimax(node, depth, maximizingPlayer) {
    return (this.alphabeta(node, depth, -10000, 10000, maximizingPlayer));
  }

  alphabeta(node, depth, a, b, maximizingPlayer) {
    // console.log(node, a, b, maximizingPlayer);
    if (node[0] == undefined || depth == 0) {
      //   console.log(depth)
      //   console.log('node: ' + node);
      return node;
    }
    if (maximizingPlayer == 'max') {
      for (let i = 0; i < node.length; i++) {
        a = Math.max(a, this.alphabeta(node[i], depth - 1, a, b, 'min'));
        // console.log(node);
        // console.log('a: cho goi ham max' + '-----------' + a);
        if (a >= b) {
          // console.log('a: ' + a);
          // console.log('b: ' + b);

          break;
        }
      }
      return a;
    } else {
      for (let i = 0; i < node.length; i++) {
        b = Math.min(b, this.alphabeta(node[i], depth - 1, a, b, 'max'));
        // console.log(node);
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
  // =======================================================end đối thủ============================================



  getPoint(keyBoard) {
    let blackNum = 0;
    let whitekNum = 0;
    try {
      for (let row = 0; row < keyBoard.length; row++) {
        for (let col = 0; col < keyBoard[row].length; col++) {
          if (keyBoard[row][col].status == 'occupy') {
            if (keyBoard[row][col].chessman.color == 'black') {

              if (keyBoard[row][col].chessman.nameChessman == 'pawn') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.pawnEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + this.pawnEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'knight') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.knightEval[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + this.knightEval[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'king') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.kingEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + this.kingEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'castle') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.rookEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + this.rookEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'bishop') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.bishopEvalBlack[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + this.bishopEvalBlack[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'queen') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.evalQueen[row][col])
                blackNum = blackNum + keyBoard[row][col].chessman.point + this.evalQueen[row][col];
              }
            }
            if (keyBoard[row][col].chessman.color == 'white') {

              if (keyBoard[row][col].chessman.nameChessman == 'pawn') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.pawnEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + this.pawnEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'knight') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.knightEval[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + this.knightEval[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'king') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.kingEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + this.kingEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'castle') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.rookEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + this.rookEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'bishop') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.bishopEvalWhite[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + this.bishopEvalWhite[row][col];
              }
              if (keyBoard[row][col].chessman.nameChessman == 'queen') {
                // console.log('[' + row + ']' + '[' + col + ']=', keyBoard[row][col].chessman.point + this.evalQueen[row][col])
                whitekNum = whitekNum + keyBoard[row][col].chessman.point + this.evalQueen[row][col];
              }
            }
          }
        }
      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
    }

    // console.log(blackNum);
    // console.log(whitekNum)
    return blackNum - whitekNum;
  }

  sortArray(array, direction) {
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

  getMaxColumn(array) {
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

  getMinColumn(array) {
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

  getMaxRow(array) {
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

  getMinRow(array) {
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

}
