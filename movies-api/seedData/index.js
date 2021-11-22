import userModel from '../api/users/userModel';
import genresrModel from '../api/genres/genresModel';
import users from './users';
import genres from './Genres';
import dotenv from 'dotenv';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await userModel.collection.insertMany(users);
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadGenres() {
    console.log('load genres Data');
    try {
      await genresrModel.deleteMany();
      await genresrModel.collection.insertMany(genres);
      console.info(`${genres.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genres Data: ${err}`);
    }
  }

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
}