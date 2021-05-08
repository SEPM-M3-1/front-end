/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import * as api from '../../../Util/api';
import './PeopleList.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const PeopleList = () => {
    const classes = useStyles();

    const [staff, setStaff] = useState({
      staffList: []
    });

    const [manager, setManager] = useState({
      managerList: []
    });
  
  const getManager = async () => {
    const type = "manager";
    // try {
    //   const getAllManagerRes = await api.getAllManagers(type);
    //   if (getAllManagerRes.status === 200) {
    //     setManager({
    //       managerList: getAllManagerRes.data
    //     })
    //   }
    // } catch (error) {
    //   if (error.response.status === 404) {
    //     setManager({
    //       managerList: []
    //     })
    //   }
    // }
      setManager({
        managerList: [{
          fullName: 'manager1',
          email: 'manager1@gmail.com',
          mobile: '0451172301'
        }, {
          fullName: 'manager2',
          email: 'manager2@gmail.com',
          mobile: '0451172301'
        }]
      })
    }

  const getStaff = async () => {
    const type = "staff";
    // try {
    //   const getAllStaffRes = await api.getAllStaffs(type);
    //   if (getAllStaffRes.status === 200) {
    //     setManager({
    //       staffList: getAllStaffRes.data
    //     })
    //   }
    // } catch (error) {
    //   if (error.response.status === 404) {
    //     setStaff({
    //       staffList: []
    //     })
    //   }
    // }
      setStaff({
        staffList: [{
          fullName: 'staff1',
          limitHours: "40",
          email: 'staff1@gmail.com',
          mobile: '0451172301',
          address: '102 box st'
        }, {
          fullName: 'staff2',
          limitHours: "40",
          email: 'staff2@gmail.com',
          mobile: '0451172301',
          address: '102 box st'
        }]
      })
    }
  
    useEffect(() => {
      getManager(),
      getStaff()
    }, [])
  
    const { staffList } = staff;
    const { managerList } = manager;

  const handleEdit = (row) => {
    const email = row.email;
    console.log(email);
    }
  return (
    <>
    <div className="title">Manager</div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {managerList.map((row) => (
            <TableRow key={row.fullName}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <div className="title">Staff</div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Limit Hours</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Home Address</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staffList.map((row) => (
            <TableRow key={row.fullName}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.limitHours}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={()=> handleEdit(row)}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </>
  );
}

export default PeopleList;
