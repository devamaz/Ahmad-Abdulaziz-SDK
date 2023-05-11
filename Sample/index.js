const LOTR = require('../index');
const lotr = new LOTR(process.env.ACCESS_KEY);

//get  quote
async function getQuote() {
  try {
    const rep = await lotr.Quote.getAllQuote('?limit=3');
    return rep;
  } catch (error) {
    console.log(error);
  }
}

const getData = async () => {
  let data  = await getQuote();
  console.log('data :', data);
};

getData();