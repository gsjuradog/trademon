const getUser = async (req, res) => {
  try {
    console.log('GET');
    res.status(200).send('getUser');
  } catch (e) {
    console.log('GET ERROR', err);
    res.status(500).send('GET ERROR');
  }
};

const postUser = async (req, res) => {
  try {
    console.log('POST');
    res.status(200).send('postUser');
  } catch (e) {}
  console.log('POST ERROR', err);
  res.status(500).send('POST ERROR');
};

module.exports = {
  getUser,
  postUser,
};
