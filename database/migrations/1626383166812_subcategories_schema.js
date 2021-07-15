'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubcategoriesSchema extends Schema {
  up () {
    this.create('subcategories', (table) => {
      table.increments()
      table.string('name', 100)
      table.integer('categorie_id').unsigned()
      table.foreign('categorie_id').references('id').inTable('categories').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('subcategories')
  }
}

module.exports = SubcategoriesSchema
