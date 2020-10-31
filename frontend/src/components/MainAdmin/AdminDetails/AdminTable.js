import React, {Component, useEffect, useMemo, useState} from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {lightGreen, red} from "@material-ui/core/colors";
import axios from "axios";
import UserlistNav from "../SiteAdminUsersList/UserlistNav";
import PaginationTab from "../InstituteList/PaginationTab";
import SearchBar from "../InstituteList/Search";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import AdminListnav from "./AdminListnav";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});
const customTheme = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: red
    }
});

const AdminTable =(props)=> {
    const [admin, setAdmin] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting] = useState({ field: "", order: "" });
    const classes = useStyles();
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        const GetAdmin = async () => {
            const token =  localStorage.getItem('admin-token');
            const result = await axios.get('http://localhost:5000/api/admin/details',{ headers: {"auth-token": token}});
            setAdmin(result.data);
            console.log(result);
        };
        GetAdmin();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = admin;

        if (search) {
            computedComments = computedComments.filter(
                admin =>
                    admin.name.toLowerCase().includes(search.toLowerCase())
                // ||
                // user.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) =>
                    reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [admin, currentPage, search, sorting]);

    const DeleteUser = (id) => {
        const token =  localStorage.getItem('admin-token');
        axios.delete('http://localhost:5000/api/admin/delete/'+id,{ headers: {"auth-token": token}})
            .then((result) => {
                props.history.push('/adminTable')
            });
        window.location = '/adminTable'
    };
        return (
            <div>
                <AdminListnav/>
                <div className="container " style={{marginTop:"1vh",marginBottom:"3vh"}}>
                    <div className="row">
                        <div className="col-md-6 ">
                            <PaginationTab
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <SearchBar
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                    <Paper  className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Admin Name</TableCell>
                                        <TableCell align="left">email</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {commentsData.map(admin => (
                                        <TableRow key={admin._id}>

                                            <TableCell style={{ width: 400 }} align="left">
                                                {admin.name}
                                            </TableCell>
                                            <TableCell style={{ width: 400 }} align="left">
                                                {admin.email}
                                            </TableCell>
                                            <TableCell style={{ width: 200 }}  align="center">
                                                <ThemeProvider theme={customTheme}>
                                                    <Button color="primary"><Link className="nav-link " to={"/editAdmin/"+admin._id}><EditIcon/></Link></Button>&nbsp;
                                                    <Button color="secondary" variant="contained" onClick={() => {DeleteUser(admin._id)}}><DeleteIcon/></Button>
                                                </ThemeProvider>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </div>
            </div>
        );
}

export default AdminTable;
