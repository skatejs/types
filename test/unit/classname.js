import classname from '../../src/classname';
import skate from 'skatejs';
import safeComponentName from '../lib/safe-component-name';

describe('attributes', function () {
  it('initialises classes', function () {
    let componentName = safeComponentName();
    skate(componentName, {
      created: function (el) {
        el.created = true;
      },
      type: classname
    });

    let div = document.createElement('div');
    div.classList.add(componentName);
    skate.init(div);

    expect(div.created).to.equal(true);
  });

  it('initialises the first of two classes only', function () {
    let componentName1 = safeComponentName();
    let componentName2 = safeComponentName();

    skate(componentName1, {
      created: function (el) {
        el.component1Created = true;
      },
      type: classname
    });

    skate(componentName2, {
      created: function (el) {
        el.component2Created = true;
      },
      type: classname
    });

    let div = document.createElement('div');
    div.classList.add(componentName1);
    div.classList.add(componentName2);
    skate.init(div);

    expect(div.component1Created).to.equal(true);
    expect(div.component2Created).to.equal(undefined);
  });

  it('does not initialises mismatched classes', function () {
    skate(safeComponentName(), {
      created: function (el) {
        el.created = true;
      },
      type: classname
    });

    let div = document.createElement('div');
    div.classList.add('class-with-no-component');
    skate.init(div);

    expect(div.created).to.equal(undefined);
  });
});
