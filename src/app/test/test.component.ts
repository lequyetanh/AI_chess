<!-- import { Component, OnInit } from '@angular/core'; -->
 import { Component, OnInit } from '@angular/core';
import {
  HostListener,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  keyBoard: any = []
  direction: any = 'right'
  snake = []
  timerId: any;
  energy: any = {
    position: [0, 10],
    point: 1000
  }
  score = 0;

  constructor() {
    for (let i = 0; i < 20; i++) {
      let row = []
      for (let j = 0; j < 40; j++) {
        row.push({
          position: [i, j],
          status: 'blank',
          snake: null,
        })
      }
      this.keyBoard.push(row);
    }

    this.keyBoard[0][0] = {
      ...this.keyBoard[0][0],
      status: 'occupy',
      snake: {
        part: 'body',
      }
    }

    this.keyBoard[0][1] = {
      ...this.keyBoard[0][1],
      status: 'occupy',
      snake: {
        part: 'body',
      }
    }

    this.keyBoard[0][2] = {
      ...this.keyBoard[0][2],
      status: 'occupy',
      snake: {
        part: 'head',
      }
    }

    this.snake = [
      {
        position: [0, 2],
        status: 'occupy',
        snake: {
          part: 'head'
        }
      },
      {
        position: [0, 1],
        status: 'occupy',
        snake: {
          part: 'body'
        }
      },
      {
        position: [0, 0],
        status: 'occupy',
        snake: {
          part: 'body'
        }
      }]
  }

  ngOnInit() {
    this.timerId = setInterval(() => {
      this.runSnake(this.keyBoard, this.snake);
    }, 100)
  }

  runSnake(keyBoard, snake) {
    switch (this.direction) {
      case 'right':
        {
          if (this.snake[0].position[1] == 39) {
            alert("You lose")
            clearInterval(this.timerId)
          } else {
            this.checkDie(snake, [snake[0].position[0], snake[0].position[1] + 1])
            this.updatePositionSnake(keyBoard, snake, [snake[0].position[0], snake[0].position[1] + 1])
          }
        }
        break;
      case 'left':
        {
          if (this.snake[0].position[1] == 0) {
            alert("You lose")
            clearInterval(this.timerId)
          } else {
            this.checkDie(snake, [snake[0].position[0], snake[0].position[1] - 1])
            this.updatePositionSnake(keyBoard, snake, [snake[0].position[0], snake[0].position[1] - 1])
          }
        }
        break;
      case 'up':
        {
          if (this.snake[0].position[0] == 0) {
            alert("You lose")
            clearInterval(this.timerId)
          } else {
            this.checkDie(snake, [snake[0].position[0] - 1, snake[0].position[1]])
            this.updatePositionSnake(keyBoard, snake, [snake[0].position[0] - 1, snake[0].position[1]])
          }
        }
        break;
      case 'down':
        {
          if (this.snake[0].position[0] == 19) {
            alert("You lose")
            clearInterval(this.timerId)
          } else {
            this.checkDie(snake, [snake[0].position[0] + 1, snake[0].position[1]])
            this.updatePositionSnake(keyBoard, snake, [snake[0].position[0] + 1, snake[0].position[1]])
          }
        }
        break;
    }
  }

  checkDie(snake, position) {
    for (let i = 0; i < snake.length; i++) {
      if (position[0] == snake[i].position[0] && position[1] == snake[i].position[1]) {
        alert("You lose")
        clearInterval(this.timerId)
        break;
      }
    }
  }

  addSnake(snake, position) {
    this.score += 10;
    snake.push({
      position: position,
      status: 'occupy',
      snake: {
        part: 'body'
      }
    })
  }

  createEnergy() {
    this.energy = {
      position: [Math.floor(Math.random() * 19), Math.floor(Math.random() * 39)],
      point: 10
    }
  }

  updatePositionSnake(keyBoard, snake, headPosition) {
    let end = []
    // console.log(headPosition)
    for (let i = snake.length - 1; i >= 0; i--) {

      if (i == 0) {
        snake[i] = {
          position: headPosition,
          status: 'occupy',
          snake: {
            part: 'head',
          }
        }
        // console.log(snake)
        keyBoard[headPosition[0]][headPosition[1]] = snake[i]
        break;
      }

      if (i == snake.length - 1) {
        end = [snake[i].position[0], snake[i].position[1]]
        keyBoard[snake[i].position[0]][snake[i].position[1]] = {
          ...keyBoard[snake[i].position[0]][snake[i].position[1]],
          status: 'blank',
          snake: null,
        }
      }

      snake[i] = {
        ...snake[i - 1]
      }
      snake[i].snake.part = 'body'
      keyBoard[snake[i].position[0]][snake[i].position[1]] = snake[i]

    }
    if (snake[0].position[0] == this.energy.position[0] && snake[0].position[1] == this.energy.position[1]) {
      this.addSnake(snake, end)
      this.createEnergy();
    }
    // console.log(snake)
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // trái
    if (event.keyCode == 37) {
      if (this.snake[0].position[0] == this.snake[1].position[0] && this.snake[0].position[1] == this.snake[1].position[1] + 1) {

      } else {
        this.direction = 'left';
      }
    }
    // phải
    if (event.keyCode == 39) {
      if (this.snake[0].position[0] == this.snake[1].position[0] && this.snake[0].position[1] + 1 == this.snake[1].position[1]) {

      } else {
        this.direction = 'right';
      }
    }
    // trên
    if (event.keyCode == 38) {
      if (this.snake[0].position[0] == this.snake[1].position[0] + 1 && this.snake[0].position[1] == this.snake[1].position[1]) {

      } else {
        this.direction = 'up';
      }
    }
    // dưới
    if (event.keyCode == 40) {
      if (this.snake[0].position[0] + 1 == this.snake[1].position[0] && this.snake[0].position[1] == this.snake[1].position[1]) {

      } else {
        this.direction = 'down';
      }
    }
  }

}
