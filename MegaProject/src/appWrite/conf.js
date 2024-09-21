// major configuration file for app write
import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite configuration: createPost error", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log(
        "Appwrite service configuration -- updatePost error: ",
        error
      );
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
      return true; // incase of successful delete
    } catch (error) {
      console.log(
        "Appwrite service configuration -- deletePost error: ",
        error
      );
      return false; // incase of error
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service configuration getPost error: ", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
        // , can be used as [Query.equal('status', 'active')]
      );
    } catch (error) {
      console.log("Appwrite configuration getPosts error: ", error);
      return false;
    }
  }
  // file upload service
  
  async uploadFile(file) {
    //actual file in parameter
    try {
      return await this.bucket.createFile(
        config.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite configuration service uploadFile error: ", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite configuration service deleteFile error: ", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appWriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
