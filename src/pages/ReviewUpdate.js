import React from "react";
import HeaderMain from "../components/Header"
import ReviewForm from "../components/ReviewForm"
import updateReviewApi from "../api/put/updateReview";
import FooterMain from '../components/Footer';

const ReviewUpdate = (props) => {
    console.log(props)

    const onSubmitHandler = (p) => {
        const data = {
            reviewId: props.location.state.reviewId,
            problemId: props.location.state.problemId,
            content: p.content
        }
        updateReviewApi(data)
    }

    return (
        <div>
            <HeaderMain />
            <ReviewForm onSubmitHandler={onSubmitHandler} problemId={props.match.params.problemId} notificationDate={props.location.state.notificationDate} content={props.location.state.content} title={props.location.state.title} />
            <FooterMain />
        </div>
    );
}

export default ReviewUpdate;
