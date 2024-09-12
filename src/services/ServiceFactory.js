const UserService = require("./UserService");
// 导入其他服务类，例如：
// const ProductService = require('./ProductService');
// const OrderService = require('./OrderService');

class ServiceFactory {
  constructor() {
    this.services = {};
    this.serviceClasses = {
      user: UserService,
      // product: ProductService,
      // order: OrderService,
      // 添加更多服务...
    };
  }

  getService(serviceName) {
    if (!this.services[serviceName]) {
      const ServiceClass = this.serviceClasses[serviceName];
      if (!ServiceClass) {
        throw new Error(`Service ${serviceName} not found`);
      }
      this.services[serviceName] = new ServiceClass();
    }
    return this.services[serviceName];
  }

  // 为了保持向后兼容性，可以保留特定的获取方法
  getUserService() {
    return this.getService("user");
  }

  // 其他服务获取方法...
}

module.exports = new ServiceFactory();
