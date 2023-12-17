const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/") // where to save
  },
  filename: (req, file, cb) => {
    const now = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${now}${ext}`)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext != '.jpg') {
      return cb(new Error("Invalid file type"));
    }
    cb(null, true);
  },
  dest: 'uploads/', // where to save
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB max size
  }
})

router.post("/upload/photo", upload.single('photo'), async (req, res, next) => {
  res.status(200).json({
    success: true
  })
});

module.exports = router;