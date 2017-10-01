import Drive from './Drive'
import * as path from 'path'

const config = {
  staticFiles: {
    driver: 's3',
    s3Key: '',
    s3Secret: '',
    s3Bucket: ''
  },
  
  uploads: {
    driver: 'fs',
    root: path.join(__dirname)
  }
}

const drive = new Drive(config)

console.log(drive.get('staticFiles').getBucket())