import InvalidUuidError from "../errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";
import {validate as uuidValidate} from 'uuid'

function spyValidatenMethod(){
  return jest.spyOn(UniqueEntityId.prototype as any, 'validate');
}

describe("UniqueEntityId test", () => {
  it('should throw error when uuid is invalid', () => {    
    const validateSpy = spyValidatenMethod();
    expect(() => new UniqueEntityId('invalid-uuid')).toThrowError(InvalidUuidError);
    expect(validateSpy).toHaveBeenCalled();
  })

  it('should create a unique entity id', () => {
    const id = new UniqueEntityId();
    expect(id.value).toBeDefined();
    expect(uuidValidate(id.value)).toBeTruthy();
  })

  it('should accept a uuid passed in constructor', () => {
    const uuid = 'a46489d6-4640-402a-9ee3-f48e2cf53e25'
    const validateSpy = spyValidatenMethod();   
    const valueObject = new UniqueEntityId(uuid);


    expect(valueObject.value).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  })
})