import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const Migrations = new Mongo.Collection('migrations')
const Countries = new Mongo.Collection('countries')


import countries from './data/countries.js'
import countriesWithEmojis from './data/countriesWithEmojis.js'

Meteor.startup(() => {
  if (!Migrations.findOne({name: 'PopulateCountries-6'})) {
    console.log('log', 'info' ,'//----------------------------------------------------------------------//')
    console.log('log', 'info' ,'//-------------//    Populate Countries    //-----------//')
    console.log('log', 'info' ,'//----------------------------------------------------------------------//')

    countries.forEach((country) => {
      let countryWithEmoji = countriesWithEmojis.find((element) => {
        return element.code === country.code;
      });
      if (countryWithEmoji) {
        delete countryWithEmoji.title
        countryWithEmoji.phoneCode =country.phone_code
        Countries.insert(countryWithEmoji)
      } else {
        console.log('Country not found')
        console.log(country);
        console.log(countryWithEmoji);
      }


    })

    Migrations.insert({name: 'PopulateCountries-6'})

    console.log('log', 'info' ,'//----------------------------------------------------------------------//')
    console.log('log', 'info' ,'//------------//     Populate Countries     //-----------//')
    console.log('log', 'info' ,'//----------------------------------------------------------------------//')
  }
})

