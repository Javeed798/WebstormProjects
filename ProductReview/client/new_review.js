Template.new_review.events({
    'submit .new_review' : function (event) {
        var rating = event.target.rating.value;
        var body = event.target.body.value;

        Products.update({
            _id : this._id
        },{
            $push:{
                reviews : {
                    rating : rating,
                    body : body
                }
            }
        });
        // FlashMessages.sendSuccess("Review added")
        Router.go('/')
        return false;
    }
})
