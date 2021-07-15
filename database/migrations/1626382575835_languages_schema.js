'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LanguagesSchema extends Schema {
  up () {
    this.create('languages', (table) => {
      table.increments()
      table.string('name', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('languages')
  }
}

module.exports = LanguagesSchema
