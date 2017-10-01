export default class DriveFs {
  _config: object

   constructor (config: object) {
     this._config = config
   }

   getFile () {
    return 'file info'
  }
}