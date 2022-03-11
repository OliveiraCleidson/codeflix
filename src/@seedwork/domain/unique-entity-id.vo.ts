import {v4 as uuid, validate as uuidValidate} from 'uuid'
import InvalidUuidError from '../errors/invalid-uuid.error';

export default class UniqueEntityId {
  constructor(public readonly value?:string){
    this.value = this.value || uuid();
    this.validate();
  }

  private validate(){
    const isValid = uuidValidate(this.value);
    if(!isValid){
      throw new InvalidUuidError();
    }
  }
}