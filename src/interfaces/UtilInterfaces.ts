import express from "express";
import { Document, Schema } from "mongoose";
import { AUser } from "./UserInterfaces";


interface AuthRequest extends express.Request {
  user?: AUser & Document;
}

interface AImage {
  url: string;
  public_id: string;
}

interface QueryParamsData {
  search?: string;
  pageNo?: string | number;
  pageSize?: string | number;
}

export {
  AuthRequest,
  AImage,
  QueryParamsData,
};
