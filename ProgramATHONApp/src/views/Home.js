import React, { Component } from 'react';
import {
  Container,
  List,
  ListItem,
  Text,
  Right
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Home extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
        <PullDownContainer onRefresh={() => this.props.refreshStaticData(this.props.token)}>
          <List>

          </List>
        </PullDownContainer>

        <Menu/>
      </Container>
    );
  }
}

const VIEW_MORE_COLOR = '#ACACAC';
const styles = {

};
//
// const mapStateToProps = state => {
//   return {
//     token: state.db.token,
//     touristDestinations: state.db.staticData.touristDestinations,
//     turisticInterestList: state.db.staticData.touristicInterests,
//     ticoStopList: state.db.staticData.ticoStops,
//     provinces: state.db.staticData.provinces
//   };
// };

export default connect(null, null)(Home);
