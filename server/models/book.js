const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

const bookSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	author:{
		type: String,
		required: true
	},
	review:{
		type: String,
		default: 'n/a'
	},
	pages:{
		type: String,
		default: 'n/a'
	},
	rating:{
		type: Number,
		required:true,
		min:0,
		max:5
	},
	price:{
		type:String,
		default: 'n/a'
	},
	ownerId:{
		type: String,
		required: true
	}
},{timestamps: true})


const Book = mongoose.model('Book', bookSchema);

module.exports = { Book }


