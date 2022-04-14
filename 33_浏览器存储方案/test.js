class CustomStorage {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
    this.length = this.getLength()
  }
  setItem(key, value) {
    if (value) this.storage.setItem(key, JSON.stringify(value));
  }
  getItem(key){
    let value = this.storage.getItem(key)
    if(value){
      value = JSON.parse(value)
      return value
    }
  }
  key(key){
    let value = this.storage.key(key)
    if(value){
      value = JSON.parse(value)
      return value
    }
  }
  remove(key){
    this.storage.remove(key)
  }
  clear(){
    this.storage.clear()
  }
  getLength(){
    return this.storage.length
  }
}


const localCache = new CustomStorage()
const sessionCache = new CustomStorage(false)

// export{
//   localCache,
//   sessionCache
// }

localCache.setItem('name','zhang')

console.log(localCache.length);