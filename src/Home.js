import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "react-bootstrap";
import { deleteUser } from './Store/actions/UserAction';
import { deleteUsers } from "./Store/actions/UserAction";
import { confirmAlert } from 'react-confirm-alert';
import "./Home.css";
import 'react-confirm-alert/src/react-confirm-alert.css';

const Home = () => {

    const { userData } = useSelector(state => state.user);
    // console.log(userData);

    const [checked, setChecked] = useState([]);
    // console.log(checked);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("*****", checked);
    }, [checked])

    const handleDelete = (index) => {
        // console.log(index);
        // dispatch(deleteUser(index));

        confirmAlert({
            title: 'Delete User',
            message: 'Are you sure to do this.',
            buttons: [{
                label: 'Yes',
                onClick: () => dispatch(deleteUser(index))
            },
            {
                label: 'No'
            }]
        });
    }

    // function check Unckeck All{}
    function Check(event) {

        if (event.target.checked) {
            let selectAll = [];
            userData.forEach((user, i) => {
                selectAll.push(i.toString())
            })
            setChecked(selectAll);

            // setTimeout(() => {
            //     console.log(checked);
            // }, 500);
        }
        else {
            setChecked([]);

            // setTimeout(() => {
            //     console.log(checked);
            // }, 500);
        }
    }

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        }
        else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        // console.log(updatedList);
    };

    const deleteSelecteUsers = () => {
        // dispatch(deleteUsers(checked));

        confirmAlert({
            title: 'Delete User',
            message: 'Are you sure to do this.',
            buttons: [{
                label: 'Yes',
                onClick: () => {
                    dispatch(deleteUsers(checked))
                    setChecked([])
                }
            },
            {
                label: 'No'
            }]
        });
    }

    const tableRows = userData?.map(
        (element, index) => {
            return (
                <tr key={index}>
                    <td><input value={index} type="checkbox" checked={checked.includes(`${index}`)} name="userCheck" onClick={handleCheck} />&nbsp;</td>
                    <td>{index + 1}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>
                    <td>{element.age}</td>
                    <td>{element.password}</td>
                    <td> <button className="home" type="button" onClick={e => handleDelete(index)}>Delete</button></td>
                </tr>
            )
        }
    )

    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th><input type="checkbox" checked={(userData.length === checked.length) && (userData.length > 0)} name="my_check" onChange={Check} /> All</th>
                        <th> S. No.</th>
                        <th> Name</th>
                        <th> Email</th>
                        <th> Phone</th>
                        <th> Age</th>
                        <th> Password</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
            <button className="home" type="button" onClick={deleteSelecteUsers}>Delete Selected</button>
        </div>
    )
}

export default Home;