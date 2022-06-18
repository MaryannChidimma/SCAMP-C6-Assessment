import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { BadRequestError } from "../../lib/appError";

//adjust how files are stored
const storage = multer.diskStorage({
  destination: function (req: express.Request, file: any, cb: any) {
    let dir = process.cwd();
    //Sets destination for fileType
    const imageFormates = [".jpeg", ".png", ".jpg"];
    const musicFormat = [".mp3"];

    if (imageFormates.includes(path.extname(file.originalname))) {
      dir = dir + `/uploads/images`;
    } else if (musicFormat.includes(path.extname(file.originalname))) {
      dir = dir + `/uploads/music`;
    } else {
      dir = dir + `/uploads/otherFiles`;
    }

    fs.mkdir(dir, { recursive: true }, (err) => cb(err, dir));
  },
  filename: function (req: express.Request, file: any, callback: any) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const fileFilter = function (req: express.Request, file: any, callback: any) {
  const allFileFormat = [".jpeg", ".png", ".jpg", ".xlsx"];

  const fileExtCheck = allFileFormat.includes(path.extname(file.originalname).toLowerCase());

  if (!fileExtCheck && file.originalname !== "blob") {
    callback(
      new BadRequestError(
        "Image upload failed. Supports only .jpeg, .png, .jpg, .xlsx or blob"
      ),
      false
    );
    callback(null, true);
  } else {
    callback(null, true);
  }
};

const fileSize = function (): number {
  const size = 1024 * 1024 * 250;
  return size;
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: fileSize(),
  },
  fileFilter: fileFilter,
});

const deleteFileFromServer = (filePath: string) => {
  fs.unlinkSync(filePath);
};

export default upload;

export { deleteFileFromServer };