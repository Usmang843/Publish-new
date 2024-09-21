import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("AppWrite Service -- Create Account Error: ", error);
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("AppWrite Service -- Login Account Error: ", error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppWrite Service -- Get Current User Error: ", error);
    }
    return null; // in case of try-catch error return null
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("AppWrite Service -- Logout Error: ", error);
    }
  }
}

const authService = new AuthService(); // creating object of class

export default authService;
