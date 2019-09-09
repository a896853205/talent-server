import path from 'path'

export let pathHelper = {};

pathHelper.generateReadPath = (fileName) => {
  return path.join(__dirname, '../../resources/excel-model/' + fileName + '.xlsx')
}

pathHelper.generateWritePath = (userId) => {
  return path.join(__dirname, '../../resources/excel-generate/' + userId + '.xlsx')
}

pathHelper.downLoadPath = () => path.join(__dirname, '../../resources/excel-generate/')

pathHelper.downLoadFaqPath = () => path.join(__dirname, '../../resources/excel-model/')

