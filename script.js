/**
 * @Author Gislaine CArvalho
 */

 var sagas = ("Saga Crepúsculo", "Tinkerbell", "Matrix", "Cinquenta Tons de cinza", "Shrek","O Senhor dos Anéis");
 var displayList = ("#display1", "#display2", "#display3", "#display4", "#display5");
 var moviesList = ("#movies1", "#movies2", "#movies3", "#movies4", " #movies5 ");
 
 for (i = 0; i < displayList.length; i++) {
   var display = document.querySelector(displayList[i]);
   var displayValue = display.innerHTML;
   
   displayValue = display.innerHTML;
   newSagaDisplay = "<img src=" + sagasImages[i] + ">";
   display.innerHTML = displayValue + newSagaDisplay;
 }
 
 for (i = 0; i < movies.length; i++) {
   var displayMovie = document.querySelector(moviesList[i]);
   var displayMovieValue = displayMovie.innerHTML;
   var moviePosition = 2 + (2 * i);
 
   displayMovieValue = displayMovie.innerHTML;
   newMovieDisplay = "<img src=" + movies[moviePosition + i - 2] + ">" + "<img src=" + movies[moviePosition + i - 1] + ">" + "<img src=" + movies[moviePosition + i] + ">";
   displayMovie.innerHTML = displayMovieValue + newMovieDisplay;
 }
 
 