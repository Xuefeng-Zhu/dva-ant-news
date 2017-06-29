import React from 'react';
import {
  ListView,
  WhiteSpace,
  Card
} from 'antd-mobile';
import ArticleCard from './ArticleCard.jsx';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(props.articles)
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    if (nextProps.articles !== this.props.articles) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.articles)
      });
    }
  }

  render() {
    const separator = (sectionID, rowID) => (
      <WhiteSpace
        key={`${sectionID}-${rowID}`}
        size="sm"
        style={{
          backgroundColor: '#F5F5F9'
        }}
      />
    );

    const row = (rowData, sectionID, rowID) => {
      return (
        <ArticleCard key={rowID} article={rowData} />
      );
    };

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <span>最新发布</span>}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={200}
      />
    );
  }
};
