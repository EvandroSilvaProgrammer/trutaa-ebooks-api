'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublishersWalletsCashoutSchema extends Schema {
  up () {
    this.create('publishers_wallets_cashouts', (table) => {
      table.increments()
      table.integer('publisher_wallet_id').unsigned()
      table.foreign('publisher_wallet_id').references('id').inTable('publishers_wallets')
      table.decimal('value', 12,2)
      table.string('bank_coordinate', 100)
      table.boolean('approved').defaultTo('FALSE')
      table.timestamps()
    })
  }

  down () {
    this.drop('publishers_wallets_cashouts')
  }
}

module.exports = PublishersWalletsCashoutSchema
