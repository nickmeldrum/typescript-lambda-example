import { setLogLevelToPristine } from '../libraries/logger';

module.exports = async (): Promise<void> => {
    setLogLevelToPristine();
};
