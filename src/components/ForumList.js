import React from 'react'
import Table from 'react-bootstrap/Table'

const ForumList = () => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Topics</th>
                    <th>Replies</th>
                    <th>Views</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>2</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>8</td>
                    <td>0</td>
                </tr>

            </tbody>
        </Table>
    )
}

export default ForumList