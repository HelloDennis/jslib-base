var expect = require('expect.js');

// js 测试源文件
var mylib = require('../src/index.js');

describe('单元测试', function () {
  this.timeout(1000);

  describe('功能1', function () {
    it('相等', function () {
      expect(mylib.name).to.equal('base');
    });
  });

  describe('功能2', function () {
    it('不相等', function () {
      expect(mylib.name).not.to.equal(1);
    });
  });
});