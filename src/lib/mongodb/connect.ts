import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI || "";

if (!mongoUri) {
  throw new Error("MONGODB_URI is not configured.");
}

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cached =
  globalMongoose.mongooseCache ??
  (globalMongoose.mongooseCache = { connection: null, promise: null });

export async function connectToDatabase() {
  if (cached.connection?.connection.readyState === 1) {
    return cached.connection;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongoUri, {
        dbName: process.env.MONGODB_NAME || "portfolio-v2",
        serverSelectionTimeoutMS: 10000,
        maxPoolSize: 10,
      })
      .catch((error) => {
        cached.promise = null;
        cached.connection = null;
        throw error;
      });
  }

  cached.connection = await cached.promise;
  return cached.connection;
}
