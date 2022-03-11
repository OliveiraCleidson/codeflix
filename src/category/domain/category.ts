import {v4 as uuid} from 'uuid'
import UniqueEntityId from '../../@seedwork/domain/unique-entity-id.vo'


  export type CategoryProperties = {
    name: string, 
    is_Active?: boolean,
    description?: string,
    created_at?: Date
  }
  
  export class Category { 
    public readonly id: UniqueEntityId;

    constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
      this.id = id || new UniqueEntityId();
      this.props.description = this.props.description ?? null;
      this.props.is_Active = this.props.is_Active ?? true;
      this.props.created_at = this.props.created_at ?? new Date();
    }
  
    get name(){
      return this.props.name;
    }
  
    get description(){
      return this.props.description;
    }
  
    private set description(value: string){
      this.props.description = value;
    }
  
    get is_Active(){
      return this.props.is_Active;
    }
  
    private set is_Active(value: boolean){
      this.props.is_Active = value;
    }
  
    get created_at(){
      return this.props.created_at;
    }
  }
