export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: '66f57b800028ad320146',
    platform: 'com.job.poc.uk',
    projectId: '66f57b800028ad320146',
    databaseId: '66f57f9f0021b8c01009',
    candidateUserCollectionId: "66f581a600384e6547ed",
    JobsCollectionId: "66f581d4003b87583cb7"
};
import { Client, Account, ID, Databases } from 'react-native-appwrite';

const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.project)
    .setPlatform('com.job.poc.uk');

const account = new Account(client);
const database = new Databases(client);

// register the user
export const registerUser = async (email: string, password: string) => {
    try {
        const newAccount =  await account.create(ID.unique(), email, password);
        if(!newAccount) {
            throw new Error("User registration failed");
        }
        console.log(newAccount);
        const userDBResponse = await database.createDocument(appwriteConfig.databaseId, appwriteConfig.candidateUserCollectionId, ID.unique(), {
            accountId: newAccount.$id,
            email: email,
        })
        return newAccount;

    } catch (error) {
        throw new Error(error);
    }
}

// login the user
export const loginUser = async (email: string, password: string) => {
    let user = null;
    try {
        console.log(email, password);

        user =  await account.createEmailPasswordSession(email, password);
        console.log('app user', user);
        return user;
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log('finally', user);
        return user;
    }
}

