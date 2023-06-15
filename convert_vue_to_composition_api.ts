import { transformPath } from 'vue-o2c';
import fs from 'fs';

const path = 'C:\\_work_projects\\devextreme-demos\\JSDemos\\Demos\\Common\\EditorsOverview\\Vue\\';
const filename = 'App.vue';
const s1 = transformPath(path + filename);

fs.writeFile(path + filename.replace(/\./, '.composition.'), s1.transformed, (err) => {
  if (err) throw err;
  console.log('Строка успешно записана в файл!');
});
