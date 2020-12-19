import React from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';

class Posts extends React.Component {
    constructor() {
        super();

        this.state = {
            arr: []
        }
    }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                // console.log(res.data)
                this.setState({
                    arr: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    checkk = (id) => {

        var val = [];
        console.log(id);

        this.state.arr.map(ar => (
            val.push(ar.id)
        ))


        var index = val.indexOf(id);
        console.log(index);

        this.state.arr.filter(ar => (ar.id !== id));

        this.setState({
            arr: this.state.arr
        })

        console.log(this.state.arr)

    }



    render() {
        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'title', headerName: 'Title', width: 500, sortable: true, filter: true },
            { field: 'body', headerName: 'Body', width: 900 },
        ];
        return (
            <div>
                <div style={{ height: 400, width: '100%', display: "flex", flexDirection: "column" }}>

                    < DataGrid rows={this.state.arr} columns={columns} pageSize={5} checkboxSelection onRowSelected={(event) => this.checkk(event.data.id)} />
                </div>
            </div>
        )
    }
}
export default Posts;