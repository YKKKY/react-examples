const App=React.createClass({

    getInitialState:function () {
        return {
            elements:[],
            isEditor:true
        }
    },
    toggle:function () {

        this.setState({
            isEditor:!this.state.isEditor
        });
    },
    addElement:function (element) {
        const elements=this.state.elements;
        elements.push(element);
        this.setState({elements});
    },

    render:function(){
        var isEditor = this.state.isEditor;
        return <div>

            <button onClick={this.toggle}>{isEditor ?"Previewor" :"Editor"}</button>
            <div className={isEditor ?"":"hidden"}>
                <Editor  elements={this.state.elements} add={this.addElement} />
            </div>
            <div >
                <Previewor />
            </div>
        </div>
    }
});

const Editor=React.createClass({

    render:function(){
        return <div>
            <Left  />
            <Right  onAdd={this.props.add}/>
        </div>
    }
});
const Left=React.createClass({

    render:function(){

        return <div>

        </div>
    }
});

const Right=React.createClass({

    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element);
    },
    render: function() {
        return <div>
            <input type="radio" name="element" value="text" />Text
            <input type="radio" name="element" value="date" />Date
            <button onClick={this.add}>+</button>
        </div>
    }
});
const Previewor=React.createClass({

    render:function(){
        return <div>

        </div>
    }
});
ReactDOM.render(<App />,document.getElementById('content'));