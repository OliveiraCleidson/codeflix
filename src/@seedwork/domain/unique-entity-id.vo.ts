import {v4 as uuid, validate as uuidValidate} from 'uuid'
import InvalidUuidError from '../errors/invalid-uuid.error';

export default class UniqueEntityId {
  constructor(public readonly id?:string){
    this.id = this.id || uuid();
  }

  private validate(){
    const isValid = uuidValidate(this.id);
    if(!isValid){
      throw new InvalidUuidError();
    }
  }
}