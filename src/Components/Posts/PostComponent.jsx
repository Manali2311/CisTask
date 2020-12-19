import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

function PostComponent() {

    const [arr, setarr] = useState([]);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setarr(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    const column = [
        {
            title: "Id", field: "id"
        },
        {
            title: "Title", field: "title"
        },
        {
            title: "Body", field: "body"
        }
    ]

    return (
        <div>
            <MaterialTable
                title="Post Data"
                data={arr} columns={column}
                options={{
                    filtering: true, exportButton: true, sorting: true,
                    headerStyle: {
                        backgroundColor: 'pink',
                        color: 'black'
                    }
                }}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setarr([...arr, newData]);

                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...arr];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setarr([...dataDelete])

                                resolve()
                            }, 1000)
                        }),

                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...arr];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setarr([...dataUpdate]);

                                resolve();
                            }, 1000)
                        }),
                }}
            />
            
        </div>
    )

}
export default PostComponent;