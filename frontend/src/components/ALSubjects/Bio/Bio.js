import React, {Component} from 'react';
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Bio extends Component {
    state={
        bio:[],
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/subject/bio')
            .then(res=>{
                console.log(res.data);
                console.log(res)
                this.setState({
                    bio:res.data
                })
            })
    }
    render() {
        const {bio} = this.state.bio;
        return (
            <div>
                <div className="d-flex flex-wrap">
                    { this.state.bio.map(m =>
                        <Card style={{width:300}} className="mr-2 bg-light">
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {m.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        );
    }
}

export default Bio;
