import { queries, answers, alternatives } from './data/ResponseQueries';

const output = (message) => {
  let product;
  let text = message.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    // .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you")
    .replace(/my name is \w*/g, "my name is")
    .replace(/this is\w*/g, "this is")
    .replace(/i am \w*/g, "i am")
    .replace(/it is\w*/g, "it is");
  
  console.log("text>>",text)

  if (compare(queries, answers, text)) {
    // Search for exact match in triggers
    product = compare(queries, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  return product;
}
  
const compare = (queriesArray, answersArray, userInput) => {
  let reply;
  let replyFound = false;
  for (let x = 0; x < queriesArray.length; x++) {
    for (let y = 0; y < queriesArray[x].length; y++) {
      if (queriesArray[x][y] === userInput) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

const fetchResponse = (userInput) => {
  return new Promise((response, reject) => {
    try {
      setTimeout(() => {
        response(output(userInput));
      }, 600)
    } catch(error) {
      reject(error);
    }
  })
}

const chatBotService = {
  getResponce(userInput) {
    return fetchResponse(userInput);
  }
};

export default chatBotService;