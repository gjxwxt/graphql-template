const BaseDbService = require("./BaseDbService");

class UserService extends BaseDbService {
  async getUsers(args) {
    return this.getPaginatedResults((db, { username, age }) => {
      let query = db("bd_user").select("*");
      if (username) {
        query = query.where("username", "like", `%${username}%`);
      }
      if (age) {
        query = query.where("age", age);
      }
      return query;
    }, args);
  }

  // 其他用户相关的数据库操作方法...
}

module.exports = UserService;
