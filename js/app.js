const App=React.createClass({

    getInitialState:function () {
        return {
            elements:[],
            isEditor:true,
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
    deleteElement:function (index) {
        const elements=this.state.elements;
        elements.splice(index,1);
        this.setState({elements});
    },
    render:function(){
        var isEditor = this.state.isEditor;
        return <div className="Preview">

            <button type="button" className="btn btn-primary" onClick={this.toggle}>{isEditor ?"Previewor" :"Editor"}</button>

            <div >
            <div className={isEditor ?"":"hidden"}>
                <Editor  elements={this.state.elements} onAdd={this.addElement} delete={this.deleteElement}/>
            </div>
            </div>
            <div className={isEditor ? "hidden":""}>
                <Previewor elements={this.state.elements}/>
            </div>
        </div>
    }
});

const Editor=React.createClass({

    render:function(){
        return <div>
            <div className="display">
            <Left  elements={this.props.elements} onDelete={this.props.delete}/>
            </div>
            <div className="select">
            <Right  onAdd={this.props.onAdd}/>
        </div>

        </div>
    }
});
const Left=React.createClass({

    remove:function (index) {
        this.props.onDelete(index);
    },
    render:function(){
        const elements=this.props.elements.map((ele,index)=>{
            return <div  >
                <div >
                <div key={index}>
                    <input type={ele}/>
                    <button type="button" className="btn btn-primary" onClick={this.remove.bind(this, index)}>X</button>
                </div>
                </div>
            </div>
        })
        return <div>
            {elements}
        </div>
    }
});

const Right=React.createClass({

    add: function () {
        const element = $("input[name=element]:checked").val();
        this.props.onAdd(element);
    },
    render: function() {

        return <div >
            <div  className="row">
            <input type="radio" name="element" value="text" />Text
            <input type="radio" name="element" value="date" />Date

            <button type="button" className="btn btn-primary" onClick={this.add}>+</button>
        </div>
        </div>
    }
});
const Previewor=React.createClass({

    render:function(){
        const elements=this.props.elements.map((ele,index)=>{
            return <div key={index}>
                <input type={ele} />
            </div>
        })
        return <div>
            {elements}

            <button type="button" className="btn btn-primary">submit</button>
        </div>
    }
});
ReactDOM.render(<App />,document.getElementById('content'));