import attribute from '../../src/attribute';
import skate from 'skatejs';
import safeComponentName from '../lib/safe-component-name';

describe('attributes', function () {
  it('initialises attributes', function () {
    let componentName = safeComponentName();
    skate(componentName, {
      created: function (el) {
        el.created = true;
      },
      type: attribute
    });

    let div = document.createElement('div');
    div.setAttribute(componentName, '');
    skate.init(div);

    expect(div.created).to.equal(true);
  });

  it('initialises the first of two attributes only', function () {
    let componentName1 = safeComponentName();
    let componentName2 = safeComponentName();

    skate(componentName1, {
      created: function (el) {
        el.component1Created = true;
      },
      type: attribute
    });

    skate(componentName2, {
      created: function (el) {
        el.component2Created = true;
      },
      type: attribute
    });

    let div = document.createElement('div');
    div.setAttribute(componentName1, '');
    div.setAttribute(componentName2, '');
    skate.init(div);

    expect(div.component1Created).to.equal(true);
    expect(div.component2Created).to.equal(undefined);
  });

  it('does not initialises mismatched attributes', function () {
    skate(safeComponentName(), {
      created: function (el) {
        el.created = true;
      },
      type: attribute
    });

    let div = document.createElement('div');
    div.setAttribute('attribute-with-no-component', '');
    skate.init(div);

    expect(div.created).to.equal(undefined);
  });
});
