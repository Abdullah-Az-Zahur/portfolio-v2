import mongoose from "mongoose";

const globalWithMongoose = global as typeof globalThis & {
  mongoose?: {
    connection: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { connection: null, promise: null };
}

export const connectToDatabase = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (globalWithMongoose.mongoose?.connection) {
    return globalWithMongoose.mongoose.connection;
  }

  if (!globalWithMongoose.mongoose?.promise) {
    globalWithMongoose.mongoose!.promise = mongoose.connect(MONGODB_URI, {
      dbName: "portfolio-v2",
    });
  }

  globalWithMongoose.mongoose!.connection =
    await globalWithMongoose.mongoose!.promise;
  return globalWithMongoose.mongoose!.connection;
};
