'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersWalletsLoadsSchema extends Schema {
  up () {
    this.create('customers_wallets_loads', (table) => {
      table.increments()
      table.integer('customer_wallet_id').unsigned()
      table.foreign('customer_wallet_id').references('id').inTable('customers_wallets')
      table.decimal('value', 12,2)
      table.string('payment_receipt', 255)
      table.boolean('approved').defaultTo('FALSE')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers_wallets_loads')
  }
}

module.exports = CustomersWalletsLoadsSchema
