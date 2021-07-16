'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSpecialtiesSchema extends Schema {
  up () {
    this.create('book_specialties', (table) => {
      table.increments()
      table.integer('book_id').unsigned()
      table.foreign('book_id').references('id').inTable('books')
      table.integer('specialtie_id').unsigned()
      table.foreign('specialtie_id').references('id').inTable('specialties')
      table.timestamps()
    })
  }

  down () {
    this.drop('book_specialties')
  }
}

module.exports = BookSpecialtiesSchema
