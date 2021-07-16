'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookCategoriesSchema extends Schema {
  up () {
    this.create('book_categories', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.foreign('book_id').references('id').inTable('books')
      table.integer('categorie_id').unsigned()
      table.foreign('categorie_id').references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('book_categories')
  }
}

module.exports = BookCategoriesSchema
