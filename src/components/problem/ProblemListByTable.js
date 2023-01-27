import { Space, Table, Tag ,Rate} from 'antd';
import TagButton from "../tag/TagButton";
import {Link} from "react-router-dom";
import styled from "styled-components";
import React, {useState} from "react";
const { Column, ColumnGroup } = Table;

function ProblemListByTable(props) {
    const problemList =props.problemList
    const [value, setValue] = useState(0);

    return (
        <Table dataSource={problemList}>

            <Column title="문제"
                    dataIndex="title"
                    key="title"
            />
            <Column title="난이도" dataIndex="step" key="step"
                    render={(step) => (
                        <Rate disabled defaultValue={step} />
                    )}
                />
            <Column title="링크" dataIndex="link" key="link"
                    render={(link) => (
                        <a className="nav-link" onClick={() => window.location.href = link}>문제 링크</a>
                    )}
            />
            <Column title="태그"
                    dataIndex="tagList"
                    key = "id"
                    render={(tagList) => (
                        <>
                            <TagList tagList={tagList} />
                        </>
                    )}
            />
            <Column
                dataIndex="id"
                key="id"
                render={(id) => (
                    <Link to={`/problems/${id}`}>{'보기'}</Link>
                )}
            />
        </Table>
    );

}

function TagList(props) {
    const tagList = props.tagList
    return (
        <div>
            {tagList.length !== 0 &&
                tagList.map((o) => {
                    return (
                    <Link onClick={() => props.onClick(o.tag.tagName)} style={{ textDecoration: 'none' }}><TagButton name={o.tag.tagName} /></Link>
                    )})
            }
        </div>
    )
}

const Step = styled.div`
    float: left;
    font-weight: bold;
    font-size: 22px;
    margin-right: 8px;
    margin-top: 6px;
`


export default ProblemListByTable;