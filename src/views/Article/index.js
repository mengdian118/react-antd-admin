import React, { Component } from 'react'
import { Card, Button, Table, Tag, Tooltip, Modal, Typography, message } from 'antd'
import { getArticles, deleteAticle} from '../../requests'
import moment from 'moment'
import XLSX from 'xlsx'
import { ExclamationCircleOutlined } from '@ant-design/icons';
// const { confirm } = Modal;
const { Text } = Typography;
const tableTh = {
  id: 'id',
  title: '标题',
  author: '作者',
  createAt: '创建时间',
  amount: '阅读量'
}
  
export default class Article extends Component {
  constructor(){
    super()
    this.state = {
       dataSource : [],
       columns : [],
       total: 0,
       isLoading: false,
       offset: 0,
       limit: 10,
       deleteArtModalContent: null,
       isShowArticleModal:false,
       ClickSpaceHide: false,
       deleteArtModalLoading: false,
       currentDelArticleId: null
    }
  }
  showModalArticle = (record) => {
        // confirm({
        // title:  <Typography>确定要删除<Text type="warning">{record.title}</Text>吗？</Typography>,
        //   icon: <ExclamationCircleOutlined />,
        //   content: <Typography>当单击<Text type="danger">残忍删除</Text>按钮时，此对话框将在1秒后关闭</Typography>,
        //   okText:'残忍删除',
        //   cancelText:'没下定决心删除',
        //   onOk() {
        //   },
        //   onCancel(){
            
        //   }
        // });
        this.setState({
          isShowArticleModal:true,
          currentDelArticleId: record.id,
          deleteArtModalContent:  <Typography>确定要删除<Text type="warning">&nbsp;{record.title}&nbsp;</Text>吗？</Typography>
        })
  }
  hideDelModal = () => {
        this.setState({
          isShowArticleModal:false,
          deleteArtModalLoading:false
        })
  }
  deleteArticleOk = () => {
        this.setState({
          deleteArtModalLoading: true
        })
        deleteAticle(this.state.currentDelArticleId)
        .then( res => {
          message.success(res.msg)
          this.setState({
            offset: 0
          },()=>{
            this.getData()
          })
        })
        .finally(() => {
            this.setState({
              deleteArtModalLoading: false,
              isShowArticleModal:false
            })

        })
  }
  createColumns = (columnKeys) => {
   const columns = columnKeys.map(item => {
          if(item === 'amount'){
              return {
                title: tableTh[item],
                key: item,
                render: (text,record) => {
                return <Tag color={record.amount > 220 ? 'red': 'green'}>
                            <Tooltip title={record.amount > 220 ? '> 220': '< 220'}>{record.amount}</Tooltip>
                       </Tag>
                }
              }
          }
          if(item === 'createAt'){
              return {
                title: tableTh[item],
                key: item,
                render: (text,record) => {
                  const {createAt} = record
                  return moment(createAt).format('YYYY-MM-DD HH:mm:ss')
                }
              }
          }
          if(item === 'author'){
                return {
                  title: tableTh[item],
                  key: item,
                  render: (text,record) => {
                  return <Tag color={record.amount > 220 ? 'red': 'green'}>
                              <Tooltip title={record.amount > 220 ? '热门作者': '普通作者'}>{record.author}</Tooltip>
                        </Tag>
                  }
                }
          }
          return {
            title: tableTh[item],
            dataIndex: item,
            key: item
            
          }
      })
      columns.push({
        title: '操作',
        key: 'action',
        render: (record) => {
          return <div>
                        <Button type="primary" size="small" onClick = {this.toEdit.bind(this,record.id)}>编辑</Button> 
                        <i>&nbsp;</i>
                        <Button type="danger" size="small" onClick={this.showModalArticle.bind(this,record)}>删除</Button>
                </div>                
        }
      })
      return columns
  }
  toEdit = (id) => {
        this.props.history.push(`/admin/article/edit/${id}`)
  }
  getData = () => {
    this.setState({
      isLoading: true
    })
    getArticles(this.state.limit,this.state.offset)
      .then(res => {
        const columnKeys = Object.keys(res.list[0])
        const columns = this.createColumns(columnKeys)
        this.setState({
          total: res.total,
          dataSource: res.list,
          columns
        })
      })
      .catch((error) => {

      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }
    //分页
    onPageChange = (page, pageSize) => {
          this.setState({
            offset: pageSize * (page-1),
            limit: pageSize
          },() => {
            this.getData()
          })
    }
    onShowSizeChange = (current,size) => {
       this.setState({
         offset: 0,
         limit: size
       }, () => {
         this.getData()
       })
    }
    goCreateArticle = () => {
          this.props.history.push(`/admin/article/create`)
    }
    toExcel = () => {
      // 实际项目中，这个功能是前端发送一个ajax请求到后端，后端返回一个文件下载地址
      const datamap = this.state.dataSource;
      const tableData = [Object.keys(datamap[0])]
      for (let i = 0; i< datamap.length; i++) {
        
        // tableData.push(Object.values(datamap[i]))
        tableData.push([
          datamap[i].id,
          datamap[i].title,
          datamap[i].author,
          datamap[i].amount,
          moment(datamap[i].createAt).format('YYYY-MM-DD HH:mm:ss')
        ])
      }
      // console.log(tableData)
      const ws = XLSX.utils.aoa_to_sheet(tableData)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, "SheetJS")
      /* 文章名组合：sheet+当前页码+当前日期 */

      XLSX.writeFile(wb, `sheet-${this.state.offset / (this.state.limit)+1}-${moment().format('YYYYMMDD')}.xlsx`)
    }
    
    componentDidMount(){
        this.getData()
    }
    render() {
        return (
            <div>
                    <Card
                        title="文章列表"
                        extra={<Button onClick={this.toExcel}>导出excel</Button>}
                        className="articleCard"
                        >
                            <div style={{display:'flex',justifyContent:'flex-end',marginBottom: '16px'}}><Button onClick={this.goCreateArticle}>新建文章</Button></div>
                            <Table 
                                    rowKey={record => record.id}
                                    dataSource={this.state.dataSource} 
                                    columns={this.state.columns}
                                    loading={this.state.isLoading}
                                    pagination={{
                                        current: this.state.offset / (this.state.limit)+1,
                                        total: this.state.total,
                                        hideOnSinglePage:true,
                                        showQuickJumper: true,
                                        showSizeChanger:true,
                                        onChange: this.onPageChange,
                                        onShowSizeChange: this.onShowSizeChange
                                    }} 
                            />
                            <Modal 
                                title={<Typography><Text type="warning"><ExclamationCircleOutlined />&nbsp;此操作不可逆时，请谨慎操作！！！</Text></Typography>}
                                visible={this.state.isShowArticleModal}
                                onCancel={this.hideDelModal}
                                maskClosable={this.state.ClickSpaceHide}
                                confirmLoading={this.state.deleteArtModalLoading}
                                onOk={this.deleteArticleOk}
                            >
                              {this.state.deleteArtModalContent}
                            </Modal>
                    </Card>
            </div>
        )
    }
}
