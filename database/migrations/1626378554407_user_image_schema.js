'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageSchema extends Schema {
  up () {
    this.create('user_images', (table) => {
      table.increments()
      table.string('path', 255)
      table.integer('size').unsigned()
      table.string('original_name', 100)
      table.string('extension', 10)
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_images')
  }
}

module.exports = UserImageSchema
