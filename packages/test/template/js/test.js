var expect = require('expect.js');

// js 测试源文件
var mylib = require('../src/index.js');

describe('单元测试', function () {
  this.timeout(1000);

  describe('测试name', function () {
    it('name应该为base', function () {
      expect(mylib.name).to.equal('base');
    });
  });

  describe('测试greeter', function () {
    it('greeter输出结果正确', function () {
      expect(mylib.greeter('Tom')).to.equal('Hello, Tom');
    });
  });
});