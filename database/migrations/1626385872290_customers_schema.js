'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('name', 100)
      table.integer('country_id').unsigned()
      table.foreign('country_id').references('id').inTable('countries')
      table.integer('phone_number')
      table.string('email', 255).unique()
      table.string('password', 60)
      table.boolean('deleted').defaultTo('FALSE')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomersSchema
