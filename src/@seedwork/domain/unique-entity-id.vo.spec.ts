import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";
import {validate as uuidValidate} from 'uuid'

describe("UniqueEntityId Unit Tests", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
  
  it('should throw error when uuid is invalid', () => {    
    expect(() => new UniqueEntityId('invalid-uuid')).toThrowError(InvalidUuidError);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })

  it('should create a unique entity id', () => {
    const id = new UniqueEntityId();
    expect(id.value).toBeDefined();
    expect(uuidValidate(id.value)).toBeTruthy();
  })

  it('should accept a uuid passed in constructor', () => {
    const uuid = 'a46489d6-4640-402a-9ee3-f48e2cf53e25'
    const valueObject = new UniqueEntityId(uuid);


    expect(valueObject.value).toBe(uuid);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })
})