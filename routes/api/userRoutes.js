const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/courses/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/courses/:userId/friends
router.route("/:userId/friends").put(addFriend);

router.route("/:userId/friends/:friendsId").delete(deleteFriend);

module.exports = router;
