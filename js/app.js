const App = React.createClass({
    getInitialState(){
        return {
            elements:[],
            isEditor:true,
        }
    },
    toggle:function () {
        this.setState({
            isEditor:!this.state.isEditor});
    },
    render: function () {
        const isEditor = this.state.isEditor;
        return <div>
            <button  onClick={this.toggle}>{isEditor ? "Previewor" :"Editor"}</button>
            <div  className={isEditor ? "hidden" :""}>
                <Editor />
            </div>
            <div  className={isEditor ? "" :"hidden"}>
                <Previewor />
            </div>
        </div>
    }
});

const Editor = React.createClass({

    render: function () {
        return <div>
            <Left />
            <Right />
        </div>
    }
});

const Left=React.createClass({

 render:function(){
  return <div>框框</div>
 }
});
const Right=React.createClass({

 render:function(){
  return <div>添加事件的按钮</div>
 }
})
const Previewor = React.createClass({

    render: function () {
        return <div>
            预览
        </div>
    }
})

ReactDOM.render(<App />, document.getElementById('content'));