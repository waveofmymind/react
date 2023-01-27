import Header from "../components/Header"
import styled from "styled-components";
import FooterMain from "../components/Footer";
import React, {useEffect, useState} from "react";

import getProblemListApi from "../api/get/getProblemList";
import ProblemList from "../components/problem/ProblemList";
import ProblemListByTable from "../components/problem/ProblemListByTable";
import TagList from "../components/tag/TagList";
import getTagListApi from "../api/get/getTagList";
import getProblemCount from "../api/get/getProblemCount";
import getProblemCountApi from "../api/get/getProblemCount";
import {Pagination} from "antd";

const Main = (props) => {
    const [problemList,setProblemList] = useState([]);
    const [count, setCount] = useState(0);
    const [tagName, setTagName] = useState("전체");
    const [tagList, setTagList] = useState([]);
    const [tagCount, setTagCount] = useState(0);
    const [page, setPage] = useState(0);
    const [allCount, setAllCount] = useState(0);

    const getProblemList = async (tagName) => {
        if (props.location.state !== undefined) {
            tagName = props.location.state.tagName;
            setTagName(props.location.state.tagName);
            const data = await getTagListApi();
            setTagCount(data.length)
        }
        const data = await getProblemListApi(tagName, 0);
        setProblemList(data);
    };

    const getTagList = async () => {
        const data = await getTagListApi();
        setTagList(data);
    };

    const getProblemCount = async () => {
        const data = await getProblemCountApi();
        setCount(data);
    }

    useEffect(() => {
        getProblemList("");
    }, []);

    useEffect(() => {
        getTagList();
    }, []);

    useEffect(() => {
        getProblemCount();
    }, []);

    const onTagClick = async (tagName) => {
        setPage(1);
        if (tagName === "전체") {
            setTagName(tagName);
            await getProblemList("");
        }
        else {
            setTagName(tagName);
            await getProblemList(tagName);
        }

        tagList.map((tag) => {
            if (tag.tagName === tagName) {
                console.log(tagName)
                console.log(tag.count)
                setTagCount(tag.count)
            }
        })
    }
    const onPageClick = async (e) => {
        if (tagName === "전체") {
            const data = await getProblemListApi("", e - 1);
            setProblemList(data);
        }
        else {
            const data = await getProblemListApi(tagName, e - 1);
            setProblemList(data);
        }
        setPage(e)
        console.log(page, e)
    }


    return (
        <div>
            <Header />
            <Container className="container">
                <TagList onClick={onTagClick} name={tagName} tagList = {tagList} count = {count}/>
                <ProblemListByTable problemList={problemList}/>
            </Container>


            <FooterMain />
        </div>


    );

}

const Container = styled.div`
    max-width: 1200px;
    margin-top: 5rem;
`




export default Main;