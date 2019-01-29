Feature: stateful mock server

Background:
* def nextId = call read('increment.js')

Scenario: pathMatches('/greeting')
    * def response = { id: '#(nextId())', content: 'Hello World!' }

