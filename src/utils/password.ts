import bcrypt from 'bcrypt';

export const hasher = async (password: string): Promise<string> => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
};

export const comparer = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error('Error comparing password:', error);
    throw error;
  }
};
