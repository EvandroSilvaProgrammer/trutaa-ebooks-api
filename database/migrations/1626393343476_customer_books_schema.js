'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerBooksSchema extends Schema {
  up () {
    this.create('customer_books', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.foreign('book_id').references('id').inTable('books')
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('id').inTable('customers')
      table.date('subscription_end_date')
      table.decimal('book_price', 5,2)
      table.timestamps()
    })
  }

  down () {
    this.drop('customer_books')
  }
}

module.exports = CustomerBooksSchema
