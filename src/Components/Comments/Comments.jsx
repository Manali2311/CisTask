import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

function CommentsComponent() {

    const [arr, setarr] = useState([]);
    const [comments, setcomments] = useState([]);


    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                setarr(res.data)
            })
            .catch(error => {
                console.log(error)
            })

            axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(res => {
                setcomments(res.data)
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
                        backgroundColor: 'Brown',
                        color: 'black'
                    }
                }}
                detailPanel={[
                    {
                      tooltip: 'Show Name',
                      render: rowData => {
                        return (
                          <div
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              backgroundColor: 'lightsalmon',
                            }}
                          >
                           {comments.map(comm=>(
                               (comm.postId === rowData.id)?
                              <h6 key={comm.id}><b style={{color:"black"}}>{comm.name}</b> - {comm.body}</h6>
                               :null
                           ))}
                          </div>
                        )
                      },
                    },
                ]}                
            />
            
        </div>
    )

}
export default CommentsComponent;