import { Router } from "express"
import { getMyProfile, updateMyProfile, setClientLocationPreferences, fetchTopVendors, getAVendorDetails, updateAvatar ,handleDeleteAccount } from "../controllers/user.controller"
import { verifyToken , requireRole} from "../middlewares/auth.middleware"
import {getNearbyVendors} from "../controllers/vendor.controller"
import {fetchTopSellingProducts} from "../controllers/product.controller"
import { uploadSingle3 } from "../middlewares/upload.middleware"

const router = Router()

router.get("/me", verifyToken, getMyProfile)
router.put("/updateProfile", verifyToken, updateMyProfile)
router.put(
  "/location",
  verifyToken,
  requireRole(["CLIENT"]),
  setClientLocationPreferences
)
router.get("/nearby-vendors", getNearbyVendors)
router.get("/topVendors", fetchTopVendors)
router.get("/getVendorDetails", getAVendorDetails)
router.get("/products/top-selling", fetchTopSellingProducts)
router.put("/avatar", verifyToken, uploadSingle3, updateAvatar);
router.delete("/delete", verifyToken, handleDeleteAccount);





export default router
