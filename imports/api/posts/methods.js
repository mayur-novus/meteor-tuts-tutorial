import {Meteor} from 'meteor/meteor'
import {Posts} from '/db';

Meteor.methods({
	'post.create'(post) {
		post.createdAt = new Date();
		post.views = 0;
		Posts.insert(post);
	},

    'post.list' () {
        return Posts.find().fetch();
    },

	'post.edit'(_id, post) {
		Posts.update(_id, {
			$set: {
				title: post.title,
				description: post.description,
				type: post.type
			}
		});
	},

	'post.view'(_id, post) {
		Posts.update(_id, {
			$set: {
				views: parseInt(post.views || 0) + 1
			}
		});
	},

    'post.remove' (_id){
        Posts.remove(_id);
    },

    'post.get' (_id) {
        return Posts.findOne(_id);
    },

	'post.getAndView'(_id) {
		let post = Posts.findOne(_id);
		post.views = parseInt(post.views || 0) + 1;
		Posts.update(_id, {
			$set: {
				views: parseInt(post.views)
			}
		});
		return post;
	}
});