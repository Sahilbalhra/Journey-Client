import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux'
import { getPosts } from '../../actions/postsAction'

const Paginate = ({ page }) => {
    const{numberOfPages}=useSelector(state=>state.postsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (page)
            dispatch(getPosts(page));
    }, [page,dispatch])
    return (
        <Pagination count={numberOfPages} page={Number(page)||1} variant="outlined"  renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} sx={{justifyContent:"center !important"}}
            />
        )}/>
    )
}

export default Paginate
