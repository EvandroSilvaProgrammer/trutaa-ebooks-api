'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookImagesSchema extends Schema {
  up () {
    this.create('book_images', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.foreign('book_id').references('id').inTable('books')
      table.string('image')
      table.timestamps()
    })
  }

  down () {
    this.drop('book_images')
  }
}

module.exports = BookImagesSchema
