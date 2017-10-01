import DriveS3 from './DriveS3'
import DriveFs from './DriveFs'

const Drivers = {
  s3: DriveS3,
  fs: DriveFs
}

export default class Drive {
  _config: object

  constructor (config: object) {
    this._config = config
  }

  /**
   * Returns the instance of a driver using the
   * configuration defined next to disk.
   * 
   * @param {string} diskName
   * @returns
   * @memberof Drive
   */
  get (diskName: string) {
    const diskConfig = this._config[diskName]
    if (!diskConfig.driver) {
      throw new Error(`Please define the driver on ${diskName} disk`)
    }

    const Driver = Drivers[diskConfig.driver]
    return new Driver(diskConfig)
  }
}