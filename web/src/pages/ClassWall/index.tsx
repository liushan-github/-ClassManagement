import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';
import Masonry from 'react-masonry-component';
import PageLoading from "@/components/PageLoading";
import {Dispatch} from 'redux';
import {connect} from 'dva';
import {ModelState} from './model';

const {Meta} = Card;
const masonryOptions = {
  transitionDuration: 10
};

interface myProps {
  classWall: ModelState;
  dispatch: Dispatch<any>;
  loading: boolean;
}

@connect(({classWall, loading}: {
  classWall: ModelState, loading: {
    effects: { [key: string]: boolean };
  };
}) => ({
  classWall: classWall,
  loading: loading.effects['classWall/fetch'],
}))
class ClassWall extends Component<myProps> {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'classWall/fetch',
    });
  }

  componentWillUnmount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'classWall/clear',
    });
  }

  render() {
    const {classWall, loading} = this.props;
    const {classWallData} = classWall;
    return (

      loading ? <PageLoading/> : (<Row gutter={16}>
        <Masonry
          options={masonryOptions}
        >
          {
            classWallData.map((element, key) => {
              return (
                <Col xl={6} sm={8} xs={12} key={key}>
                  <Card
                    hoverable
                    style={{marginBottom: 10}}
                    cover={element.src ? <img alt="example" src={element.src}/> : <PageLoading/>}
                  >
                    <Meta title={element.name} description={element.descr}/>
                  </Card>
                </Col>
              )
            })
          }
        </Masonry>
      </Row>)
    )
  }
}

export default ClassWall;
