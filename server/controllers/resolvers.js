const Query = {
  user: (root, args, context) => {
    console.log('user');
    return 'user';
  }
}

const Mutation = {
  editUser: (root, args, context) => {
    console.log('edit user');
    return 'edit user';
  }
}

module.exports = { Query, Mutation };