const App = React.createClass({


    render: function () {

        return <div>
            <button >previewor</button>
            <div  >
                <Editor />
            </div>
            <div>
                <Previewor />
            </div>
        </div>
    }
});

const Editor = React.createClass({

    render: function () {
        return <div>
            编辑
        </div>
    }
});
const Previewor = React.createClass({

    render: function () {
        return <div>
            预览
        </div>
    }
})

ReactDOM.render(<App />, document.getElementById('content'));