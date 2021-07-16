'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksPriceSchema extends Schema {
  up () {
    this.create('books_prices', (table) => {
      table.increments()
      table.decimal('value', 5,2).defaultTo(1000)
      table.timestamps()
    })
  }

  down () {
    this.drop('books_prices')
  }
}

module.exports = BooksPriceSchema
