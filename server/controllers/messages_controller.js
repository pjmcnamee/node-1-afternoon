const messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time, username } = req.body;
    const newMessage = {
	  id,
	  username,
      text,
      time
    };
    messages.push(newMessage);
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {
    console.log("UDPATE", req.body);
    const { text, time, username } = req.body;
    const { id } = req.params;
    let index = null;
    messages.forEach((book, i) => {
      if (book.id === id * 1) {
        index = i;
      }
      messages[index] = {
		id: messages[index].id,
		username: username || messages[index].username,
        text: text || messages[index].text,
        time: time || messages[index].time
      };
    });
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    const id = req.params;
    let index = null;
    messages.forEach((book, i) => {
      index = i;
    });
    messages.splice(index, 1);
    res.status(200).send(messages);
  }
};
