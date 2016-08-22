import { expect } from 'chai';
import { Map } from 'immutable';
import { INITIAL_STATE } from '../../core';
import setCommonPropsInImmutableMap from '../../utils/setCommonPropsInImmutableMap';

describe('setCommonPropsInImmutableMap', () => {
  it('iterates through an Immutable Map and sets a similar property across all inner Maps', () => {
    const setter = setCommonPropsInImmutableMap(shape => { 
      if (shape.has('diameter')) {
        return shape.set('diameter', 200);
      }

      return shape.set('sideLength', 200)
    });

    expect(setter(INITIAL_STATE.get('shapes')).toJS()).to.eql({
      circle: {
        color: 'blue',
        diameter: 200
      },
      square: {
        color: 'yellow',
        sideLength: 200
      },
      triangle: {
        color: 'red',
        sideLength: 200
      }
    });
  });

  it('can be wrapped to provide additional arguments', () => {
    const state = Map({
      a: Map({
        hp: 120,
        ability: 'toilet plunging',
        distanceFromEnemy: 20
      }),
      b: Map({
        hp: 200,
        ability: 'milk chugging',
        distanceFromEnemy: 3
      }),
      c: Map({
        hp: 6,
        ability: 'bass dropping',
        distanceFromEnemy: 12
      })
    });

    const areaOfEffect = (damage) => {
      return setCommonPropsInImmutableMap(player => {
        if (player.get('distanceFromEnemy') > 15) {
          return player;
        }

        return player.set('hp', player.get('hp') - damage);
      });
    };

    expect(areaOfEffect(3)(state).toJS()).to.eql({
      a: {
        hp: 120,
        ability: 'toilet plunging',
        distanceFromEnemy: 20
      },
      b: {
        hp: 197,
        ability: 'milk chugging',
        distanceFromEnemy: 3
      },
      c: {
        hp: 3,
        ability: 'bass dropping',
        distanceFromEnemy: 12
      }
    });
  });
});

