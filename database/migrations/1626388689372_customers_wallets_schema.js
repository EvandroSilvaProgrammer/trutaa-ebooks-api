'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersWalletsSchema extends Schema {
  up () {
    this.create('customers_wallets', (table) => {
      table.increments()
      table.decimal('balance', 12,2)
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('id').inTable('customers')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers_wallets')
  }
}

module.exports = CustomersWalletsSchema
