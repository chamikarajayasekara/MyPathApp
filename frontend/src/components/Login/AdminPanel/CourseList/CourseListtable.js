import React, {Component, useEffect, useMemo, useState} from 'react';
import axios from "axios";
import PaginationTab from "../../../MainAdmin/InstituteList/PaginationTab";
import SearchBar from "../../../MainAdmin/InstituteList/Search";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import {lightGreen, red} from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 540,
        marginBottom:'5px',
        marginTop:'5px'
    },
});
const customTheme = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: red
    }
});
const CourseListtable = (props)=> {
    const [user, setUser] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting] = useState({ field: "", order: "" });
    const classes = useStyles();
    const ITEMS_PER_PAGE = 25;

    useEffect(() => {
        const GetUsers = async () => {
            const token =  localStorage.getItem('cool-jwt');
            const user_id = localStorage.getItem('user_id');
            const user ={
                user_id:user_id,
            }
            axios.post('http://localhost:5000/api/courses',user,{ headers: {"auth-token": token} })
                .then(res=>{
                    setUser(res.data);
                    console.log(res)

                })
        };
        GetUsers();
    }, []);


    const commentsData = useMemo(() => {
        let computedComments = user;

        if (search) {
            computedComments = computedComments.filter(
                user =>
                    user.name.toLowerCase().includes(search.toLowerCase()) || user.institute.toLowerCase().includes(search.toLowerCase())
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
    }, [user, currentPage, search, sorting]);

    const DeleteUser = (id) => {
        const token =  localStorage.getItem('cool-jwt');
        axios.delete('http://localhost:5000/api/courses/delete/'+id,{ headers: {"auth-token": token}})
            .then((result) => {
                props.history.push('/CourseList')
            });
        window.location = '/CourseList'
    };

    return (
        <div>

            <div className="container mt-3 " >
                <div className="row">
                    <div className="col-md-6">
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
                                    <TableCell align="left">Course Name</TableCell>
                                    <TableCell align="left">Institute</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {commentsData.map(user => (
                                    <TableRow key={user._id}>

                                        <TableCell style={{ width: 400 }} align="left">
                                            {user.name}
                                        </TableCell>
                                        <TableCell style={{ width: 400 }} align="left">
                                            {user.institute}
                                        </TableCell>
                                        {/*<TableCell style={{ width: 80 }}  align="left">*/}
                                        {/*    {book.price}*/}
                                        {/*</TableCell>*/}
                                        <TableCell style={{ width: 300 }}  align="center">
                                            <ThemeProvider theme={customTheme}>

                                                <Button color="primary"><Link to={"/CourseDetails/"+user._id}><TouchAppIcon/></Link></Button>&nbsp;
                                                <Button color="primary"><Link className="nav-link " to={"/CourseEdit/"+user._id}><EditIcon /></Link></Button>&nbsp;
                                                <Button  onClick={() => {DeleteUser(user._id)}}><DeleteIcon className="text-danger"/></Button>
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

export default CourseListtable;
