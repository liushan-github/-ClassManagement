import React, {Component} from 'react';
import {Card, Row, Col, Modal} from 'antd';
import Masonry from 'react-masonry-component';
import {Dispatch} from 'redux';
import {connect} from 'dva';
import PageLoading from '@/components/PageLoading';
import {ModelState} from './model';
import style from './index.less';

const {Meta} = Card;
const masonryOptions = {
  transitionDuration: 10,
};

// eslint-disable-next-line @typescript-eslint/class-name-casing
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
  classWall,
  loading: loading.effects['classWall/fetch'],
}))
class ClassWall extends Component<myProps> {
  state = {
    visible: false, // 模态框显示
    src: 'http://liush.top/image/classwall/class.png',
  }

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

  // getSrc=()=>{
  //   const {key}=this.state;
  //   const {classWall} = this.props;
  //   const {classWallData} = classWall;
  //   console.log(classWallData[key]);
  //   // return classWallData[key]&&classWallData[key].src;
  // }
  showModal = (i: number) => {
    const {classWall} = this.props;
    const {classWallData} = classWall;
    this.setState({
      visible: true,
      src: classWallData[i].src,
    });
  };

  handleOk = (e: Event) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e: Event) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {classWall, loading} = this.props;
    const {classWallData} = classWall;
    const {src} = this.state;
    return (

      loading ? <PageLoading/> : (<Row gutter={16}>
        <Masonry
          options={masonryOptions}
        >
          {
            classWallData && classWallData.map((element, key) => (
                <Col xl={6} sm={8} xs={12} key={key}>
                  <Card
                    hoverable
                    onClick={() => this.showModal(key)}
                    style={{marginBottom: 10}}
                    cover={element.src ? <img alt="example" src={element.src}/> : <PageLoading/>}
                  >
                    <Meta title={element.name} description={element.descr}/>
                  </Card>

                </Col>
            ))
          }
          <Modal
            width="auto"
            mask
            keyboard
            centered
            wrapClassName={style.modalWarps}
            className={style.antModal}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <img alt="example" src={src} style={{width: 500}}/>
          </Modal>
        </Masonry>
      </Row>)
    )
  }
}

export default ClassWall;
