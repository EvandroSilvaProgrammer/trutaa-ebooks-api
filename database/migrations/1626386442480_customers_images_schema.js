'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomersImagesSchema extends Schema {
  up () {
    this.create('customers_images', (table) => {
      table.increments()
      table.string('path', 255)
      table.integer('size').unsigned()
      table.string('original_name', 100)
      table.string('extension', 10)
      table.integer('customer_id').unsigned()
      table.foreign('customer_id').references('id').inTable('customers').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers_images')
  }
}

module.exports = CustomersImagesSchema
