Feature: Booking lifecycle

  Background:
    * url baseUrl
    * def bodyRequest = read('classpath:data/request/createRequest.json')

  @api @p0 @regression
  Scenario: API-02/03/04/05 create get update delete
    Given url baseUrl
    And header Content-Type = 'application/json'
    And header Accept = 'application/json'
    And path 'booking'
    And request bodyRequest
    When method post
    Then status 200
    And match response.bookingid == '#number'
    * def id = response.bookingid
    Given path 'booking', id
    And header Content-Type = 'application/json'
    And header Accept = 'application/json'
    When method get
    Then status 200
    And match response.firstname == 'QA'
    Given path 'auth'
    And header Content-Type = 'application/json'
    And header Accept = 'application/json'
    And request { username: '#(username)', password: '#(password)' }
    When method post
    Then status 200
    * def token = response.token
    Given path 'booking', id
    And header Content-Type = 'application/json'
    And header Accept = 'application/json'
    And header Cookie = 'token=' + token
    And request { firstname: 'Updated', lastname: 'Automation', totalprice: 200, depositpaid: true, bookingdates: { checkin: '2026-10-01', checkout: '2026-10-10' }, additionalneeds: 'Dinner' }
    When method put
    Then status 200
    And match response.firstname == 'Updated'
    Given path 'booking', id
    And header Content-Type = 'application/json'
    And header Accept = 'application/json'
    And header Cookie = 'token=' + token
    When method delete
    Then status 201
    Given path 'booking', id
    And header Content-Type = 'application/json'
    And header Accept = 'application/json'
    When method get
    Then status 404

  @api @p1 @regression
  Scenario: API-06 non-existent booking
    Given path 'booking', 99999999
    When method get
    Then status 404

  @api @p1 @regression
  Scenario: API-08 invalid token
    Given path 'booking', 1
    And header Cookie = 'token=invalid-token'
    And request { firstname: 'X', lastname: 'Y', totalprice: 1, depositpaid: true, bookingdates: { checkin: '2026-10-01', checkout: '2026-10-02' } }
    When method put
    Then status 403
