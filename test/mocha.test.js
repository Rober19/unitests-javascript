'use strict'

const chai = require('chai')
const functions = require('../functions');

const getAllDates = functions.getAllDates();
let date_moment = 1530853200;
let getDate = functions.getDate(date_moment);

describe('Unit tests using Mocha', () => {

  it('getAllDatesTest', () => {    
    chai.assert.lengthOf(getAllDates, 42, 'DateList`s value has a length of 3');

  })
  it('getDateTest', () => {  
    chai.expect(getAllDates.length).to.equal(42);
    chai.expect(getDate.length).to.equal(1); 
    chai.expect(getDate[0].moment).to.equal(date_moment);
  })

})