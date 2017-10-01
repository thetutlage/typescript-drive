export default class DriveS3 {
  _config: object

   constructor (config: object) {
     this._config = config
   }

   getBucket () {
    return 'bucket info'
  }
}