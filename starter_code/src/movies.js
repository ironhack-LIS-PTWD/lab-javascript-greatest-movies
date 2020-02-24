/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  const sortedArray = [...array].sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (a.year < b.year) return -1;
    else {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else return 0;
    }
  });
  return sortedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let filteredArray = array.filter(movie => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return filteredArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const sortedArray = [...array].sort((a, b) => {
    if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
    else return 0;
  });
  return sortedArray.map(movie => movie.title).slice(0, 20);

  // altern solution:
  // return array
  //     .map(movie => movie.title)
  //     .sort()
  //     .slice(0, 20);
}

// // Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let total = array.reduce((accumulator, current) => {
      if (current.rate) {
        return accumulator + current.rate;
      } else {
        return accumulator + 0;
      }
    }, 0);
    let average = total / array.length;
    // return Math.round(average * 100) / 100;
    // return Number(average.toFixed(2));
    return parseFloat(average.toFixed(2));
  }
}
// // Iteration 5:

function dramaMoviesRate(array) {
  let dramaMovies = [];
  array.map(movie => {
    if (movie.genre.includes("Drama")) {
      dramaMovies.push(movie);
    }
  });
  return ratesAverage(dramaMovies);

  // altern solution :
  // const dramaMovies = array.filter(movie => {
  //   return movie.genre.includes("Drama");
  // });
}

// // Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  return array.map(movie => {
    const durationAsString = movie.duration;
    let duration = 0;
    for (let value of durationAsString.split(" ")) {
      const number = parseInt(value);
      if (value.includes("h")) {
        duration += number * 60;
      } else if (value.includes("min")) {
        duration += number;
      }
    }
    return {
      ...movie,
      duration
    };
  });
}
