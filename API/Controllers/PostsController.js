const Post = require("../models/Post");
const { errorResponse, successResponse } = require("../Utils/HttpAPI");

let controller = {};

controller.GetUserWithMorePost = async (req, res) => {
  try {
    const user = req.user;

    const result = await Post.aggregate([

      { "$group": { 
          "email": "$source", 
          "articleCount": { "$sum": 1 }
      }},

      { "$sort": { "articleCount": -1 } }
])
  console.log(result);

//.find({email: user.email})
    return successResponse(res, { result });
  } catch (error) {
    console.log("Error getting UserWithMorePost: ", error);
    return serverErrorResponse(res, { error: error.toString() });
  }
};
module.exports = { PostController: controller };