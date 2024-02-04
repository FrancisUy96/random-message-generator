// generate random number
const getRandom = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// generate random date
const getRandomDate = (now, then) => {
  return new Date(
    now.getTime() +
      Math.random() * (then.getTime() - now.getTime()),
  );
};

const now = new Date();
const then = new Date(2025, 0, 1, 0, 0);
const Messages = {
  fate: ['good', 'bad'],
  wish: ['finances','career','love life','health'],
  color: ['red', 'blue', 'green', 'white', 'black', 'pink', 'purple'],
  quotes: [
    ["The best investment you can make is in yourself.", "Warren Buffet"],
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
    ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
  ],
};

// store "fate reading" in array
let fateReading = [];

// iterate over messages
for(let key in Messages){
  let randomReads = getRandom(Messages[key]);
  fateReading.push(randomReads);
}

for(let msg in fateReading){
  switch(msg){
    case '0':
      fateReading.splice(msg, 1, `A ${fateReading[msg]} news`)
      break;
    case '1':
      fateReading.splice(msg, 1, `about your ${fateReading[msg]} is coming your way.`)
      break; 
    case '2':    
      if (fateReading[0] === 'A good news'){
        fateReading.splice(
          msg, 1, `Wear the color ${fateReading[msg]} and don't forget to share this or it will not come true`
          );
      } else {
        fateReading.splice(
          msg, 1, `Wear the color ${fateReading[msg]} and don't forget to share this or it will come true`
          );
      }
      break;
    case '3':
      fateReading.splice(msg, 1, fateReading[msg].join(' - '));
    default:
      break;
  }
}
// format text
const formatMessage = array => {
  let future = getRandomDate(now,then);
  future = future.toLocaleString();
  console.log(`On this day, ${future}`)
  array.splice(0, 2, array[0] + array[1]);
  const formatted = array.join('\n');
  console.log(formatted);
};

formatMessage(fateReading);
