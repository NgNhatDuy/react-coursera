import React from 'react';
import { CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
    /* Render the view of the selected dish */
    return (
        <div className="col-12 col-md-5 m-1">
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardBody>
                <CardTitle><b>{dish.name}</b></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </div>
    )
}

function RenderComments({ comments }) {
    /* Rendering the view of the comments */

    /*
     * Let a list take all the comments
     * Rendering each comment
     */
    let list = comments.map((comment) => {
        return (
            <li key={comment.id} >
                <div className="text-left">
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            </li>
        )
    })

    return (
        <div className="col-12 col-md-5 m-1">
            <h3 className="float-left"><b>Comments</b></h3>
            <div className="clearfix"></div>
            <ul className="list-unstyled">
                {list}
            </ul>
        </div>
    )
}

const DishDetail = (props) => {
    /* Functional-component to render the selected dish */
    if (props.dish != null) {

        return (
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        );

    } else {

        return (
            <div></div>
        );
    };
}

export default DishDetail