import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-minimax',
  templateUrl: './chess-minimax.component.html',
  styleUrls: ['./chess-minimax.component.scss']
})
export class ChessMinimaxComponent implements OnInit {

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
  list_point_depth = [];
  index = 0;

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

  keyBoardBackUp = [...this.keyBoard];

  constructor() {
    this.keyBoard = this.resetHighlightPosition(this.keyBoard);
    // console.log(this.keyBoard);
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
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        keyBoard[i][j].highlightPosition = 'normal';
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (keyBoard[i][j].chessman != null) {
          this.listAllPosition = [];
          this.array_row_left = [];
          this.array_row_right = [];
          this.array_column_top = [];
          this.array_column_bottom = [];
          this.array_diagonal_top_right = [];
          this.array_diagonal_right_bottom = [];
          this.array_diagonal_bottom_left = [];
          this.array_diagonal_left_top = [];
          keyBoard[i][j].chessman.availablePosition = this.getAvailablePosition(keyBoard[i][j].position, keyBoard[i][j].chessman.nameChessman, keyBoard[i][j].chessman.color, keyBoard);
        }
      }
    }

    // console.log(this.keyBoard)
    return keyBoard;

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
    let bestValue = this.minimax(this.keyBoard, 2, 'max', 'black');
    // console.log(bestValue);
    console.log(this.keyBoardDepth1);
    this.resetHighlightPosition(this.keyBoard)

  }

  minimax(keyBoard, depth, maximizingPlayer, color) {
    return (this.alphabeta(keyBoard, depth, { a: -10000, indexKeyBoard: null }, { b: -10000, indexKeyBoard: null }, maximizingPlayer, color, this.index));
  }

  alphabeta(keyBoard, depth, objectA, objectB, maximizingPlayer, color, index) {
    // console.log(depth, keyBoard)

    let next = false;
    let me = this.updateEnemy(color, keyBoard);
    // console.log(me);
    if (me[0] != undefined) {
      for (let i = 0; i < me.length; i++) {
        if (me[i].availablePosition[0] != undefined) {
          next = true;
          break;
        }
      }
    } else {
      next = false;
    }
    // console.log(me);

    // console.log(node, a, b, maximizingPlayer);
    if (next == false || depth == 0) {
      // console.log(this.getPoint(keyBoard))
      let pointKeyBoard = {
        point: this.getPoint(keyBoard),
        index: index,
      };
      console.log(pointKeyBoard)
      return pointKeyBoard;
    }

    if (maximizingPlayer == 'max') {
      let keyBoardItem;
      let indexKeyBoard;
      for (let i = 0; i < me.length; i++) {
        if (me[i].availablePosition[0] != undefined) {
          for (let j = 0; j < me[i].availablePosition.length; j++) {
            let newKeyBoard = this.enemyMoveEmulatorDepth2(me[i].position, me[i].availablePosition[j].position, me[i], keyBoard);
            // console.log(newKeyBoard);
            if (depth == 2) {
              // console.log(newKeyBoard);
              this.keyBoardDepth1.push(newKeyBoard);
            }

            keyBoardItem = this.alphabeta(newKeyBoard, depth - 1, { a: -10000, indexKeyBoard: null }, { b: -10000, indexKeyBoard: null }, 'min', 'white', this.index++);
            if (keyBoardItem.point > objectA.a) {
              objectA.a = keyBoardItem.point;
              indexKeyBoard = keyBoardItem.index;
            }
            // console.log(depth, newKeyBoard);
            // console.log(a);
            // console.log(keyBoard);
            if (objectA.a >= objectB.b) {
              // console.log('a: ' + a);
              // console.log('b: ' + b);
              break;
            }
          }
        }
      }
      return {
        a: keyBoardItem.point,
        indexKeyBoard: indexKeyBoard,
      };

    } else {
      let keyBoardItem;
      let indexKeyBoard;
      for (let i = 0; i < me.length; i++) {
        if (me[i].availablePosition[0] != undefined) {
          for (let j = 0; j < me[i].availablePosition.length; j++) {
            let newKeyBoard = this.enemyMoveEmulatorDepth2(me[i].position, me[i].availablePosition[j].position, me[i], keyBoard);
            // console.log(depth, newKeyBoard);
            keyBoardItem = this.alphabeta(newKeyBoard, depth - 1, { a: -10000, indexKeyBoard: null }, { b: -10000, indexKeyBoard: null }, 'max', 'black', index)
            if (keyBoardItem.point < objectB.b) {
              objectB.b = keyBoardItem.point;
              indexKeyBoard = keyBoardItem.index;
            }

            // console.log(b);
            // console.log(keyBoard);
            if (objectA.a >= objectB.b) {
              // console.log('a: ' + a);
              // console.log('b: ' + b);
              break;
            }
          }
        }
      }
      return {
        b: keyBoardItem.point,
        indexKeyBoard: indexKeyBoard,
      };
    }
  }

  enemyMoveEmulatorDepth2(startPosition, endPosition, chessman, keyBoardInput) {
    // console.log([endPosition[0]],[endPosition[1]]);
    // console.log(keyBoard[start][end])

    let keyBoardLocal = [];

    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push(keyBoardInput[i][j]);
      }
      keyBoardLocal.push(row);
    }

    keyBoardLocal[startPosition[0]][startPosition[1]] = {
      idKeyBoard: keyBoardLocal[startPosition[0]][startPosition[1]].idKeyBoard,
      position: keyBoardLocal[startPosition[0]][startPosition[1]].position,
      highlightPosition: 'normal',
      status: 'blank',
      chessman: null,
    };

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
    keyBoardLocal[endPosition[0]][endPosition[1]].chessman.availablePosition = this.getAvailablePosition(keyBoardLocal[endPosition[0]][endPosition[1]].position, keyBoardLocal[endPosition[0]][endPosition[1]].chessman.nameChessman, keyBoardLocal[endPosition[0]][endPosition[1]].chessman.color, keyBoardLocal);

    // console.log("--------", keyBoardLocal)

    return keyBoardLocal;
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
