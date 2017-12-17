import {
  FETCH_MEALS_REQUEST,
  fetchMealsRequest,
  FETCH_MEALS_SUCCESS,
  fetchMealsSuccess,
  FETCH_MEALS_ERROR,
  fetchMealsError,
  fetchMeals,
  UPDATE_MEAL_REQUEST,
  updateMealRequest,
  UPDATE_MEAL_SUCCESS,
  updateMealSuccess,
  UPDATE_MEAL_ERROR,
  updateMealError,
  updateMealServer,
  UPDATE_MEAL_CLIENT,
  updateMealClient
} from '../actions';


describe('fetchMealsRequest', () => {
  const action = fetchMealsRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(FETCH_MEALS_REQUEST);
  });
});

describe('fetchMealsSuccess', () => {
  it('Should return the action', () => {
    const results = {
      meals: [{date: '2017-12-12', breakfast: 'pancakes'}],
      sunday: '2017-12-10'
    };
    const action = fetchMealsSuccess(results);
    expect(action.type).toEqual(FETCH_MEALS_SUCCESS);
    expect(action.results).toEqual(results);
  });
});

describe('fetchMealsError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error'};
    const action = fetchMealsError(error);
    expect(action.type).toEqual(FETCH_MEALS_ERROR);
    expect(action.error).toEqual(error);
  });
});

// describe.only('fetchMeals', () => {
//   it('Should dispatch fetchMealsRequest', () => {
//     const token = '';
//     const sunday = '2017-12-10';
//
//     const results = {
//       meals: [{date: '2017-12-12', breakfast: 'pancakes'}],
//       sunday: '2017-12-10'
//     };
//
//     const dispatch = jest.fn();
//
//     global.getMealsFromDB = jest.fn().mockImplementation(() =>
//       Promise.resolve({
//         ok: true,
//         json() {
//           return result;
//         }
//       })
//     );
//
//     return fetchMeals(token, sunday)(dispatch).then(() => {
//       expect(dispatch).toHaveBeenCalledWith(fetchMealsRequest());
//     });
//   });
// });

describe('updateMealRequest', () => {
  const action = updateMealRequest();
  it('Should return the action', () => {
    expect(action.type).toEqual(UPDATE_MEAL_REQUEST);
  });
});

describe('updateMealSuccess', () => {
  const action = updateMealSuccess();
  it('Should return the action', () => {
    expect(action.type).toEqual(UPDATE_MEAL_SUCCESS);
  });
});

describe('updateMealError', () => {
  it('Should return the action', () => {
    const error = { message: 'Internal server error'};
    const action = updateMealError(error);
    expect(action.type).toEqual(UPDATE_MEAL_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('updateMealClient', () => {
  it('Should return the action', () => {
    const date = '2012-12-20';
    const name = 'lunch';
    const item = 'turkey sub';
    const action = updateMealClient(date, name, item);
    expect(action.type).toEqual(UPDATE_MEAL_CLIENT);
    expect(action.date).toEqual(date);
    expect(action.name).toEqual(name);
    expect(action.item).toEqual(item);
  });
});