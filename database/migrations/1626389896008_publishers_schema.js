'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublishersSchema extends Schema {
  up () {
    this.create('publishers', (table) => {
      table.increments()
      table.string('name', 100)
      table.string('avatar', 244)
      table.string('email', 255).unique()
      table.integer('country_id').unsigned()
      table.foreign('country_id').references('id').inTable('countries')
      table.integer('phone_number')
      table.string('bank_coordinate', 100)
      table.text('general_description')
      table.string('password', 60)
      table.boolean('deleted').defaultTo('FALSE')
      table.boolean('approved').defaultTo('FALSE')
      table.timestamps()
    })
  }

  down () {
    this.drop('publishers')
  }
}

module.exports = PublishersSchema
