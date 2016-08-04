const App= React.createClass({
    getInitialState: function () {
        return {
            count: 0
        }
    },
    add:function () {
        this.setState({count: this.state.count + 1});
    },
    render:function() {
        return <div>
            <Count count={this.state.count} addC={this.add}/>
        </div>
    }
});

const Count = React.createClass({
    adds:function(){
        this.props.addC();
    },
    render:function() {
        return <div>
            {this.props.count}
            <button onClick={this.adds}>+</button>
        </div>
    }
});

ReactDOM.render(<App />, document.getElementById('content'));

