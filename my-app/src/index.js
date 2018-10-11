import React from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (

        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
                <Dropdown.Menu>
                  <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?2590945415893160629' centered />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className='mid'>
          <Container>
        <Menu className = 'ui borderless compact middle menu'>

            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>KIDS</Menu.Item>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SEARCH</Menu.Item>

        </Menu>
  </Container>
        </div>

    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src='https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?2590945415893160629' fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className='k'>
        <Grid padded className = 'k' divided='vertically'>
          <Grid.Row padded className ='pad' container columns={3} >
            <Grid.Column padded><h5>NAVIGATION</h5><hr/><List>
              <List.Item>About us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
            </List>
            </Grid.Column>
            <Grid.Column padded><h5>MAIN MENU</h5><hr/><List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List></Grid.Column>
            <Grid.Column padded><h5>CONNECT</h5><hr/><List>
              <List.Item>Sign up for the latest updates</List.Item>
              <List.Item><Input focus placeholder='Enter email address' /><Button className='black' size='small'>Join</Button></List.Item>
            </List></Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
