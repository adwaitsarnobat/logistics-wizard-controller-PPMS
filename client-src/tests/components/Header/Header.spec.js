import React from 'react';
import { Header } from 'components/Header/Header';
import classes from 'components/Header/Header.scss';
import { IndexLink, Link } from 'react-router';
import { shallow } from 'enzyme';
import AppBar from 'material-ui/AppBar';

describe('(Component) Header', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<Header />);
  });

  it('Contains an AppBar component', () => {
    const welcome = _wrapper.contains(
      <AppBar />
    );
    expect(welcome).to.exist;
    // expect(welcome.text()).to.match(/React Redux Starter Kit/);
  });

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName={classes.activeRoute} to="/">
          Home
        </IndexLink>
      )).to.be.true;
    });

    it('Should render a Link to Counter route', () => {
      expect(_wrapper.contains(
        <Link activeClassName={classes.activeRoute} to="/counter">
          Counter
        </Link>
      )).to.be.true;
    });
  });
});
