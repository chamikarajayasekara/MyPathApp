import React, { useEffect, useState, useMemo } from "react";
import PaginationTab from "./PaginationTab";
import SearchBar from "./Search";
import axios from "axios";
import TableCell from "@material-ui/core/TableCell";
import {Button} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {Link} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {makeStyles,  createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { lightGreen,red } from "@material-ui/core/colors";
import InstituteNav from "./InstituteNav";



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

const InstituteTable = (props)=> {
    const [institute, setInstitute] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting] = useState({ field: "", order: "" });
    const classes = useStyles();
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        const GetInstitute = async () => {
            const token =  localStorage.getItem('admin-token');
            const result = await axios.get('http://localhost:5000/api/institute/details',{ headers: {"auth-token": token}});
            setInstitute(result.data);
            console.log(result);
            console.log(result.data.length)
        };
        GetInstitute();
    }, []);

    const commentsData = useMemo(() => {
        let computedComments = institute;

        if (search) {
            computedComments = computedComments.filter(
                institute =>
                    institute.name.toLowerCase().includes(search.toLowerCase()) ||
                    institute.location.toLowerCase().includes(search.toLowerCase())
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
    }, [institute, currentPage, search, sorting]);

    const DeleteBook = (id) => {
        const token =  localStorage.getItem('admin-token');
        axios.delete('http://localhost:5000/api/institute/delete/'+id,{ headers: {"auth-token": token}})
            .then((result) => {
                props.history.push('/instituteTable')
            });
        window.location = '/instituteTable'
    };
        return (
         <div>
             <InstituteNav/>
             <div className="container" style={{marginTop:"1vh",marginBottom:"3vh"}}>
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
                                     <TableCell align="left">Institute Name</TableCell>
                                     <TableCell align="left">Location</TableCell>
                                     <TableCell align="center">Action</TableCell>
                                 </TableRow>
                             </TableHead>
                             <TableBody>
                                 {commentsData.map(institute => (
                                     <TableRow key={institute._id}>

                                         <TableCell style={{ width: 400 }} align="left">
                                             {institute.name}
                                         </TableCell>
                                         <TableCell style={{ width: 400 }} align="left">
                                             {institute.location}
                                         </TableCell>
                                         {/*<TableCell style={{ width: 80 }}  align="left">*/}
                                         {/*    {book.price}*/}
                                         {/*</TableCell>*/}
                                         <TableCell style={{ width: 200 }}  align="center">
                                             <ThemeProvider theme={customTheme}>
                                                 <Button color="primary"><Link className="nav-link " to={"/editInstitute/"+institute._id}><EditIcon/></Link></Button>&nbsp;
                                                 <Button color="secondary" variant="contained" onClick={() => {DeleteBook(institute._id)}}><DeleteIcon/></Button>
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

export default InstituteTable;
