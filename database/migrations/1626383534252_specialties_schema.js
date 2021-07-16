'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SpecialtiesSchema extends Schema {
  up () {
    this.create('specialties', (table) => {
      table.increments()
      table.string('name', 100)
      table.integer('subcategorie_id').unsigned()
      table.foreign('subcategorie_id').references('id').inTable('subcategories').onDelete('cascade')
      table.boolean('deleted').defaultTo('FALSE')
      table.timestamps()
    })
  }

  down () {
    this.drop('specialties')
  }
}

module.exports = SpecialtiesSchema
