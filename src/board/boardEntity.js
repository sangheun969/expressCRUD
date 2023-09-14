const today = new Date();
const year = today.getFullYear();
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const day = ("0" + today.getDate()).slice(-2);
const dateString = year + "년" + month + "월" + day + "일";

class Board {
  id;
  title;
  content;
  created_at;
  hi;
  constructor(id, title, writer, content) {
    this.id = id;
    this.title = title;
    this.writer = writer;
    this.content = content;
    this.created_at = dateString;
    this.hit = 0;
  }
}

module.exports = Board;
