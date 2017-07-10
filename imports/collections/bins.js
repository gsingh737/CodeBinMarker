/**
 * Created by User on 7/9/2017.
 */
import {Mongo} from 'meteor/mongo';
Meteor.methods({
    'bins.insert': function(){
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            owner: this.userId
        });
    }
})
export const Bins = new Mongo.Collections('bins');

