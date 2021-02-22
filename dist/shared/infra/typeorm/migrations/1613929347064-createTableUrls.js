"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class createTableUrls1613929347064 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'urls',
      columns: [{
        name: 'id',
        type: 'uuid',
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()'
      }, {
        name: 'url',
        type: 'varchar'
      }, {
        name: 'url_short',
        type: 'varchar',
        isUnique: true
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable('urls');
  }

}

exports.default = createTableUrls1613929347064;