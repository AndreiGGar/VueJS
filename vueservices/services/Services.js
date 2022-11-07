export default class Services {
  getTry(name) {
    return this[name];
  }
}