'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookAuthorsSchema extends Schema {
  up () {
    this.create('book_authors', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.foreign('book_id').references('id').inTable('books')
      table.integer('author_id').unsigned()
      table.foreign('author_id').references('id').inTable('authors')
      table.timestamps()
    })
  }

  down () {
    this.drop('book_authors')
  }
}

module.exports = BookAuthorsSchema
