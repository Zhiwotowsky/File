'use strict';

let number0fFilms;

function start() {
  number0fFilms = +prompt('Склько фильмов вы уже посмотрели?', '');

  while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
    number0fFilms = +prompt('Склько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
   count: number0fFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
 };

 
     
    function rememberMyFilms() {
      for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотреных фильмов', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
          personalMovieDB.movies[a] = b;
          console.log('done');
        } else {
          console.log('error');
          i--;
        }

      }
    }
    //rememberMyFilms();


    function detectPersonallevel() {

      if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов;");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы класический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка ");
    }
    }
    //detectPersonallevel();
    
    function shawMyDB(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }

    }
    shawMyDB(personalMovieDB.privat);
      

    function writeYourGenres() {
      for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      }
    }
    writeYourGenres();
 
    

    

