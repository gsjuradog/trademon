const testObj = {
  username: 'Pikachu',
  trainerID: 4654654,
  trainerName: 'Bernie',
  mtgoID: 'ghfghfghgh',
  mtgoName: 'ghfghdfhgfghh',
  latitude: 46546,
  longitude: 4546,
  buyerRating: 0,
  numBuyRatings: 0,
  sellerRating: 0,
  numSellRatings: 0,
  numOfStrikes: 0,
};

const Query = {
  user: (root, args, context) => {
    console.log('user');
    return testObj;
  },
};

const Mutation = {
  editUser: (root, args, context) => {
    console.log('edit user');
    return 'edit user';
  },
};

module.exports = { Query, Mutation };
