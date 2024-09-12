const db = require("../db/db");

class BaseDbService {
  constructor() {
    this.db = db;
  }

  // 分页查询
  async getPaginatedResults(queryBuilder, { pageNum, pageSize, ...filters }) {
    let query = queryBuilder(this.db, filters);

    const countQuery = query.clone().count("* as count").first();
    const totalCount = (await countQuery).count;

    const totalPages = Math.ceil(totalCount / pageSize);
    const offset = (pageNum - 1) * pageSize;

    const rows = await query
      .orderBy("id", "desc")
      .limit(pageSize)
      .offset(offset);

    return {
      edges: rows,
      pageInfo: {
        hasNextPage: pageNum < totalPages,
        hasPreviousPage: pageNum > 1,
        currentPage: pageNum,
        totalPages,
      },
      totalCount,
    };
  }
}

module.exports = BaseDbService;
