'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('slug')
      table.string('title')
      table.text('description')
      table.string('isbn', 17).unique()
      table.integer('publisher_id').unsigned()
      table.foreign('publisher_id').references('id').inTable('publishers')
      table.string('format', 20)
      table.date('release_date')
      table.integer('language_id').unsigned()
      table.foreign('language_id').references('id').inTable('languages')
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
