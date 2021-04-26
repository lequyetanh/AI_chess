export let keyBoard = [
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

export const pawnEvalWhite = [
  [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
  [+5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0],
  [+1.0, +1.0, +2.0, +3.0, +3.0, +2.0, +1.0, +1.0],
  [+0.5, +0.5, +1.0, +2.5, +2.5, +1.0, +0.5, +0.5],
  [+0.0, +0.0, +0.0, +2.0, +2.0, +0.0, +0.0, +0.0],
  [+0.5, -0.5, -1.0, +0.0, +0.0, -1.0, -0.5, +0.5],
  [+0.5, +1.0, +1.0, -2.0, -2.0, +1.0, +1.0, +0.5],
  [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
];

export const knightEval = [
  [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
  [-4.0, -2.0, +0.0, +0.0, +0.0, +0.0, -2.0, -4.0],
  [-3.0, +0.0, +1.0, +1.5, +1.5, +1.0, +0.0, -3.0],
  [-3.0, +0.5, +1.5, +2.0, +2.0, +1.5, +0.5, -3.0],
  [-3.0, +0.0, +1.5, +2.0, +2.0, +1.5, +0.0, -3.0],
  [-3.0, +0.5, +1.0, +1.5, +1.5, +1.0, +0.5, -3.0],
  [-4.0, -2.0, +0.0, +0.5, +0.5, +0.0, -2.0, -4.0],
  [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
];
export const bishopEvalWhite = [
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
  [-1.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -1.0],
  [-1.0, +0.0, +0.5, +1.0, +1.0, +0.5, +0.0, -1.0],
  [-1.0, +0.5, +0.5, +1.0, +1.0, +0.5, +0.5, -1.0],
  [-1.0, +0.0, +1.0, +1.0, +1.0, +1.0, +0.0, -1.0],
  [-1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0],
  [-1.0, +0.5, +0.0, +0.0, +0.0, +0.0, +0.5, -1.0],
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
];
export const rookEvalWhite = [
  [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
  [+0.5, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [+0.0, +0.0, +0.0, +0.5, +0.5, +0.0, +0.0, +0.0],
];

export const evalQueen = [
  [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
  [-1.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -1.0],
  [-1.0, +0.0, +0.5, +0.5, +0.5, +0.5, +0.0, -1.0],
  [-0.5, +0.0, +0.5, +0.5, +0.5, +0.5, +0.0, -0.5],
  [+0.0, +0.0, +0.5, +0.5, +0.5, +0.5, +0.0, -0.5],
  [-1.0, +0.5, +0.5, +0.5, +0.5, +0.5, +0.0, -1.0],
  [-1.0, +0.0, +0.5, +0.0, +0.0, +0.0, +0.0, -1.0],
  [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
];
export const kingEvalWhite = [
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
  [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
  [+2.0, +2.0, +0.0, +0.0, +0.0, +0.0, +2.0, +2.0],
  [+2.0, +3.0, +1.0, +0.0, +0.0, +1.0, +3.0, +2.0],
];
export const pawnEvalBlack = [
  [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
  [+0.5, +1.0, +1.0, -2.0, -2.0, +1.0, +1.0, +0.5],
  [+0.5, -0.5, -1.0, +0.0, +0.0, -1.0, -0.5, +0.5],
  [+0.0, +0.0, +0.0, +2.0, +2.0, +0.0, +0.0, +0.0],
  [+0.5, +0.5, +1.0, +2.5, +2.5, +1.0, +0.5, +0.5],
  [+1.0, +1.0, +2.0, +3.0, +3.0, +2.0, +1.0, +1.0],
  [+5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0, +5.0],
  [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
];
export const rookEvalBlack = [
  [+0.0, +0.0, +0.0, +0.5, +0.5, +0.0, +0.0, +0.0],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [-0.5, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -0.5],
  [+0.5, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +0.5],
  [+0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0],
];

export const bishopEvalBlack = [
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
  [-1.0, +0.5, +0.0, +0.0, +0.0, +0.0, +0.5, -1.0],
  [-1.0, +1.0, +1.0, +1.0, +1.0, +1.0, +1.0, -1.0],
  [-1.0, +0.0, +1.0, +1.0, +1.0, +1.0, +0.0, -1.0],
  [-1.0, +0.5, +0.5, +1.0, +1.0, +0.5, +0.5, -1.0],
  [-1.0, +0.0, +0.5, +1.0, +1.0, +0.5, +0.0, -1.0],
  [-1.0, +0.0, +0.0, +0.0, +0.0, +0.0, +0.0, -1.0],
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
];
export const kingEvalBlack = [
  [+2.0, +3.0, +1.0, +0.0, +0.0, +1.0, +3.0, +2.0],
  [+2.0, +2.0, +0.0, +0.0, +0.0, +0.0, +2.0, +2.0],
  [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
  [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
]
