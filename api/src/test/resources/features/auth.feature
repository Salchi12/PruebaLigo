Feature: Authentication

  Background:
    * url baseUrl

  @api @p0 @smoke @regression
  Scenario: API-01 generate token
    Given url baseUrl
    And path 'auth'
    And request { username: '#(username)', password: '#(password)' }
    When method post
    Then status 200
    And match response.token == '#string'
