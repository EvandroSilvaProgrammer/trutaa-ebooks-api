'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublishersWalletsSchema extends Schema {
  up () {
    this.create('publishers_wallets', (table) => {
      table.increments()
      table.decimal('balance', 12,2)
      table.integer('publisher_id').unsigned()
      table.foreign('publisher_id').references('id').inTable('publishers')
      table.timestamps()
    })
  }

  down () {
    this.drop('publishers_wallets')
  }
}

module.exports = PublishersWalletsSchema
