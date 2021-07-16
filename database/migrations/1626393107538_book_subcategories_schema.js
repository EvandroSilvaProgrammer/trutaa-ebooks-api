'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSubcategoriesSchema extends Schema {
  up () {
    this.create('book_subcategories', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.foreign('book_id').references('id').inTable('books')
      table.integer('subcategorie_id').unsigned()
      table.foreign('subcategorie_id').references('id').inTable('subcategories')
      table.timestamps()
    })
  }

  down () {
    this.drop('book_subcategories')
  }
}

module.exports = BookSubcategoriesSchema
