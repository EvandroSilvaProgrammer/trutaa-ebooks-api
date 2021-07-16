'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersBooksFavoritesSchema extends Schema {
  up () {
    this.create('customers_books_favorites', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.foreign('book_id').references('id').inTable('books')
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('id').inTable('customers')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers_books_favorites')
  }
}

module.exports = CustomersBooksFavoritesSchema
