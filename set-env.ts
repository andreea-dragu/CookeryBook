import { writeFile } from 'fs';
import 'dotenv/config'
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// `environment.ts` file structure
const envConfigFile = `export const environment = {
    username: '${process.env.username}',
    password: '${process.env.password}',
};
`;
writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
   }
});
