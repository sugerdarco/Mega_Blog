import { Client, Account, ID } from 'appwrite';
import conf from "../conf/conf.js";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
          .setEndpoint(conf.appWriteUrl)
          .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            return userAccount ? await this.login({ email, password }) : userAccount;
        } catch (error) {
            console.log("Appwrite service :: createAccount :: error", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSession("current");
            return true;
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            return false;
        }
    }
}

const authService = new AuthService();
export default authService;
