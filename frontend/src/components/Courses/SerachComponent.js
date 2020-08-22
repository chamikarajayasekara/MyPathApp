import React, {Component, useEffect, useMemo, useState} from 'react'
import axios from "axios";
import PaginationTab from "../MainAdmin/InstituteList/PaginationTab";
import SearchBar from "../MainAdmin/InstituteList/Search";
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {lightGreen, red} from "@material-ui/core/colors";
import './coursecard.css';
import {Link} from "react-router-dom";
import Filter from "./filter";



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

const SerachComponent = (props)=> {
    const [course, setAdmin] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [items,setItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting] = useState({ field: "", order: "" });
    const classes = useStyles();
    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        const GetAdmin = async () => {
            const result = await axios.get('http://localhost:5000/api/courses/list/',);
            setAdmin(result.data);
            setItems(result.data.length)
        };
        GetAdmin();
    }, []);

    const noOfCourses = course.length;
    const commentsData = useMemo(() => {
        let computedComments = course;

        if (search) {
            computedComments = computedComments.filter(
                admin =>
                    admin.name.toLowerCase().includes(search.toLowerCase())
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
    }, [course, currentPage, search, sorting]);



    return (
            <div className="row" style={{marginTop:"1vh",marginBottom:"3vh"}}>
                <div className="col-md-2">
                    <h6> {noOfCourses}&nbsp;Courses available</h6>
                    <Filter/>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBar
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        {commentsData.map(course =>
                            <Link to={"/courseDet/"+course._id} style={{textDecoration:"none"}}>
                                <div className="card d-flex  flex-wrap card-client mb-3 mt-3 ml-lg-3 text-center">
                                    <div className="card-header card-client-head">
                                        <p className="text-left">{course.institute}</p>
                                        <p className="text-white">{course.name}</p>
                                        <p>{course.length}</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{course.category}&nbsp;{course.level}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>

                </div>
        </div>
    );
}

export default SerachComponent;
