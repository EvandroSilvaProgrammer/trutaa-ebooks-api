'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersWalletsTransfersSchema extends Schema {
  up () {
    this.create('customers_wallets_transfers', (table) => {
      table.increments()
      table.decimal('value', 12,2)
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('id').inTable('customers')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers_wallets_transfers')
  }
}

module.exports = CustomersWalletsTransfersSchema
