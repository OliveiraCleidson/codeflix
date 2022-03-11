
import {omit} from 'lodash';
import { Category, CategoryProperties } from './category';
import {v4 as uuid, validate as validateUuid} from 'uuid'
import UniqueEntityId from '@seedwork/domain/unique-entity-id.vo';

describe("Category Unit Tests", () => {
  it("constructor of category", () => {
    let category = new Category({name: "Movie"});
    const props = omit(category.props, ['created_at']);
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_Active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    const created_at = new Date();
    category = new Category({
      name: "Movie", 
      description: "Description", 
      created_at, 
      is_Active: false
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Description",
      is_Active: false,
      created_at
    });

    category = new Category({
      name: "Movie", 
      description: "Description"
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "Description"
    });

    category = new Category({
      name: "Movie", 
      is_Active: true
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_Active: true
    });
    
  })

  test("getter of name prop", () => {
    const category = new Category({name: "Movie"});
    expect(category.name).toBe("Movie");
  })

  test('id field', () => {
    type CategoryData = {props: CategoryProperties, id?: UniqueEntityId}
    const data : CategoryData[]= [
      {props: {name: "Movie"}, id: new UniqueEntityId()},
      {props: {name: "Movie"}, id: undefined},
      {props: {name: "Movie"}, id: null},
    ]

    data.forEach((value) => {
      const category = new Category(value.props, value.id);
      expect(category.id).not.toBeNull();
      expect(validateUuid(category.id as any)).toBeTruthy();
    })
  })

  test("getter and setter of description prop", () => {
    let category = new Category({
      name: "Movie",
      description: "Some description"
    });

    expect(category.description).toBe("Some description");

    category = new Category({
      name: "Movie"
    });

    expect(category.description).toBeNull();

    category["description"] = "other description"
    expect(category.description).toBe("other description");
  })

  test("getter and setter of active prop", () => {
    let category = new Category({
      name: "Movie",
    });

    expect(category.is_Active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_Active: false
    });

    expect(category.is_Active).toBeFalsy();

    category = new Category({
      name: "Movie",
      is_Active: false
    });
    category["is_Active"] = true;
    expect(category.is_Active).toBeTruthy();
  })
})