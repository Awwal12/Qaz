import { Express } from "express";
import {
 getUser,
 getUserFriends,
 addRemoveFriend,
} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ (GET)
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// UPDATE (PATCH)
router.patch("/:id/friendId", verifyToken, addRemoveFriend);

export default router;