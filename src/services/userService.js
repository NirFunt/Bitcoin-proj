import {utilService} from '../services/util.service.js'
export const userService = {
    getUser,
    signup,
    addMove,
  }

  var loggedinUser = null;

  function signup (username) {
      let user = JSON.parse(localStorage.getItem(username));
      if (user) {
        loggedinUser = user;
      } else {
        user = {
          _id: utilService.makeId(),
          username: username,
          email: username + "@gmail.com",
          phone: "00000000",
          coins : 100,
          moves : [],
      }
      localStorage.setItem(username, JSON.stringify(user));
      loggedinUser = user;
      }
         
  }

  function getUser () {
    return loggedinUser;
}

function addMove(contact,amount) {
  loggedinUser.coins -= amount;
  loggedinUser.moves.push({ toId: contact._id, to: contact.name, at: Date.now(), amount: amount });
  localStorage.setItem(loggedinUser.username, JSON.stringify(loggedinUser));
}
