function updateCounter(counter,direction,interval = 5){
  if(!(counter == 0 && !direction)) return direction ? counter = counter + interval : counter = counter -interval
  else return 0;
}

function updateViewContent(counters) {

  $(".subs-count").text(`${formatNumbers(counters.countQ)} Suscriptores`)
  $(".like-count").text(`${formatNumbers(counters.countW)}`)
  $(".dislike-count").text(`${formatNumbers(counters.countE)}`)
  $(".views-count").text(`${formatNumbers(counters.countR)}`)

}

function formatNumbers(number) {

  if(number >= 1000 && number < 10000) return `${(number/1000).toFixed(1)} K`;
  if(number >= 10000 && number < 100000) return `${(number/10000).toFixed(1)} K`;
  if(number >= 100000 && number < 1000000) return `${(number/100000).toFixed(1)} K`;

  if(number >= 1000000 && number < 10000000) return `${(number/1000000).toFixed(1)} M`;
  if(number >= 10000000 && number < 100000000) return `${(number/10000000).toFixed(1)} M`;
  if(number >= 100000000 && number < 1000000000) return `${(number/100000000).toFixed(1)} M`;

  return number;
}